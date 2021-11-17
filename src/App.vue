<template>
	<div id="app">
		<div class="input-group">
			<div class="form-outline">
				<input type="search" id="searchForm" class="form-control" v-model="searchedQuery" @keyup.enter="apiCall(['movie', 'tv'], searchedQuery)"/>
				<!-- <label class="form-label" for="searchForm">Search</label> -->
				<button type="button" class="btn btn-primary" @click="apiCall(['movie', 'tv'], searchedQuery)">
					<span>cerca</span>
					<!-- <i class="fas fa-search"></i> -->
				</button>
			</div>
		</div>
		<ul>
			<li v-for="movie,i in apiData.movie" :key="`movie_${i}`">
				{{ `Titolo: ${movie[returnMovieOrSeriesKey('movie', 'title')]}, Titolo originale: ${movie[returnMovieOrSeriesKey('movie', 'original_title')]}, Lingua originale: ${movie[returnMovieOrSeriesKey('movie', 'original_language')]}, Voto: ${movie[returnMovieOrSeriesKey('movie', 'vote_average')]}` }}
				<img :src="createFlagUrl(movie.flag)" :alt="`flag_${movie.flag}`">
			</li>
			<li v-for="tvShow,j in apiData.tv" :key="`tvShow_${j}`">
				{{ `Titolo: ${tvShow[returnMovieOrSeriesKey('tv', 'title')]}, Titolo originale: ${tvShow[returnMovieOrSeriesKey('tv', 'original_title')]}, Lingua originale: ${tvShow[returnMovieOrSeriesKey('tv', 'original_language')]}, Voto: ${tvShow[returnMovieOrSeriesKey('tv', 'vote_average')]}` }}
				<img :src="createFlagUrl(tvShow.flag)" :alt="`flag_${tvShow.flag}`">
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
			languageCodes: ['it', 'pt', 'es', 'en', 'ja', 'de', 'fr', 'sv', 'hr', 'ar'],
			countryCodes: ['it', 'pt', 'es', 'us', 'jp', 'de', 'fr', 'sv', 'hr', 'ar'],
			searchedQuery: ''
		}
	},
	methods: {
		apiCall(endpoints, query) {
			endpoints.forEach(endpoint => {
				axios.get(this.apiBaseUrl + this.apiEndpoints[endpoint], {
					params: {
						api_key: this.apiKey,
						query
					}
				}).then(res => {
					this.apiData[endpoint] = [] // svuoto l'array ad ogni chiamata
	
					res.data.results.forEach(movie => {
						const movieLanguage = movie.original_language
						console.log(movieLanguage)
						let countryCode = movieLanguage
	
						if (this.languageCodes.includes(movieLanguage)) {
							switch (movieLanguage) {
								case 'en':
									countryCode = 'us'
									break
								case 'ja':
									countryCode = 'jp'
									break
							}
							// if (movieLanguage === 'en') {
							// 	countryCode = 'us'
							// } else {
							// 	countryCode = movieLanguage
							// }
							
							movie['flag'] = countryCode
						}
	
						this.apiData[endpoint].push(movie)
					})
				})
			})
		},
		createFlagUrl(countryCode) {
			let flagUrl = ''

			if (this.countryCodes.includes(countryCode)) {
				flagUrl = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode.toUpperCase()}.svg`
			}


			return flagUrl
		},
		returnMovieOrSeriesKey(type, key) {
			if (type === 'movie') {
				if (key === 'title') return 'title'
				if (key === 'original_title') return 'original_title'
				if (key === 'original_language') return 'original_language'
				if (key === 'vote_average') return 'vote_average'
			} else {
				if (key === 'title') return 'name'
				if (key === 'original_title') return 'original_name'
				if (key === 'original_language') return 'original_language'
				if (key === 'vote_average') return 'vote_average'
			}
		}
	},
	computed: {
		// returnMovieOrSeriesArray() {
		// 	if (this.apiData.movie.length !== 0) return this.apiData.movie
		// 	return this.apiData.tv
		// }
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
	img {
		width: 25px;
	}
// @import'~bootstrap/dist/css/bootstrap.css';
</style>
