<script setup>
import { RouterLink } from "vue-router";
// Définir les props

const props = defineProps({
  image: String,
  name: String,
  id: String,
});
</script>
<template>
  <div class="d-flex overflow-hidden mb-3 bg-light">
    <img
      class="img-fluid"
      :src="image"
      style="width: 100px; height: 100px; object-fit: cover"
      alt=""
    />
    <RouterLink
      class="h5 d-flex align-items-center bg-light px-3 mb-0"
      :to="'/monster-detail/' + id"
      >{{ name }}
    </RouterLink>
  </div>
</template>
<style scoped></style>
