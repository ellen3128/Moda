<template>
    <v-row class="grid">
        <v-col cols="6">
            <v-img class="image" :src="require('../assets/main.jpg')" alt="main" />
        </v-col>
        <v-col cols="6">
            <v-card-text class="text">
                <span>Fall / Winter 2023</span><br><br>
                "Fall 2023 emerges as a season of introspection and reconnection, echoing the global sentiment of unity and sustainability. In fashion, this translates to a harmonious blend of vintage revivals and cutting-edge innovations. Earthy tones, reminiscent of autumnal forests and early sunsets, dominate the palettes, while splashes of electric blues and neon oranges hint at the digital age's influence. Sustainable fabrics and upcycled materials are not just preferred but celebrated, as designers embrace both form and function. We're witnessing a rebirth of the classics too, with trench coats, turtlenecks, and tailored pants being reimagined with modern twists. Embroidered details, asymmetric cuts, and bold patterns lend an air of playful defiance. As the lines between workwear and leisurewear blur, comfort remains paramount. Dive into our curated collection and embody the essence of Fall 2023 - where tradition meets modernity, and fashion becomes a statement of purpose."
            </v-card-text>
        </v-col>


    </v-row>
</template>

<script>

</script>

<style scoped>
.grid {
    margin-left: 1rem;
    margin-bottom: -10rem;
}

.image {
    margin-left: 2rem;
    margin-top: 2rem;
    padding: 0rem;
    width: 75%;
    height: 70%;
}

.text {
    margin-top: 2rem;
    margin-left: -5rem;
    padding: 0rem;
    width: 80%;
    letter-spacing: 1px;
    line-height: 25px;
}

span {
    font-size: 40px;
    font-weight: 800;
}
</style>