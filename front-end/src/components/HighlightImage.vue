<template>
    <v-row class="grid">
        <v-col cols="6">
            <v-img class="image" :src="require('../assets/main.jpg')" alt="main" />
        </v-col>
        <v-col cols="6">
            <v-card-text class="text">
                <span>Fall / Winter 2023</span><br><br>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad obcaecati sunt repudiandae alias? Molestiae nisi accusamus consequatur, laboriosam dicta mollitia magnam qui nihil commodi voluptatibus incidunt adipisci quos quod quasi. <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae id deleniti laudantium, nihil exercitationem sed alias quod molestiae atque facilis deserunt ab, magnam saepe earum. Debitis, corporis doloribus? 
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
    width: 70%;
    height: 70%;
}

.text {
    margin-top: 3rem;
    margin-left: -5rem;
    padding: 0rem;
}

span {
    font-size: 40px;
    font-weight: 800;
}
</style>