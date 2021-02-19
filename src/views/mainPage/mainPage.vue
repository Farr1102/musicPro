<template>
  <div>
    <mt-header fixed title="固定在顶部">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="search" slot="right" @click="searchMusic">
      </mt-button>
    </mt-header>
    <search-res></search-res>
       
  </div>
</template>
<script>
import searchRes from "./components/searchRes"
export default {
  components: {
    searchRes
  },
  data() {

    return{

    }
  },
  methods: {
    searchMusic() {

    }
  }
}
</script>
