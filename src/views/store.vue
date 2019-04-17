<template>
    <div class='store'>
        store
        <button v-show="showButton === 'true' ">button</button>
    </div>
</template>

<script>
  export default {
    name: 'store',
    data: function () {
      return {
        showButton: ''
      }
    },
    created () {
      this.showButton = this.$route.query.showButton;
    }
  }
</script>

<style>
    .store button {
        height: 50px;
        display: block;
        background-color: cornflowerblue;
        color: #fff;
        line-height: 50px;
        text-align: center;
        padding: 0 30px;
    }
</style>
