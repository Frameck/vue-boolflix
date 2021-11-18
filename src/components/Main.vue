<template>
    <div class="main-container">
        <div class="cards-container">
            <!-- card for movies -->
            <Card v-for="movie,i in apiData['movie']"
            :key="`movie_${i}`"
            :data="movie"
            ></Card>
            <!-- card for tv shows -->
            <Card v-for="tvShow,k in apiData['tv']"
            :key="`tvShow_${k}`"
            :data="tvShow"
            ></Card>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
    name: 'Main',
    components: { Card },
    props: { apiData: Object }
}
</script>

<style>

</style>