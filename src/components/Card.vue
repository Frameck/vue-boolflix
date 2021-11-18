<template>
    <div class="card">
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
                <i class="fa fa-star" aria-hidden="true" v-for="star in vote" :key="star"></i>
                <i class="fa fa-star-o" aria-hidden="true" v-for="emptyStar in (5 - vote)" :key="emptyStar"></i>
            </div>
            <!-- trama -->
            <p v-if="overview !== ''" class="overview"><strong>Overview</strong>: {{ overview }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: { data: Object },
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
        overview() {
            return this.data.overview || ''
        }
    }
}
</script>

<style>

</style>