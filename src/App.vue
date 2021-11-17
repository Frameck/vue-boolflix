<template>
	<div id="app">
		<div class="input-group">
			<div class="form-outline">
				<input type="search" id="searchForm" class="form-control" v-model="searchedQuery" @keyup.enter="apiCall('movie', searchedQuery)"/>
				<!-- <label class="form-label" for="searchForm">Search</label> -->
				<button type="button" class="btn btn-primary" @click="apiCall('movie', searchedQuery)">
					<span>cerca</span>
					<!-- <i class="fas fa-search"></i> -->
				</button>
			</div>
		</div>
		<ul>
			<li v-for="item,i in apiData.movie" :key="i">
				{{ `Titolo: ${item.title}, Titolo originale: ${item.original_title}, Lingua originale: ${item.original_language}, Voto: ${item.vote_average}` }}
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'App',
	components: {
		
	},
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
		apiCall(endpoint, query) {
			axios.get(this.apiBaseUrl + this.apiEndpoints[endpoint], {
				params: {
					api_key: this.apiKey,
					query
				}
			}).then(res => {
				this.apiData[endpoint] = res.data.results
			})
		}
	},
	mounted() {
		// this.apiCall('movie', 'ciao')
	}
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
// @import'~bootstrap/dist/css/bootstrap.css';
</style>
