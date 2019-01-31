<template>
    <div id="modal">
      <component v-if="visible" :is="component"></component>
    </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import Vue from 'vue'
  export default {
    name: "DefaultModal",
    data() {
      return {
        component: null
      }
    },
    computed: {
      ...mapState({
        visible: `modalVisible`,
        modalComponent: `modalComponent`
      })
    },
    watch: {
      modalComponent(componentName) {
        if (!componentName) return;
        Vue.component(componentName, () => import(`./${componentName}`))
        this.component = componentName
      }
    }
  }
</script>

<style scoped>
  .modal{
    background: rgba(0,0,0,0.5);
  }
</style>
