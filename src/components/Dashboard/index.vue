<template>
  <div>
    <b-row style="margin-bottom:20px">
      <b-col cols="12" xl="12" style="padding: 15px;">Dashboard</b-col>
      <b-col cols="12" xl="12">
        <!--<transition name="slide">-->
        <b-card>
          <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
            <template v-if="isLoading" slot="table-caption">
              <div class="area_loading">
                <img src="../../assets/Loading_icon.gif" alt="" width="250px">
              </div>
            </template>
            <template slot="options" slot-scope="items">
              <strong>
                <button type="button" class="btn btn-outline-warning" style="margin-right: 20px;" @click="modifyModal(items.item)">Modify</button>
                <button type="button" class="btn btn-outline-danger" @click="deleteModal(items.item)">Delete</button>
              </strong>
            </template>
          </b-table>
          <div>
            <a href="#" class="btn btn-outline-primary btn-lg btn-block" @click="showModal({componentName:'AddModal'})">Add User</a>
          </div>
        </b-card>
        <!--</transition>-->
      </b-col>
    </b-row>
  </div>

</template>

<script>
  import firebase from '@/firebase'
  import { mapState, mapMutations } from 'vuex'
    export default {
        name: "Dashboard",
      props: {
        hover: {
          type: Boolean,
          default: true
        },
        striped: {
          type: Boolean,
          default: true
        },
        bordered: {
          type: Boolean,
          default: false
        },
        small: {
          type: Boolean,
          default: false
        },
        fixed: {
          type: Boolean,
          default: false
        }
      },
      data: () => {
        return {
          items: [],
          keys: [],
          fields: [
            {key: 'userId'},
            {key: 'name'},
            {key: 'registered'},
            {key: 'role'},
            {key: 'email'},
            {key: 'options'},
          ],
          currentPage: 1,
          perPage: 50,
          totalRows: 0,
          isLoading: false
        }
      },
      created(){
        this.isLoading = true;
        this.fetchFirebaseData();
      },
      computed: {
        ...mapState({
          updateData : `update`
        })
      },
      watch: {
        updateData(val, oldVal) {
          console.log('%cupdateData new: %s, old: %s','color: blue', val, oldVal);
          this.fetchFirebaseData();
        }
      },
      methods: {
        ...mapMutations([`showModal`]),
        fetchFirebaseData() {
          console.log('Dashboard fetchFirebaseData !!!!');
          firebase.database().ref('/').once('value')
            .then((data)=>{
              console.log(data.val());
              // this.items = data.val().usersData;
              this.items = Object.values(data.val().usersData);
              this.keys = Object.keys(data.val().usersData);

              // key mapping
              for(let i=0; i<this.items.length;i++){
                this.items[i].key = this.keys[i];
              }

              this.isLoading = false;
            })
            .catch((error)=>{console.log(error)})
        },
        getRowCount (items) {
          return items.length
        },
        modifyModal(item){
          console.log('modifyModal ::');
          console.log(item);
          item.componentName ='ModifyModal';
          this.showModal(item);
        },
        deleteModal(item){
          console.log('deleteModal ::');
          console.log(item);
          item.componentName ='DeleteModal';
          this.showModal(item);
        }
      }
    }
</script>

<style scoped>
  .card-body >>> table > tbody > tr > td {
    line-height: 38px;
  }
  .area_loading{
    text-align: center;
  }
</style>
