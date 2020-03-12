<template>
  <div class="home">
    <PlayList/>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayList from '@/components/PlayList.vue'

export default {
  name: 'Home',
  components: {
    PlayList
  }
}
</script>
