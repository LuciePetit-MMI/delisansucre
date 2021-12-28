<template>
  <div>
    <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <section id="showcase" class="my-8">
            <div class="showcaseSlider relative overflow-hidden h-60 tablet:h-96">
                <div class="swiper-wrapper">
                    <div v-for="image in imagesSlider" :key="image.id" class="swiper-slide">
                        <div class="h-60 flex justify-center items-center overflow-hidden w-full tablet:h-96">
                            <img :src="image.urlImage" alt="" class="w-full max-w-none">
                        </div>
                    </div>
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>

            <h1>DéliSanSucre, des recettes adaptées pour tous les goûts</h1>
        </section>

        <section id="last_recepe" class="my-8 border-t-4 border-secondary pt-4">
            <h2 class="text-center">Dernières Recettes</h2>
            <span class="flex justify-center mb-4">
                <router-link to="/Recettes" class="text-center uppercase font-overpass text-dark">Voir toutes les recettes</router-link>
                <i class="fas fa-arrow-right pl-2"></i>
            </span>

            <div class="recepeSlider relative overflow-hidden">
                <div class="swiper-wrapper">
                    <div v-for="recette in listeRecettes" :key="recette.id" class="swiper-slide relative px-1 h-96 w-9/12 mobil:w-60 mobil:px-2">
                        <router-link :to="{name: 'Recette', params: {id:recette.id}}">
                                <div class="flex justify-center overflow-hidden">
                                    <img :src="recette.urlImage" alt="" class="h-full max-w-none">
                                </div>
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

        </section>
        <section id="category" class="my-8 border-t-4 border-secondary pt-4">
            <h2 class="text-center">Catégories</h2>
            <span class="flex justify-center mb-4">
                <router-link to="/Categories" class="text-center uppercase font-overpass text-dark">Voir toutes les catégories</router-link>
                <i class="fas fa-arrow-right pl-2"></i>
            </span>
    
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
                </div>
            </div>
        </section>
        <section id="description" class="my-8 border-t-4 border-secondary pt-4">
            <h2 class="text-center">DéliSanSucre : votre allié pour une alimentation fun et saine !</h2>
            <div class="laptop:flex">
                <div>
                    <p class="font-overpass font-light p-4">DéliSanSucre vous propose des recettes adaptées à votre régime alimentaire. Vous trouverez des recettes sans sucre, sans gluten, sans lactose, sans sel, végétariennes et véganes. Tout ce qu’il vous faut pour ravir vos papilles et celles de vos invité.</p>
                    <p class="font-overpass font-light p-4">Suivre un régime particulier ce n’est pas toujours simple. Ce site est à l’initiative de l’association Indiglu, qui souhaite aider les personnes souffrant de diabète. Son but est d’aider ces personnes à diversifier leur alimentation tout en régulant facilement leur glycémie. Nous offrons donc aux personnes diabétiques un site regroupant des recettes avec un taux de sucre faible. Mais surtout, un taux d’insuline clairement indiqué. Ils n’auront qu’à regarder la recette pour savoir ce qu’il faut pour la contrebalancer.</p>        
                </div>
                <div>
                    <p class="font-overpass font-light p-4">Nous souhaitons ouvrir cette facilité à toutes les personnes qui ont un régime alimentaire spécifique. C’est pourquoi vous y retrouverez des recettes sans lactose, sans gluten et sans sel pour les intolérances. Des recettes végétariennes et véganes pour ceux qui ne mangent pas de viande ou de produits animaux. Mais également tout un panel de filtre d'allergènes. Il n’est pas toujours simple de trouver une recette quand on est allergique. Surtout si ça touche des aliments courants. Avec DéliSanSucre, vous n’aurez qu’à cliquer sur un filtre. Toutes les recettes qui ne vous conviennent pas sont automatiquement retirées des résultats. Sans prise de tête, mais pas sans plaisir.</p>
                    <p class="font-overpass font-light p-4">Si vous pensez qu’il manque des allergènes ou des régimes alimentaires, n’hésitez pas à nous contacter. Et si vous voulez partager vos meilleures recettes avec la communauté, vous pouvez nous les proposer ici. </p>        
                </div>
            </div>
        </section>    
    </main>
    <section id="newsletter" class="bg-primary px-8 py-4 flex flex-col items-center desktop:w-10/12 m-auto">
        <h3 class="font-fira font-black text-black uppercase text-l text-center">Recevez des recettes adaptées directement dans votre boîte mail</h3>
        <p class="font-overpass font-regular my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis.</p>
        <form action="/leads-subscribing-newsletter" method="post">
                <label for="email" class="font-overpass font-thin">Votre adresse e-mail :</label>
            <div class="flex ">
                <input id="email" name="subscriber_email" type="email"/>
                <button type="submit" class="font-fira bg-dark text-white px-8 py-2">S'abonner</button>
            </div>
        </form>
    </section>
  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'Accueil',
  data () {
    return {
        listeCategories: [],
        listeRecettes:[],
        imagesSlider: [],
    }
  },
  created(){
// liste des catégories
      axios.get(param.hostSpecific+"listeCategories")
      .then(response => {
          this.listeCategories = response.data;
      })
//liste des recettes
      axios.get(param.hostSpecific+"listeRecettesAll")
      .then(response => {
          this.listeRecettes = response.data;
      })
      .catch(error => console.log(error))
//liste images du slider
      axios.get(param.hostSpecific+"listeImagesSlider")
      .then(response => {
          this.imagesSlider = response.data;
      })
      .catch(error => console.log(error))
  },
  filters: {
        liveSubstr: function(string, nb) {
            return string.substring(0,nb) + '...';
        },
    },
  mounted() {
       //slider showcase
        var swiper = new Swiper(".showcaseSlider", {
            observer: true, 
            observeParents: true,
            slidesPerView: "auto",
            centeredSlides: true,
            grabCursor: true,
            spaceBetween: 30,
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            },
            autoplay: {
                delay: 3000,
            },
        });

    //slider recettes
        var swiper2 = new Swiper(".recepeSlider", {
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
  
}
        
</script>

<style scoped>

</style>
