<template>
<div class="container">
  <!-- create posts here -->
   <!-- <div class="create-post">
      <label for="create-post">Input text here </label>
      <input type="text" id="create-post" v-model="text" placedholder="input text here ok?">
      <v-btn depressed v-on:click="createPost">Post!</v-btn>
  </div>  -->
  <p v-if="error"> {{error }} </p>
  <div>
    <div v-for="(post,index) in posts" v-bind:item="post" v-bind:index="index" v-bind:key="post._id" v-on:dblclick="deletePost(post._id)" >
        {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/ ${post.createdAt.getFullYear()}`}}
        <router-link :to="{name: 'Politician', params: {title: post.title } }"><p class="text"> {{post.title}} </p></router-link>
<!-- :to="{name: 'Politician', params: post.id}" -->
    </div>
  </div>
  <router-view :key="$router.path"/>
</div>
</template>

<script>
import postService from '../service/postService'
export default {
  name: 'posts',
  data () {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
  try {
    this.posts = await postService.getPosts();
  } catch (err) {
    this.error = err.message
  }
}, 
methods: {
  async createPost(){
      //remember on the postService that We put 
      //the insert post over there?
      await postService.insertPost(this.text);
      this.posts = await postService.getPosts();
  },
  async deletePost(id){
    await postService.deletePost(id);
    this.posts = await postService.getPosts();
  }
}

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
