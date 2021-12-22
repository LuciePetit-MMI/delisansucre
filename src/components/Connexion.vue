<template>
  <div>
    <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <h1 class="font-fira font-black text-black mt-8 pb-6 text-3xl text-center">Rejoindre DéliSanSucre</h1>
        <section id="login">
            <div class="tablet:flex tablet:justify-center">
                <div class="border-secondary border-2 p-4 flex flex-col items-center justify-center h-96">
                    <h2 class="font-fira font-black text-dark text-xl mb-4">Se connecter sur DéliSanSucre</h2>
                    <div class="my-2">
                        <p class="mb-0">Je n'ai pas de compte</p>
                        <router-link to="/Inscription">Je crée un compte</router-link>
                    </div>
                    <form action="">
                        <input type="text" placeholder="Votre e-mail" class="border-secondary border-2 rounded-lg w-full font-overpass font-light p-2 text-center my-2">
                        <input type="text" placeholder="Votre mot de passe" class="border-secondary border-2 rounded-lg w-full font-overpass font-light p-2 text-center my-2">
                        <input type="submit" value="Se connecter" class="bg-primary rounded-full w-full font-fira font-black p-2 text-center my-2">
                    </form>
                </div>
                <div class="overflow-hidden h-96">
                  <img src="../assets/image.png" alt="image contact" class="hidden h-full tablet:block">
                </div>
            </div>
        </section>
    </main>

  </div>
</template>

<script>
export default {
  name: 'Connexion',
  data () {
    return {
      
    }
  }
}
        
</script>

<style scoped>

</style>
