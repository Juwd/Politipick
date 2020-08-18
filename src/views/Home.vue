<template>
  <div class="home">
    <posts />
  </div>
</template>

<script>
// @ is an alias to /src

import posts from '../components/posts'
export default {
  name: 'Home',
  components: {
    posts
  }
}
</script>
