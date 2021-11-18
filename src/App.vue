<template>
	<div id="app">
		<Header @startSearch="setSearchQuery"></Header>
		<Main :apiData="this.apiData"></Main>
	</div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
	name: 'App',
	components: { Main, Header },
	data() {
		return {
			apiKey: '0100ff849241e864745d64742edcb728',
			apiBaseUrl: 'https://api.themoviedb.org/3',
			apiEndpoints: {
				movie: '/search/movie',
				tv: '/search/tv'
			},
			apiData: {
				movie: [],
				tv: []
			},
			searchedQuery: ''
		}
	},
	methods: {
		apiCall() {
			for (const key in this.apiEndpoints) {
				if (Object.hasOwnProperty.call(this.apiEndpoints, key)) {
					const endpoint = this.apiEndpoints[key]
					axios.get(this.apiBaseUrl + endpoint, {
						params: {
							api_key: this.apiKey,
							query: this.searchedQuery
						}
					}).then(res => {
						this.apiData[key] = res.data.results
					})
				}
			}
		},
		setSearchQuery(searchQuery) {
            this.searchedQuery = searchQuery
			this.apiCall()
        }
	}
}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

@import "~bootstrap/scss/bootstrap";
@import "@/styles/main.scss";
</style>
