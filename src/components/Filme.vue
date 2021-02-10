<template>
  <div class="gui-card" v-bind:style="efeitoClick" v-on:click="cliqueEfeito()" v-on:mouseout="removeEfeito()">
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
    props: ['tituloFilme', 'imagem'],
    data(){
        return{
            efeitoClick: null
        }
    },
    methods: {
        cliqueEfeito() {
            this.efeitoClick= 'transform: scale(1.9); margin-right: 110px;';
        },
        removeEfeito() {
            this.efeitoClick = null;
        }
    }
};
</script>

<style>
</style>