<template>
  <v-app>
    <v-main>
      <v-app-bar app color="primary">
        <v-app-bar-title>Most Used Words</v-app-bar-title>
      </v-app-bar>
      <HomePage/>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue';
export default {
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
    //
  }),
}
</script>
