<template>
  <b-row>
    <b-col cols="12" xl="12" style="padding: 15px;">Dashboard</b-col>
    <b-col cols="12" xl="12">
      <transition name="slide">
        <b-card>
          <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
            <template slot="id" slot-scope="data">
              <strong>{{data.item.id}}</strong>
            </template>
            <template slot="name" slot-scope="data">
              <strong>{{data.item.name}}</strong>
            </template>
          </b-table>
        </b-card>
      </transition>
    </b-col>
  </b-row>
</template>

<script>
  import usersData from './UsersData'
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
          items: usersData.filter((user) => user.id < 42),
          fields: [
            {key: 'id'},
            {key: 'name'},
            {key: 'registered'},
            {key: 'role'},
            {key: 'email'}
          ],
          currentPage: 1,
          perPage: 50,
          totalRows: 0
        }
      },
      computed: {
      },
      methods: {
        getRowCount (items) {
          return items.length
        },
      }
    }
</script>

<style scoped>
  .card-body >>> table > tbody > tr > td {
    /*cursor: pointer;*/
  }
</style>
