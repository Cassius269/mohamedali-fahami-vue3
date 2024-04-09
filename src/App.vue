<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <!----Le header-->
  <Header />
  <!----Mettre le routerView ici-->
  <!-- About End -->
  <RouterView />
  <!---Composant Footer-->
  <Footer />
</template>

<style scoped></style>
