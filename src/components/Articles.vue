<template>
  <div>
        <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <section>
            <h1>Articles</h1>
            <div class="grid_custom">
              <div v-for="article in listeArticles" :key="article.id">
                <div class="w-full shadow-lg">
                    <router-link :to="{name: 'Article', params: {id:article.id}}">
                        <img :src="article.urlImage" :alt="article.titre" class="w-full h-80">
                        <h3 class="w-full text-center font-fira font-black text-dark bg-white py-4 px-8">{{article.titre}}</h3>    
                    </router-link>
                </div>
              </div>
            </div>
        </section>
    </main>

  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'Articles',
  data () {
    return {
      listeArticles:[],
    }
  },
  created() {
    axios.get(param.hostSpecific+"listeArticles")
      .then(response => {
          this.listeArticles = response.data;
      })
      .catch(error => console.log(error))
  },
}
        
</script>

<style scoped>

</style>
