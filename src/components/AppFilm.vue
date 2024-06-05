<script>
import { store } from '../store';
export default {
    name: "AppFilm",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <div v-for="(film, index) in this.store.results.results" :key="index">
            <p>{{ film.title }}</p>
            <!-- <p>Media voto {{ film.vote_average }}</p> -->
        </div>
    </div>
</template>