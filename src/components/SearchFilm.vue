<script>
import { store } from '../store';
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
    }
};
</script>

<template>
    <input type="text" placeholder="Cosa vuoi guardare?" v-model="searchText" @input="emitSearch()">
    <button @click="emitSearch()">Cerca</button>
</template>