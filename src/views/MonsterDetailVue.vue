<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

// Lire les parametres
const route = useRoute();
const id = route.params.id;

console.log(id);

const link = `https://metallo.ew.r.appspot.com/monsters/${id}`;
console.log(link);
// Recuperer les données d'un monstre
const data = ref();
async function getMonsterById(id) {
  const response = await fetch(link);
  data.value = await response.json();

  console.log(data);
  return data;
}

getMonsterById();

console.log(data);
</script>
<template>
  <!-- About Start -->
  <div class="container-fluid py-5" v-if="data">
    <div class="container">
      <div class="row gx-5">
        <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px">
          <div class="position-relative h-100">
            <img
              class="position-absolute w-100 h-100 rounded"
              :src="data.image"
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-7">
          <div class="border-start border-5 border-primary ps-5 mb-5">
            <h6 class="text-primary text-uppercase">
              {{ data.category }}
            </h6>
            <h1 class="display-5 text-uppercase mb-0">
              {{ data.name }}
            </h1>
          </div>
          <h4 class="text-body mb-4">{{ data.description }}</h4>
        </div>
      </div>
    </div>
  </div>
  <div v-else><p>Chargement en cours</p></div>

  <!-- About End -->
</template>
<style scoped></style>
