<template>
  <div id="app" class="bg-white relative">
<!--Menu navigation-->
    <header id="menu" class="relative z-50">
        <div class="laptop:flex flex-col laptop:flex-row laptop:justify-center w-full left-0 top-0 fixed laptop:bg-secondary">
            <div class="flex flex-col w-full laptop:w-10/12 laptop:h-20 laptop:flex-row laptop:justify-between laptop:items-center text-gray-700 bg-white" x-data="{ open: false }"  :class="{'h-screen': open, 'h-auto': !open}">
              
              <div class="flex-shrink-0 px-8 py-2 flex flex-row items-center justify-between bg-secondary laptop:h-full">
                <router-link to="/" class="tracking-widest"><span @click="recherche=false, open=false"><img src="./assets/logo_noir.svg" alt="logo" class="w-16 fill"></span></router-link>
                <button class="rounded-laptop laptop:hidden rounded-laptop focus:outline-none focus:shadow-outline" @click="open = !open">
                  <svg viewBox="0 0 20 20" class="w-6 h-6 fill-dark">
                    <path :class="{'hidden': open, 'block': !open}" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    <path :class="{'block': open, 'hidden': !open}" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
    
              <nav :class="{'block': open, 'hidden': !open}" class="flex flex-col flex-grow bg-secondary laptop:flex laptop:flex-row laptop:h-full laptop:justify-evenly laptop:items-center laptop:w-full">
                
                <div :class="{'h-auto mb-0': !open_categories, 'h-fit mb-6 laptop:mb-0': open_categories}">
                  <button @click="open_categories = !open_categories" class="py-6 border-t-2 border-white uppercase pl-8 flex flex-row w-full bg-transparent laptop:w-auto laptop:inline laptop:pl-0 laptop:border-none">
                    <span class="text-xl text-black">Catégories</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open_categories, 'rotate-0': !open_categories}" class="fill-black inline w-8 h-8 transition-transform duration-200 transform "><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                  
                  <div :class="{'hidden': !open_categories, 'contents laptop:important-block': open_categories}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="w-full absolute laptop:w-auto laptop:bg-white laptop:text-center laptop:px-8 laptop:py-4">
                    <ul v-for="categorie in listeCategories" :key="categorie.id" class="w-screen laptop:w-auto laptop:text-center">
                        <li v-if="categorie.regime" class="pl-8 py-1 laptop:px-0"><router-link :to="{name: 'Categorie', params: {id:categorie.id}}"><div @click="recherche=false, open=false, open_recettes=false">{{categorie.nom}}</div></router-link></li>
                    </ul>
                  </div>
                </div>
                <div :class="{'h-auto mb-0': !open_meals, 'h-fit mb-6 laptop:mb-0': open_meals}">
                  <button @click="open_meals = !open_meals" class="py-6 border-t-2 border-white uppercase pl-8 flex flex-row w-full bg-transparent laptop:w-auto laptop:inline laptop:pl-0 laptop:border-none">
                    <span class="text-xl text-black">Repas</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open_meals, 'rotate-0': !open_meals}" class="fill-black inline w-8 h-8 transition-transform duration-200 transform "><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                  
                  <div :class="{'hidden': !open_meals, 'contents laptop:important-block': open_meals}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="w-full absolute laptop:w-auto laptop:bg-white laptop:text-center laptop:px-8 laptop:py-4">
                    <ul v-for="categorie in listeCategories" :key="categorie.id" class="w-screen laptop:w-auto laptop:text-center">
                        <li v-if="categorie.repas" class="pl-8 py-1 laptop:px-0"><router-link :to="{name: 'Categorie', params: {id:categorie.id}}"><span @click="recherche=false, open=false, open_recettes=false">{{categorie.nom}}</span></router-link></li>
                    </ul>
                  </div>
                </div>
                <div :class="{'h-auto mb-0': !open_plates, 'h-fit mb-6 laptop:mb-0': open_plates}">
                  <button @click="open_plates = !open_plates" class="py-6 border-t-2 border-white uppercase pl-8 flex flex-row w-full bg-transparent laptop:w-auto laptop:inline laptop:pl-0 laptop:border-none">
                    <span class="text-xl text-black">Plats</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open_plates, 'rotate-0': !open_plates}" class="fill-black inline w-8 h-8 transition-transform duration-200 transform "><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                  
                  <div :class="{'hidden': !open_plates, 'contents laptop:important-block': open_plates}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="w-full absolute laptop:w-auto laptop:bg-white laptop:text-center laptop:px-8 laptop:py-4">
                    <ul v-for="categorie in listeCategories" :key="categorie.id" class="w-screen laptop:w-auto laptop:text-center">
                        <li v-if="categorie.plat" class="pl-8 py-1 laptop:px-0"><router-link :to="{name: 'Categorie', params: {id:categorie.id}}"><span @click="recherche=false, open=false, open_recettes=false">{{categorie.nom}}</span></router-link></li>
                    </ul>
                  </div>
                </div>

                <router-link to="/Articles" class="text-black text-xl border-t-2 border-white py-6 uppercase pl-8 laptop:px-4 laptop:border-none laptop:py-0"><span class="text-black" @click="recherche=false, open=false">Article</span></router-link>
                <router-link to="/Contact" class="text-black text-xl border-t-2 border-white py-6 uppercase pl-8 laptop:px-4 laptop:border-none laptop:py-0"><span class="text-black" @click="recherche=false, open=false">Contact</span></router-link>
              </nav>
              <form :class="{'hidden': open, 'flex': !open}" class="mx-auto my-4 w-9/12  laptop:bg-secondary laptop:h-full laptop:w-5/12 laptop:flex laptop:m-0 laptop:py-4">
                <div class="flex w-full bg-white border-dark border-2 rounded-full px-4 py-2 text-dark">
                    <input v-model="searchKey" type="search" id="search" class="w-full h-full bg-white border-none" placeholder="Rechercher une recette">
                    <button @click="recherche = true"><i class="fas fa-search fa-lg cursor-pointer"></i></button>
                </div>
              </form>        
            </div>
        </div>
    </header>
<!--Section recherches-->
    <section id="recherche" v-show="recherche" class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <div id="filters" class="mb-4">          
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
        </div>
        <div id="recepes">
            <div class="grid grid-cols-2 gap-4">
                <div v-for="recette in listeRecettesFiltree" :key="recette.id" class="w-full relative shadow-lg mb-6">
                    <span @click="recherche=false, open=false">
                        <router-link :to="{name: 'Recette', params: {id:recette.id}}" class="relative">
                            <img :src="recette.urlImage" alt="" class="w-full h-80">
                            <div class="w-full text-center bg-white py-4 px-8">
                                <h3 class="font-fira font-black text-dark">{{recette.nom}}</h3>
                                <div class="flex justify-evenly">
                                    <img v-for="categorie in recette.categorie" :key="categorie.id" v-if="categorie.regime" :src="categorie.urlIcone" alt="" class="w-8 h-8">
                                </div>
                            </div>  
                        </router-link>
                    </span>
                </div>
            </div>
        </div>
        <div v-if="listeRecettesFiltree.length == []" class="flex items-center flex-col">
            <p class="my-6 text-center text-lg text-dark font-bold">Oups, cette recette n'existe pas encore...</p>
        </div>
    </section>
    <router-view v-show="recherche==false" :key="$route.fullPath"/>

<!--Footer-->
    <footer id="footer" class="relative bg-light px-8 py-4 desktop:w-10/12 m-auto">
        <div class="mt-5">
            <img src="../src/assets/logo_typo_noir.svg" alt="" class="w-60">
            <p class="w-60 font-overpass text-lg tablet:w-full">des recettes adaptées, un plaisir retrouvé</p>
        </div>
        <div class="grid grid-cols-1 gap-2 tablet:grid-cols-2 laptop:grid-cols-4">
            <div id="menu" class="my-4">
                <h4 class="font-fira font-black text-dark uppercase text-xl text-center mb-2">Navigation</h4>
                <ul>
                    <li>
                        <router-link to="/Categories" class="font-overpass font-light">Catégories</router-link>
                    </li>
                    <li>
                        <router-link to="/Repas" class="font-overpass font-light">Repas</router-link>
                    </li>
                    <li>
                        <router-link to="/Plats" class="font-overpass font-light">Plats</router-link>
                    </li>
                    <li>
                        <router-link to="/Articles" class="font-overpass font-light">Articles</router-link>
                    </li>
                    <li>
                        <router-link to="/Contact" class="font-overpass font-light">Contact</router-link>
                    </li>
                </ul>
            </div>
            <div id="about" class="my-4">
                <h4 class="font-fira font-black text-dark uppercase text-xl text-center mb-2">À propos</h4>
                <ul>
                    <li>
                        <a href="https://indiglu.com" target="blank" class="font-overpass font-light">Indiglu</a>
                    </li>
                    <li>
                        <router-link to="/Confidentialite" class="font-overpass font-light">Politique de confidentialité</router-link>
                    </li>
                    <li>
                        <router-link to="/MentionsLegales" class="font-overpass font-light">Mentions légales</router-link>
                    </li>
                </ul>
                <h4 class="font-fira font-black text-dark uppercase text-xl text-center mt-8 mb-2">Nous contacter</h4>
                <ul>
                    <li>
                        <router-link to="/Contact" class="font-overpass font-light">Contact</router-link>
                    </li>
                    <li>
                        <a href="mailto:contact@indiglu.com" class="font-overpass font-light">contact@indiglu.com</a>
                    </li>
                </ul>
            </div>
            <div id=follow class="my-4">
                <h4 class="font-fira font-black text-dark uppercase text-xl text-center mb-2">Suivez-nous</h4>
                <ul class="flex justify-evenly">
                    <li><i class="fab fa-instagram fa-2x text-black"></i></li>
                    <li><i class="fab fa-facebook-f fa-2x text-black"></i></li>
                    <li><i class="fab fa-youtube fa-2x text-black"></i></li>
                </ul>
            </div>
            <div id="newslette_footer" class="my-4 mb-32 tablet:mb-44 laptop:mb-[32rem]">
                <h4 class="font-fira font-black text-dark uppercase text-xl text-center mb-2">Rejoindre la newsletter</h4>
                <form action="/leads-subscribing-newsletter" method="post">
                    <div>
                        <label for="email" class="font-overpass font-thin">Votre adresse e-mail :</label>
                        <input id="email" name="subscriber_email" type="email" class="w-full h-10"/>
                    </div>
                    <div>
                        <button type="submit" class="font-fira bg-dark text-white px-8 py-2 w-full">S'abonner</button>
                    </div>
                </form>    
            </div>
        </div>
        <img src="./assets/fruits.png" alt="" class="absolute bottom-0 right-0 opacity-60 w-[200vw] tablet:w-full">
    </footer>
    </div>
  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'App',
  data() {
      return{
        open: false,
        open_meals: false,
        open_categories: false,
        open_plates: false,
        open_recettes: false,
        listeCategories:[],
        recherche: false,

        listeRecettes:[],
        listeCategories:[],
        filtreRegime:0,
        searchKey: '',
        filtreCategorie: 0,

        connexion: false,
        utilisateur:{
            username: null,
            password: null,
            token: null,
            role: null,
        },
        message: null,
      }
  },
  created(){
// liste des catégories
      axios.get(param.hostSpecific+"listeCategories")
      .then(response => {
          this.listeCategories = response.data;
      }),
// liste des recettes
      axios.get(param.hostSpecific+"listeRecettesAll")
      .then(response => {
          this.listeRecettes = response.data;
      })
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
        return this.filtreParRegime((this.filtreParCategorie(this.listeRecettes.filter((recette) => {
            return recette.nom.toLowerCase().includes(this.searchKey.toLowerCase());
        }))))  
    },
  },

}
</script> 

