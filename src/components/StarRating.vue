<script>
export default {
  name: "StarRating",
  // creo props per media voto e max stelle
  props: {
    vote: {
      type: Number,
    },
    maxStars: {
      type: Number,
      default: 5,
    },
  },
  created() {
    //    voto arrotondato
    const votoRounded = Math.round(this.vote);
    // trasformo voto in numero stelle dividendolo per 2
    this.numStar = votoRounded / 2;
    // se numStar non è numero intero = mezza stella
    this.halfStar = this.numStar % 1 !== 0;
    // mostro solo parte intera di numStar
    this.numStarIntero = Math.floor(this.numStar);
    console.log(this.numStarIntero, this.halfStar);
  },
};
</script>

<template>
  <span class="star-rating text-warning" v-for="star in maxStars" :key="star">
    <span v-if="star <= this.numStarIntero">
      <i class="fa-solid fa-star"></i
    ></span>
    <span v-else-if="star === numStarIntero + 1 && halfStar"
      ><i class="fa-solid fa-star-half-stroke"></i
    ></span>
    <span v-else="star > this.numStarIntero">
      <i class="fa-regular fa-star"></i
    ></span>
  </span>
</template>

<style scoped lang="scss"></style>
