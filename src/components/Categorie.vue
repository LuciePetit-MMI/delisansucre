<template>
    <div>
      <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
          <section class="flex flex-col items-center mb-6">
              <h1>{{categorie.nom}}</h1>
              <div  class="w-full h-60 laptop:h-80 my-6 overflow-hidden flex items-center">
                <img :src="categorie.urlImage" alt="" class="w-full">
              </div>
              <div>
                  <img v-if="categorie.regime" :src="categorie.urlIcone" alt="" class="w-20 h-20 my-3">
                  <p v-else class="border-2 border-secondary rounded-full py-2 px-4 m-1">{{categorie.nom}}</p>
              </div>
              <p>{{categorie.description}}</p>
          </section>
          <section>
              <h2 class="font-fira font-black text-dark text-xl border-b-dark border-b-2 w-32 mb-4">Recettes</h2>
              <div class="grid_custom">
                  <div v-for="recette in categorie.recette" :key="recette.id" class="w-full shadow-lg">
                      <router-link :to="{name: 'Recette', params: {id:recette.id}}">
                          <div class="flex justify-center items-center overflow-hidden h-80 w-full">
                            <img :src="recette.urlImage" alt="" class="w-full h-fit">
                          </div>
                          <h3 class="w-full text-center font-fira font-blacl text-dark bg-white py-4 px-8">{{recette.nom}}</h3>
                      </router-link>
                  </div>
              </div>
              <div v-if="categorie.recette.length == []" class="flex items-center flex-col">
                  <p class="my-6 text-center text-lg text-dark font-bold">Oups, pas encore de recette dans cette catégorie...<</p>
              </div>
          </section>
      </main>
    </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'Categorie',
  data () {
    return {
      categorie:{},
    }
  },
  created(){
    this.categorie.id = this.$route.params.id;

    axios.get(param.hostSpecific+"getCategorie/"+this.categorie.id)
    .then(response=>{
      this.categorie = response.data;
    })
  },
}

</script>

<style scoped>

</style>
