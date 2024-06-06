<script>
import { store } from '../store';
import flag from './flag.vue';
export default {
    name: "SearchFilm",
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
        flag,
    }
};
</script>

<template>
    <div class="container">
        <input type="text" placeholder="Cosa vuoi guardare?" v-model="searchText" @keyup.enter="emitSearch">
        <button @click="emitSearch">Cerca</button>
        <!-- ciclo for per ogni film in array results stampo titolo ecc.. -->
        <div v-for="(film, index) in this.store.results.results" :key="index">
            <p>Titolo: {{ film.title }}</p>
            <p>Titolo Originale: {{ film.original_title }}</p>
            <p>Lingua:
                <span v-if="film.original_language === 'it'">
                    <flag />
                </span>
                <span v-else>
                    {{ film.original_language }}
                </span>
            </p>
            <p>Media Voto: {{ film.vote_average }}</p>
        </div>
    </div>
</template>