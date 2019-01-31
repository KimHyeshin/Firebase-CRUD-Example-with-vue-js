<template>
  <div class="_deleteModal">
    <!--delete modal-->
    <div v-if="active == 0" class="modal" style="display: inline-block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete Modal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>User ID : {{item.userId}}</p>
            <p>Name : {{item.name}}</p>
            <p>Role : {{item.role}}</p>
            <p>Email : {{item.email}}</p>
            <p>삭제하시겠습니까?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="deleteItem">Delete</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="hideModal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!--delete feedback modal-->
    <div v-if="active == 1" class="modal" style="display: inline-block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete Complete!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>삭제되었습니다.</p>
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
    name: "DeleteModal",
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
      Object.assign(this.item, this.$store.state.modalOptions);
    },
    methods: {
      ...mapMutations(['hideModal','setUpdate']),
      next(){
        this.active++;
      },
      deleteItem() {
        firebase.database().ref('usersData/'+this.item.key).remove().then(() => {
          this.setUpdate();
          this.next();
        }).catch((error) => {
          console.log('%cdata 삭제 중 에러가 발생하였습니다.','color:red');
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped>
  .modal{
    background: rgba(0,0,0,0.5);
  }
  .area_input {
    text-align: left;
  }
  label {
    width: 65px;
    text-align: right;
  }
  p {
    text-align: left;
  }
</style>
