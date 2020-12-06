<template>
  <router-view/>
</template>
<script>

function fixMobileViewport(){
  document.querySelector(':root').style
    .setProperty('--vh', window.innerHeight/100 + 'px');
}
window.addEventListener('DOMContentLoaded', () => { 
  fixMobileViewport()
})
window.addEventListener('resize', () => { 
  fixMobileViewport()
})

export default {
  data(){
    return{
    }
  },
}
</script>
<style lang="scss">
@import '@/styles/style.scss';
// @import url("//unpkg.com/animate.css@3.5.2");
</style>
