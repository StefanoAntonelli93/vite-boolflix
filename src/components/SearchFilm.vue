<script>
import { store } from '../store';
import StarRating from './StarRating.vue';


export default {
    name: "SearchFilm",
    emits: ['search'],
    data() {
        return {
            store,
            searchText: '',
        };
    },
    methods: {
        emitSearch() {
            this.$emit('search', this.searchText);
        }
    },
    components: {
        StarRating,
    }
}
</script>

<template>
    <header class="d-flex justify-content-between  align-items-center py-3 px-5 bg-dark">
        <h1 class="text-danger"><a  class="text-reset text-decoration-none"href="/">Boolflix</a></h1>
        <div class="search-bar">
            <input type="text" placeholder="Cosa vuoi guardare?" v-model="searchText" @keyup.enter="emitSearch" />
            <button @click="emitSearch">Cerca</button>

        </div>
    </header>
<div class="p-5 bg-secondary d-flex flex-wrap justify-content-between text-white  ">
    <!-- FILM -->
    <div v-for="(film, index) in store.film.results" :key="index">
        <!-- poster -->
        <div>
            <!-- interpolazione poster$sizeposter$linkapi -->
            <img :src="`${this.store.apiInfo.poster}${this.store.apiInfo.sizePoster}${film.poster_path}`"
                :alt="film.title">
        </div>

        <p v-if="film.title === film.original_title">
            Titolo: {{ film.title }}</p>
        <p v-else>
        <p> Titolo: {{ film.title }}</p>
        <p> Titolo originale: {{ film.original_title }}</p>
        </p>
        <p>Lingua:
            <span v-if="film.original_language === 'it'">
                <img class="img_flags" src="/images/flags/italy.png">
            </span>
            <span v-else-if="film.original_language === 'en'">
                <img class="img_flags" src="/images/flags/united-kingdom.png">
                <img class="img_flags" src="/images/flags/united-states.png">
            </span>
            <span v-else-if="film.original_language === 'ja'">
                <img class="img_flags" src="/images/flags/japan.png">

            </span>
            <span v-else>
                {{ film.original_language }}
            </span>
        </p>
            <!-- star rating -->
        <p>Voto: <StarRating :vote="film.vote_average" /> <span> ({{ film.vote_average }})</span></p>
    
       
        <p>Trama: {{ film.overview }}</p>
        <hr>
    </div>

    <!-- SERIE TV  -->
    <div v-for="(tv, index) in store.tv.results" :key="index">
        <!-- poster -->
        <div>
            <!-- interpolazione poster$sizeposter$linkapi -->
            <img :src="`${this.store.apiInfo.poster}${this.store.apiInfo.sizePoster}${tv.poster_path}`"
                :alt="tv.name">
        </div>

        <p>Titolo: {{ tv.name }}</p>
        <p>Titolo Originale: {{ tv.original_name }}</p>
        <p>Lingua:
            <span v-if="tv.original_language === 'it'">
                <img class="img_flags" src="/images/flags/italy.png">
            </span>
            <span v-else-if="tv.original_language === 'en'">
                <img class="img_flags" src="/images/flags/united-kingdom.png">
                <img class="img_flags" src="/images/flags/united-states.png">
            </span>
            <span v-else-if="film.original_language === 'ja'">
                <img class="img_flags" src="/images/flags/japan.png">

            </span>
            <span v-else>
                {{ tv.original_language }}
            </span>
        </p>
     <!-- star rating -->
     <p>Voto: <StarRating :vote="tv.vote_average" /> <span> ({{ tv.vote_average }})</span></p>
    
        <p>Trama: {{ tv.overview }}</p>
        <hr>
    </div>

</div>

</template>



<style scoped>
.img_flags {
    width: 1rem;
    margin-right: 5px;
}

</style>
