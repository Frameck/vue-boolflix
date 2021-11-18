<template>
    <div class="header-container">
        <h1>BOOLFLIX</h1>

        <div class="input-group">
            <input type="text" class="form-control" placeholder="search" 
            aria-label="search" aria-describedby="button-addon2"
            v-model="searchQuery" @keyup.enter="startSearch">
            <button class="btn btn-secondary" type="button" id="button-addon2"
            @click="startSearch">Search</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            searchQuery: ''
        }
    },
    methods: {
        startSearch() {
            this.$emit('startSearch', this.searchQuery)
        }
    }
}
</script>

<style>

</style>