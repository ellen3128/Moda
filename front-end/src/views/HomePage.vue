<template>
    <v-row>
        <v-col cols="2">
        <v-card-text>
          Lorem ipsum...
        </v-card-text>
      </v-col>
      <v-col cols="10">
        <v-img :src="coverImage" cover height="100%"></v-img>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        coverImage: require('@/assets/cover.jpg')
      }
    }
  }
  </script>
  

<style scoped>
h1 {
    color: lightblue;
}

.color {
    background-color: blue;
}
</style>