<template>
    <v-row class="grid">
        <v-col cols="2">
        <v-card-text class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci qui amet voluptatibus libero maxime distinctio aliquam, in quo corporis, est cumque eveniet debitis voluptates vitae. Expedita soluta distinctio quod.
        </v-card-text>
      </v-col>
      <v-col cols="10">
        <div style="position: relative;">
        <v-img :src="coverImage" cover height="100%"></v-img>
        <v-btn class="centered-btn" style="z-index: 1;">My Button</v-btn>
        </div>
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
.grid {
    margin-top: 2rem;
}
.text {
    font-size: 12px;
}

.color {
    background-color: blue;
}
.centered-btn {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>