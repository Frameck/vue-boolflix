<template>
    <div class="selectFilter">
        <!-- filter per movie -->
        <label for="filterMovie">Filtro film:</label>
        <select name="filterMovieByGenre" id="filterMovie" v-model="filterValues.movie" @change="startMovieFilter">
            <option v-for="genre,i in genres.movie" :key="`genre${genre.name + i}`" :value="genre.name">{{ genre.name }}</option>
        </select>
        <!-- filter per tvShow -->
        <label for="filterTv">Filtro serie tv:</label>
        <select name="filterTvByGenre" id="filterTv" v-model="filterValues.tv" @change="startTvFilter">
            <option v-for="genre,i in genres.tv" :key="`genre${genre.name + i}`" :value="genre.name">{{ genre.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SelectFilter',
    props: { genres: Object },
    data() {
        return {
            filterValues: {
                movie: '',
                tv: ''
            }
        }
    },
    methods: {
        startMovieFilter() {
            this.$emit(`filterMovieMade`, this.filterValues.movie)
        },
        startTvFilter() {
            this.$emit(`filterTvMade`, this.filterValues.tv)
        }
    }
}
</script>

<style>

</style>