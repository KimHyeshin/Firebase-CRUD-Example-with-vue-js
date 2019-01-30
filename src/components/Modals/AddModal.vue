<template>
  <div class="_addModal">
    <div v-if="active == 0" class="modal" style="display: inline-block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Modal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="area_input">
              <label for="userId">User ID : </label>
              <input v-model="item.userId" type="text" id="userId"/>
            </div>
            <div class="area_input">
              <label for="userId">Name : </label>
              <input v-model="item.name" type="text" id="name"/>
            </div>
            <div class="area_input">
              <label for="userId">Role : </label>
              <input v-model="item.role" type="text" id="role"/>
            </div>
            <div class="area_input">
              <label for="userId">Email : </label>
              <input v-model="item.email" type="text" id="email"/>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="add">Save</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="hideModal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="active == 1" class="modal" style="display: inline-block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Complete!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>추가되었습니다.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="hideModal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapMutations} from 'vuex'
  import firebase from '@/firebase'

  export default {
    name: "AddModal",
    data() {
      return {
        active: 0,
        item: {
          userId: '',
          name: '',
          role: '',
          email: ''
        }
      }
    },
    mounted(){
      this.active = 0;
    },
    methods: {
      ...mapMutations(['hideModal','setUpdate']),
      next(){
        this.active++;
      },
      add() {
         let current = new Date()
        this.item.registered = current.getFullYear() + '/'
          + ('0' + current.getMonth()+1).slice(-2) + '/'
          + ('0' + current.getDate()).slice(-2)
        this.item.key = this.item.userId;

        firebase.database().ref('usersData').update({
          [this.item.key] : this.item
        }).then(() => {
          this.setUpdate();
          this.next();
        }).catch((error) => {
          console.log('%cdata 추가 중 에러가 발생하였습니다.','color:red');
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped>
  .area_input {
    text-align: left;
  }

  label {
    width: 65px;
    text-align: right;
  }
</style>
