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
				<img :src="createPosterUrl(movie.poster_path)" :alt="`poster_${movie.title}`">
				{{ `Titolo: ${movie[returnMovieOrSeriesKey('movie', 'title')]}, Titolo originale: ${movie[returnMovieOrSeriesKey('movie', 'original_title')]}, Lingua originale: ${movie[returnMovieOrSeriesKey('movie', 'original_language')]}, Voto: ${movie[returnMovieOrSeriesKey('movie', 'vote_average')]}/5` }}
				<div>
					<img v-for="star,k in returnStarsArray(movie.vote_average)" :key="k" :src="star" alt="rating">
				</div>
				<img :src="createFlagUrl(movie.flag)" :alt="`flag_${movie.flag}`">
			</li>
			<li v-for="tvShow,j in apiData.tv" :key="`tvShow_${j}`">
				<img :src="createPosterUrl(tvShow.poster_path)" :alt="`flag_${tvShow.name}`">
				{{ `Titolo: ${tvShow[returnMovieOrSeriesKey('tv', 'title')]}, Titolo originale: ${tvShow[returnMovieOrSeriesKey('tv', 'original_title')]}, Lingua originale: ${tvShow[returnMovieOrSeriesKey('tv', 'original_language')]}, Voto: ${tvShow[returnMovieOrSeriesKey('tv', 'vote_average')]}/5` }}
				<div>
					<img v-for="star,n in returnStarsArray(tvShow.vote_average)" :key="n" :src="star" alt="rating">
				</div>
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
			images: {
				imageBaseUrl: 'https://image.tmdb.org/t/p/',
				poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
			},
			starIcons: {
				full: '@/assets/star-solid.png', //https://github.com/Frameck/vue-boolflix/blob/main/src/assets/star-solid.png
				empty: '@/assets/star-regular.png' //https://github.com/Frameck/vue-boolflix/blob/main/src/assets/star-regular.png
			},
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

						movie['vote_average'] = movie['vote_average'] === 0 ? 0 : Math.ceil(movie['vote_average'] / 2)
	
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
		},
		createPosterUrl(poster) {
			const url = this.images.imageBaseUrl + this.images.poster_sizes[3] + poster
			return url
		},
		returnStarsArray(vote) {
			const totalStars = 5
			let stars = []

			for (let i = 0; i < vote; i++) {
				stars.push(this.starIcons.full)
				//stars[i] = this.starIcons.full
			}

			// for (let i = (stars.length); i < totalStars; i++) {
			// 	stars[i] = this.starIcons.empty
			// }

			stars.fill(this.starIcons.empty, vote, totalStars - 1)
			console.log(stars.length)
			return stars
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
