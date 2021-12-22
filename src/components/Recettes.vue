<template>
  <div>
        <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
            <h1>Recettes</h1>
            <span class="my-6 flex justify-center">
                <router-link to="/CreationRecette" class="btn-primary">Proposez votre recette !</router-link>
            </span>
            <section id="filters" class="mb-4">
                <h2 class="border-b-dark border-b-2 w-32">Filtres</h2>
                <div id="diet" class="text-center">
                    <button @click="filtreRegime=0" class="border-2 border-secondary rounded-full py-2 px-4 m-1">Tous</button>
                    <button v-for="categorie in listeCategories" :key="categorie.id" v-if="categorie.regime" @click="filtreRegime=categorie.id" class="border-2 border-secondary rounded-full py-2 px-4 m-1" :class="(filtreRegime===categorie.id) ? 'bg-secondary' : 'bg-white'">{{categorie.nom}}</button>
                </div>
                <div class="bg-secondary w-80 h-1 my-2 mx-auto rounded-full tablet:w-11/12 tablet:my-4 desktop:w-9/12"></div>
                <div id="meal" class="text-center">
                    <button @click="filtreCategorie=0" class="border-2 border-secondary rounded-full py-2 px-4 m-1">Tous</button>
                    <button v-for="categorie in listeCategories" :key="categorie.id" v-if="categorie.regime==false" @click="filtreCategorie=categorie.id" class="border-2 border-secondary rounded-full py-2 px-4 m-1" :class="(filtreCategorie===categorie.id) ? 'bg-secondary' : 'bg-white'">{{categorie.nom}}</button>
                </div>
            </section>
            <section id="recepes">
                <div class="grid_custom">
                    <div v-for="recette in listeRecettesFiltree" :key="recette.id" class="w-full relative shadow-lg">
                        <router-link :to="{name: 'Recette', params: {id:recette.id}}" class="relative">
                            <img :src="recette.urlImage" alt="" class="w-full h-80">
                            <div class="w-full text-center bg-white py-4 px-8">
                              <h3 class="font-fira font-black text-dark">{{recette.nom}}</h3>
                              <div class="flex justify-evenly">
                                  <img v-for="categorie in recette.categorie" :key="categorie.id" v-if="categorie.regime" :src="categorie.urlIcone" alt="" class="w-8 h-8">
                              </div>
                            </div>  
                        </router-link>
                    </div>
                </div>
            </section>
    </main>

  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'Recettes',
  data () {
    return {
      listeRecettes:[],
      listeCategories:[],
      filtreRegime:0,
      keyword: '',
      filtreCategorie: 0,
    }
  },
  created() {
//liste des recettes
      axios.get(param.hostSpecific+"listeRecettesAll")
      .then(response => {
          this.listeRecettes = response.data;
      })
      .catch(error => console.log(error));
//liste des categories
      axios.get(param.hostSpecific+"listeCategoriesAll")
      .then(response => {
          this.listeCategories = response.data;
      })
      .catch(error => console.log(error));
  },
  methods:{
//filtrer par regime
      filtreParRegime: function(listeRecettes){
            // On applique le filtrage seulement
            // Si une catégorie est sélectionnée
            if(this.filtreRegime >0){
                // Parcours de chaque video
                return listeRecettes.filter(function(recette){
                    // On ne recupere que les ID des categories_video de la vidéo avec map()
                    let catRecette = recette.categorie.map(function(cat) { return cat.id});
                    return (
                        // On ne renvoie que les videos contenant la catégorie
                        catRecette.indexOf(this.filtreRegime) >= 0 ? this.filtreRegime : ''
                    )
                }.bind(this))
            }else{
                return listeRecettes
            }
        },
//filtrer par categorie
      filtreParCategorie: function(listeRecettes){
            // On applique le filtrage seulement
            // Si une catégorie est sélectionnée
            if(this.filtreCategorie >0){
                // Parcours de chaque video
                return listeRecettes.filter(function(recette){
                    // On ne recupere que les ID des categories_video de la vidéo avec map()
                    let catRecette = recette.categorie.map(function(cat) { return cat.id});
                    return (
                        // On ne renvoie que les videos contenant la catégorie
                        catRecette.indexOf(this.filtreCategorie) >= 0 ? this.filtreCategorie : ''
                    )
                }.bind(this))
            }else{
                return listeRecettes
            }
        },
  },
  computed:{
    listeRecettesFiltree: function(){
        return this.filtreParRegime((this.filtreParCategorie(this.listeRecettes)))  
    },
  },
}
        
</script>

<style scoped>

</style>
