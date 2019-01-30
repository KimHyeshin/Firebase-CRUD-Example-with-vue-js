<template>
  <div class="modal" style="display: inline-block;">
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
            <input type="text" id="userId"/>
          </div>
          <div class="area_input">
            <label for="userId">Name : </label>
            <input type="text" id="name"/>
          </div>
          <div class="area_input">
            <label for="userId">Role : </label>
            <input type="text" id="role"/>
          </div>
          <div class="area_input">
            <label for="userId">Email : </label>
            <input type="text" id="email"/>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="hideModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
    export default {
        name: "AddModal",
      methods:{
          ...mapMutations(['hideModal'])
      }

    }
</script>

<style scoped>
.area_input{
  text-align: left;
}
  label{
    width: 65px;
    text-align: right;
  }
</style>
