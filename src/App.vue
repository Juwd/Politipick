<template>
  <v-app class="grey lighten-4">
    <navbar/>

    <v-main>
      <router-view></router-view>
    </v-main>
    <footer class="v-footer justify-center v-sheet theme--light" style="height: 50px; background-color: rgb(41, 41, 41); border-color: rgb(41, 41, 41);" data-booted="true"><div class="title font-weight-light grey--text text--lighten-1 text-center">
        © 2021 — Polipick — Made with the spirit of Pilipinos by Hatjod
      </div></footer> 
  </v-app>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'App',

  components: {
    navbar
  },

  data: () => ({
    //
  }),
};
</script>
