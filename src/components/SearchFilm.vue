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
            
        <i class="fa-solid fa-magnifying-glass text-white ms-2"@click="emitSearch"></i>

        </div>
    </header>
<div class="p-5 d-flex flex-wrap gap-3 ">
    <!-- FILM -->
    <div v-for="(film, index) in store.film.results" :key="index" >
   
       
            <div class="image-container mb-5">
                <!-- poster -->
                <img :src="`${this.store.apiInfo.poster}${this.store.apiInfo.sizePoster}${film.poster_path}`" :alt="film.title" class="poster-image">
                
                <!-- overlay content -->
                <div class="overlay-content">
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
                    <p class="text-overflow" >Trama: {{ film.overview }}</p>
                </div>
            </div>
        
   
    </div>

    <!-- SERIE TV  -->
    <div v-for="(tv, index) in store.tv.results" :key="index">
        <!-- poster -->
        <div class="image-container mb-5"> 
            <img :src="`${this.store.apiInfo.poster}${this.store.apiInfo.sizePoster}${tv.poster_path}`"
            :alt="tv.name">
             <!-- overlay content -->
            <div class="overlay-content">
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
                <p  class="text-overflow">Trama: {{ tv.overview }}</p>
                    
                    
                
            </div>
                
        </div>
          
       
    </div>

</div>

</template>



<style scoped>
.img_flags {
    width: 1rem;
    margin-right: 5px;
}

.image-container {
    position: relative;
   
    }.poster-image {
            width: 100%; 
        
        }
        .overlay-content {
    position: absolute;
    top: 0;
    left: 0;
    color: white; /* Colore del testo, cambia se necessario */
    background-color: rgba(0, 0, 0, 0.8); /* Sfondo semi-trasparente, cambia se necessario */
    padding: 20px; /* Spazio interno del contenitore, cambia se necessario */
    width: 100%;
    height: 100%;
    opacity: 0; 
}.image-container:hover .overlay-content {
    opacity: 1; /* Mostra il contenuto quando si passa sopra con il mouse */
}.text-overflow {
    max-height: 200px;
    overflow-y: auto;
    margin-top: 2rem;
}




</style>
