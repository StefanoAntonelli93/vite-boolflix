<!-- <script>
import { store } from '../store';


export default {
    name: "SearchTV",
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

};
</script>

<template>
    <div class="container">
        <input type="text" placeholder="Cosa vuoi guardare?" v-model="searchText" @keyup.enter="emitSearch" />
        <button @click="emitSearch">Cerca</button>
        <div v-for="(tv, index) in store.results.results" :key="index">
            <p>Titolo: {{ tv.title }}</p>
            <p>Titolo Originale: {{ tv.original_title }}</p>
            <p>Lingua:
                <span v-if="tv.original_language === 'it'">
                    <img src="/images/flags/italy.png">
                </span>
                <span v-else-if="tv.original_language === 'en'">
                    <img src="/images/flags/united-kingdom.png">
                </span>
                <span v-else-if="tv.original_language === 'us'">
                    <img src="/images/flags/united-states.png">
                </span>
                <span v-else>
                    {{ tv.original_language }}
                </span>
            </p>
            <p>Media Voto: {{ tv.vote_average }}</p>
            <p>Trama: {{ tv.overview }}</p>
            <hr>
        </div>
    </div>
</template>



<style scoped>
img {
    width: 1rem;
}
</style> -->
