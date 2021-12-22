<template>
  <div>
    <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <h1 class="font-fira font-black text-black mt-8 pb-6 text-3xl text-center">Rejoindre DéliSanSucre</h1>
        <section id="singup">
            <div class="tablet:flex tablet:justify-center">
                <div class="border-secondary border-2 p-4 flex flex-col items-center">
                    <h2 class="font-fira font-black text-dark text-xl mb-4">S'inscrire sur DéliSanSucre</h2>
                    <div class="my-2">
                        <p class="mb-0">J'ai déjà un compte</p>
                        <router-link to="/Connexion">Je me connecte</router-link>
                    </div>
                    <button class="bg-primary rounded-full w-full font-fira font-black p-2 text-center my-2">Continuer sur Facebook</button>
                    <p>ou</p>
                    <form action="">
                        <input type="text" placeholder="Votre nom et prénom" class="border-secondary border-2 rounded-lg w-full font-overpass font-light p-2 text-center my-2">
                        <input type="text" placeholder="Votre pseudo" class="border-secondary border-2 rounded-lg w-full font-overpass font-light p-2 text-center my-2">
                        <input type="text" placeholder="Votre e-mail" class="border-secondary border-2 rounded-lg w-full font-overpass font-light p-2 text-center my-2">
                        <input type="text" placeholder="Votre mot de passe" class="border-secondary border-2 rounded-lg w-full font-overpass font-light p-2 text-center my-2">
                        <div class="flex flex-row">
                            <input type="checkbox" class="checkbox-custom hidden" id="conditions">
                            <label for="conditions" class="checkbox-custom-label"><div><i class="fa fa-check"></i></div>J'accepte les <a href="conditions.html" class="text-secondary underline">conditions</a> et la <a href="confidentialities.html" class="text-secondary underline">charte de confidentialité</a>.*</label>    
                        </div>
                        <div class="flex flex-rowe">
                            <input type="checkbox" class="checkbox-custom hidden" id="newsletter">
                            <label for="newsletter" class="checkbox-custom-label"><div><i class="fa fa-check"></i></div>J'accepte de recevoir les newsletters DéliSanSucre</label>
                        </div>
                        <button type="submit" class="bg-primary rounded-full w-full font-fira font-black p-2 text-center my-2">S'inscrire</button>
                    </form>
                </div>
                <img src="../assets/image.png" alt="image contact" class="hidden tablet:block">    
            </div>
        </section>    
    </main>

  </div>
</template>

<script>
import param from '@/param/param'

export default {

  name: 'Inscription',
  data () {
    return {
     
    }
  },
  methods:{
      signup: function(){
          
      }
  },
}
        
</script>

<style scoped>

</style>
