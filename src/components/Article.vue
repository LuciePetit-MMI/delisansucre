<template>
  <div>
    <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <section id="head" class="w-full my-6 flex flex-col items-center">
            <h1>{{article.titre}}</h1>
            <p class="font-fira font-bold text-dark uppercase">Posté le {{article.date}}</p>
            <p class="mt-8">{{article.chapeau}}</p>
            <img :src="article.urlImage" alt="image article" class="w-full h-60 my-6">
        </section>
        <section v-for="paragraphe in article.contenu" :key="paragraphe.id" id="body">
            <h2 class="font-overpass font-bold text-xl text-dark my-2">{{paragraphe.titre}}</h2>
            <p class="font-overpass font-regular text-black my-2">{{paragraphe.texte}}</p>
        </section>
        <section id="more">
          <div  class="flex flex-col items-center">
            <h2 class="font-overpass font-regular text-xl text-black my-2">Lire d’autres articles</h2>
            <span class="flex justify-center mb-4">
                <router-link to="/Articles" class="text-center uppercase font-overpass font-regular text-black">Voir tous les articles</router-link>
                <i class="fas fa-arrow-right pl-2"></i>
            </span>
            <div class="articleSlider relative overflow-hidden">
                  <div class="swiper-wrapper">
                      <div v-for="article in listeArticles" :key="article.id" class="swiper-slide relative px-1 h-96 w-9/12 mobil:w-60 mobil:px-2">
                          <router-link :to="{name: 'Article', params: {id:article.id}}">
                                  <img :src="article.urlImage" alt="" class="h-full w-full">
                                  <div class="flex flex-col bg-white text-dark p-2 font-fira font-black w-4/5 h-24 absolute bottom-6 items-center justify-center mobil:w-50">
                                      <h3>{{article.titre | liveSubstr(50)}}</h3>
                                  </div>
                          </router-link>
                      </div>
                  </div>
              </div>
              <div class="swiper-button-next text-primary"></div>
              <div class="swiper-button-prev text-primary"></div>
          </div>    
        </section>
    </main>

  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'Article',
  data () {
    return {
      article: {},
      listeArticles:[],
    }
  },
  created() {
    this.article.id = this.$route.params.id;
      axios.get(param.hostSpecific+"getArticle/"+this.article.id)
      .then(response =>{
          this.article = response.data;
      })
      .catch(error => console.log(error))

      axios.get(param.hostSpecific+"listeArticles")
        .then(response => {
            this.listeArticles = response.data;
        })
      .catch(error => console.log(error))
  },
  mounted() {
    var swiper = new Swiper(".articleSlider", {
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
