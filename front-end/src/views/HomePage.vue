<template>


    <v-row class="grid">
      <v-col cols="2">
        <v-card-text class="text">
          "Fall 2023 emerges as a season of introspection and reconnection, echoing the global sentiment of unity and sustainability. In fashion, this translates to a harmonious blend of vintage revivals and cutting-edge innovations. Earthy tones, reminiscent of autumnal forests and early sunsets, dominate the palettes, while splashes of electric blues and neon oranges hint at the digital age's influence. Sustainable fabrics and upcycled materials are not just preferred but celebrated, as designers embrace both form and function. We're witnessing a rebirth of the classics too, with trench coats, turtlenecks, and tailored pants being reimagined with modern twists. Embroidered details, asymmetric cuts, and bold patterns lend an air of playful defiance. As the lines between workwear and leisurewear blur, comfort remains paramount. Dive into our curated collection and embody the essence of Fall 2023 - where tradition meets modernity, and fashion becomes a statement of purpose."
        </v-card-text>
      </v-col>
      <v-col cols="10">
        <div style="position: relative;">
          <v-img :src="coverImage" cover height="100%"></v-img>
          <v-btn @click="goToProducts" class="centered-btn" style="z-index: 1;">New Arrivals</v-btn>
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
    };
  },
  methods: {
    goToProducts() {
      this.$router.push({ name: 'Products' });
    }
  }
}
</script>
  

<style scoped>
.grid {
  margin-top: 2rem;
  height: 100vh;
}

.text {
  font-size: 12px;
}

/* .color {
  background-color: blue;
} */

.centered-btn {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>