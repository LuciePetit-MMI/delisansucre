<template>
  <div>
    <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <section id="infos">
            <h1>Mon compte</h1>
            <div>
                <h2 class="mb-0">Informations</h2>
                <div class="border-dark border-b-2 w-32 mb-4"></div>
                <div class="flex flex-row justify-center items-center tablet:justify-start tablet:ml-32">
                    <img src="image/image.png" alt="" class="rounded-full w-32 h-32 mr-4">
                    <div>
                        <p class="my-2">Nom</p>
                        <p class="my-2">Prénom</p>
                        <p class="my-2">email@email.com</p>    
                    </div>    
                </div>
            </div>
            <div>
                <h2 class="mb-0">Mon régime alimentaire</h2>
                <div class="border-dark border-b-2 w-32 mb-4"></div>
                <div class="tablet:w-9/12 mx-auto flex flex-col">
                    <div class="grid grid-cols-1 tablet:grid-cols-3">
                        <p class="font-overpass text-black w-full bg-primary border-light border-4 text-center px-8 py-4 rounded-lg">Sans sucre</p>
                        <p class="font-overpass text-black w-full bg-primary border-light border-4 text-center px-8 py-4 rounded-lg">Végétarien</p>    
                    </div> 
                    <router-link to="/EditionCompte" class="btn-secondary mx-auto my-4 self-center">Éditer mon profil</router-link>   
                </div>
            </div>
            <div>
                <h2 class="mb-0">Mes recettes créées</h2>
                <div class="border-dark border-b-2 w-32 mb-4"></div>
                <div class="my-6 flex justify-center tablet:w-9/12 mx-auto">
                    <router-link to="/CreationRecette" class="btn-primary">Proposez votre recette !</router-link>
                </div>
                <div class="recepeSlider relative overflow-hidden">
                    <div class="swiper-wrapper">
                        <div v-for="recette in listeRecettes" :key="recette.id" class="swiper-slide relative px-1 h-96 w-9/12 mobil:w-60 mobil:px-2">
                            <router-link :to="{name: 'Recette', params: {id:recette.id}}">
                                    <img :src="recette.urlImage" alt="" class="h-full w-full">
                                    <div class="flex flex-col bg-white text-dark p-2 font-fira font-black w-4/5 h-24 absolute bottom-6 items-center justify-center mobil:w-50">
                                        <h3 class="my-0">{{recette.nom | liveSubstr(25)}}</h3>
                                        <div class="flex justify-evenly">
                                            <img v-for="categorie in recette.categorie" :key="categorie.id" v-if="categorie.regime" :src="categorie.urlIcone" alt="" class="w-8 h-8">
                                        </div>
                                    </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="swiper-button-next text-primary"></div>
                    <div class="swiper-button-prev text-primary"></div>
                </div>
    
            </div>    
        </section>
    </main>

  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'Compte',
  data () {
    return {
        listeRecettes:[],
    }
  },
  created(){
//liste des recettes
      axios.get(param.hostSpecific+"listeRecettesAll")
      .then(response => {
          this.listeRecettes = response.data;
      })
      .catch(error => console.log(error));
  },
  mounted() {
   //slider recettes
        var swiper = new Swiper(".recepeSlider", {
            slidesPerView: "auto",
            centeredSlides: true,
            grabCursor: true,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
  },
  filters: {
        liveSubstr: function(string, nb) {
            return string.substring(0,nb) + '...';
        },
    },
}
        
</script>

<style scoped>

</style>
