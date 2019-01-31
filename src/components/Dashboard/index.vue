<template>
  <div>
    <b-row style="margin-bottom:20px">
      <b-col cols="12" xl="12" style="padding: 15px;">Dashboard</b-col>
      <b-col cols="12" xl="12">
        <!--<transition name="slide">-->
        <b-card>
          <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
            <template slot="options" slot-scope="items">
              <strong>
                <button type="button" class="btn btn-outline-warning" style="margin-right: 20px;">Modify</button>
                <button type="button" class="btn btn-outline-danger">Delete</button>
              </strong>
            </template>
          </b-table>
          <div>
            <a href="#" class="btn btn-outline-primary btn-lg btn-block" @click="showModal('AddModal')">Add User</a>
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
          totalRows: 0
        }
      },
      created(){
        this.fetchFirebaseData();
      },
      computed: {
        ...mapState({
          updateData : `update`
        })
      },
      watch: {
        updateData() {
          this.fetchFirebaseData();
        }
      },
      methods: {
        ...mapMutations([`showModal`]),
        fetchFirebaseData() {
          console.log('fetchFirebaseData !!!!');
          firebase.database().ref('/').once('value')
            .then((data)=>{
              console.log(data.val());
              // this.items = data.val().usersData;
              this.items = Object.values(data.val().usersData);
              this.keys = Object.keys(data.val().usersData);

              console.log(this.items);
              console.log(this.keys);
            })
            .catch((error)=>{console.log(error)})
        },
        getRowCount (items) {
          return items.length
        },
      }
    }
</script>

<style scoped>
  .card-body >>> table > tbody > tr > td {
    line-height: 38px;
  }
</style>
