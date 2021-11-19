<template>
    <div class="card" @mouseover="fetchMoreData" v-if="filterValues[type] === '' || genresList.includes(filterValues[type])">
        <!-- poster -->
        <img :src="posterPath" :alt="`Poster: ${title}`" class="poster">
        <!-- card text che compare all'hover -->
        <div class="card-text">
            <!-- flag -->
            <img :src="flagUrl" :alt="`flag_${data.original_language}`" class="flag">
            <!-- titolo del film/serie tv -->
            <h3 class="card-title"><strong>{{ title }}</strong></h3>
            <!-- titolo originale -->
            <div v-if="originalTitle !== ''" class="original-title"><strong>Titolo originale</strong>: {{ originalTitle }}</div>
            <!-- voto -->
            <div class="vote">
                <span><strong>Voto</strong>: {{ vote }}/5</span>
                <i class="fa" aria-hidden="true" v-for="i in 5" :key="`voteStar${i}`"
                :class="(i <= vote) ? 'fa-star' : 'fa-star-o'"></i>
            </div>
            <!-- cast -->
            <div class="cast" v-if="actorsList !== ''">
                <ul>
                    <span><strong>Cast</strong>:</span>
                    <li v-for="actor,i in actorsList" :key="`actor_${i}`">{{ actor.original_name }}</li>
                </ul>
            </div>
            <!-- generi -->
            <div class="genres">
                <span><strong>Generi</strong>: </span>
                <span>{{ genresList.join(', ') }}</span>
            </div>
            <!-- trama -->
            <p v-if="overview !== ''" class="overview"><strong>Overview</strong>: {{ overview }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Card',
    props: { data: Object, genresId: Array, filterValues: Object, type: String },
    data() {
        return {
            flagCodes: {
                it: 'it',
                pt: 'pt',
                es: 'es',
                en: 'us',
                ja: 'jp',
                de: 'de',
                fr: 'fr',
                sv: 'sv',
                hr: 'hr',
                ar: 'ar'
            },
            images: {
				imageBaseUrl: 'https://image.tmdb.org/t/p/',
				poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
			},
            apiKey: '0100ff849241e864745d64742edcb728',
            apiBaseUrl: 'https://api.themoviedb.org/3',
            apiEndpoints: {
                movieCast: '/movie/',
                tvCast: '/tv/'
            },
            cast: []
        }
    },
    computed: {
        title() {
            return this.data.title || this.data.name
        },
        originalTitle() {
            if ((this.data.original_title === this.data.title) || (this.data.original_name || this.data.name)) {
                return ''
            }
            return this.data.original_title || this.data.original_name
        },
        posterPath() {
            if (!this.data.poster_path) {
                return 'https://via.placeholder.com/300x450?text=No+poster+found'
            }

			return this.images.imageBaseUrl + this.images.poster_sizes[3] + this.data.poster_path
        },
        flagUrl() {
            if (!this.flagCodes[this.data.original_language]) {
                return 'https://via.placeholder.com/55x40?text=No+flag+found'
            }

            const countryCode = this.flagCodes[this.data.original_language]
            return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode.toUpperCase()}.svg`
		},
        vote() {
            let vote = this.data.vote_average === 0 ? 0 : Math.ceil(this.data.vote_average / 2)
            return vote
        },
        actorsList() {
            return this.cast || ''
        },
        genresList() {
            let genreThisFilmTv = []
            this.data.genre_ids.forEach(genre => {
                this.genresId.forEach(obj => {
                    if (obj.id === genre) {
                        genreThisFilmTv.push(obj.name)
                    }
                })
            })
            return genreThisFilmTv
        },
        overview() {
            return this.data.overview || ''
        }
    },
    methods: {
        fetchMoreData() {
            if (this.cast.length !== 0) return
            let endpoint = this.apiEndpoints.movieCast
            if (this.data.name) {
                endpoint = this.apiEndpoints.tvCast
            }
            axios.get(this.apiBaseUrl + endpoint + this.data.id + '/credits', {
                params: {
                    api_key: this.apiKey
                }
            }).then(res => {
                this.cast = res.data.cast.slice(0, 5)
            })
        }
    }
}
</script>

<style>

</style>