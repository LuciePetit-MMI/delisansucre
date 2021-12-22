<template>
  <div>
    <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <section>
            <h1>Les catégories</h1>
            <div class="grid grid-cols-2 gap-4 mx-auto laptop:w-10/12 laptop:grid-cols-3">
                <div v-for="categorie in listeCategories" :key="categorie.id">
                    <router-link :to="{name: 'Categorie', params: {id:categorie.id}}" class="flex flex-col items-center">
                        <div class="relative">
                            <span class="m-4 block rounded-full overflow-hidden h-32 w-32 tablet:h-60 tablet:w-60">
                                <img :src="categorie.urlImage" :alt="categorie.nom" class="h-full max-w-none">
                            </span>
                        <img v-if="categorie && categorie.urlIcone" :src="categorie.urlIcone" :alt="categorie.nom" class="absolute right-0 bottom-0 w-14 h-14 tablet:w-20 tablet:h-20">
                        </div>
                        <h3 class="text-center font-fira font-bold uppercase">{{categorie.nom}}</h3>    
                    </router-link>
                    <p class="font-overpass font-regular">{{categorie.description_courte}}</p>
                </div>
            </div>
        </section>    
    </main>

  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'Categories',
  data () {
    return {
      listeCategories: [],
    }
  },
    created(){
      axios.get(param.hostSpecific+"listeCategories")
      .then(response => {
          this.listeCategories = response.data;
      })
      .catch(error => console.log(error));
  },

}
        
</script>

<style scoped>

</style>
