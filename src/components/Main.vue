<template>
    <div class="main-container">
        <div class="cards-container">
            <!-- card for movies -->
            <Card v-for="movie,i in apiData['movie']"
            :key="`movie_${i}`"
            :data="movie"
            :genresId="genresId.movie"
            :filterValues="filterValues"
            :type="'movie'">
            </Card>
            <!-- card for tv shows -->
            <Card v-for="tvShow,k in apiData['tv']"
            :key="`tvShow_${k}`"
            :data="tvShow"
            :genresId="genresId.tv"
            :filterValues="filterValues"
            :type="'tv'">
            </Card>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
    name: 'Main',
    components: { Card },
    props: { apiData: Object, genresId: Object, filterValues: Object },
    // data() {
    //     return {
    //         filterValues: {
    //             movie: '',
    //             tv: ''
    //         }
    //     }
    // },
    // methods: {
    //     startFilter(type, filterValue) {
    //         this.filterValues[type] = filterValue
    //     }
    // }
}
</script>

<style>

</style>