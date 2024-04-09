<script setup>
import { ref, onMounted } from "vue";
import MonstersListComponent from "../components/MonstersListComponent.vue";
/* Test des props
const donnee = ref({
  image:
    "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dinraal/image",
  name: "dinraal",
});

console.log(donnee.value);
*/
// Recuperer les données de tous via l'api
const data = ref("");
onMounted(async () => {
  const response = await fetch("https://metallo.ew.r.appspot.com/monsters");

  data.value = await response.json();
  console.log("donne", data);

  return data;
});

console.log(data);
</script>
<template>
  <!-- Blog Start -->
  <div class="container py-5">
    <div class="row">
      <!-- Monster list Start -->
      <div class="col">
        <div class="mb-5">
          <h3
            class="text-uppercase border-start border-5 border-primary ps-3 mb-4"
          >
            Every Monsters
          </h3>
          <!---ICI le composant de chaque monstre-->
          <div v-if="data">
            <MonstersListComponent
              :name="monster.name"
              :image="monster.image"
              :id="monster._id"
              v-for="monster in data"
            />
          </div>
        </div>
      </div>
      <!-- Monster list End -->
    </div>
  </div>
  <!-- Blog End -->
</template>
<style scoped></style>
