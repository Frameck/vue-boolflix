<template>
    <div class="header-container">
        <h1>BOOLFLIX</h1>

        <SelectFilter 
        :genres="this.genres"
        @filterMovieMade="startMovieFilter"
        @filterTvMade="startTvFilter">
        </SelectFilter>

        <div class="input-group">
            <input type="text" class="form-control" placeholder="search" 
            aria-label="search" aria-describedby="button-addon2"
            v-model="searchQuery" @keyup.enter="startSearch">
            <button class="btn btn-danger" type="button" id="button-addon2"
            @click="startSearch">Search</button>
        </div>
    </div>
</template>

<script>
import SelectFilter from './SelectFilter.vue'

export default {
    name: 'Header',
    components: { SelectFilter },
    props: { genres: Object },
    data() {
        return {
            searchQuery: '',
            filterValues: {
                movie: '',
                tv: ''
            }
        }
    },
    methods: {
        startSearch() {
            this.$emit('startSearch', this.searchQuery)
        },
        clearFilters() {
            let filterValue = ''
            this.filterValues.movie = filterValue
            this.$emit(`filterMovieMade`, this.filterValues.movie)

            this.filterValues.tv = filterValue
            this.$emit(`filterTvMade`, this.filterValues.tv)
        },
        startMovieFilter(filterValue) {
            this.filterValues.movie = filterValue
            this.$emit(`filterMovieMade`, this.filterValues.movie)
        },
        startTvFilter(filterValue) {
            this.filterValues.tv = filterValue
            this.$emit(`filterTvMade`, this.filterValues.tv)
        }
    }
}
</script>

<style>

</style>