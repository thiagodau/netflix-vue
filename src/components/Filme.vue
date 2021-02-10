<template>
  <div class="gui-card">
    <div class="gui-card__media">
      <img
        class="gui-card__img"
        v-bind:src="imagem"
        alt=""
      />
    </div>
    <div class="gui-card__details">
      <div class="gui-card__title"> {{ tituloFilme }} </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['tituloFilme', 'imagem']
};
</script>

<style>
</style>