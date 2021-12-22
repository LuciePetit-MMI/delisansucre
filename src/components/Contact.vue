<template>
  <div>
    <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <h1 class="font-fira font-black text-black mt-8 pb-6 text-3xl text-center">Contactez-nous</h1>
        
        <section class="flex tablet:justify-center">
            <div class="border-secondary border-2 p-4 flex flex-col items-center justify-center w-1/2">
                <h2 class="font-fira font-black text-dark text-xl mb-4">Un problème ? Une question ?</h2>
                <form action="">
                    <input type="text" placeholder="Votre nom" class="border-secondary border-2 rounded-lg w-full font-overpass font-light p-2 text-center my-2">
                    <input type="text" placeholder="Votre e-mail" class="border-secondary border-2 rounded-lg w-full font-overpass font-light p-2 text-center my-2">
                    <textarea name="" id="" cols="30" rows="3" placeholder="Votre message" class="border-secondary border-2 rounded-lg w-full font-overpass font-light p-2 text-center my-2"></textarea>
                    <button class="bg-primary rounded-full w-full font-fira font-black p-2 text-center my-2">Envoyer</button>
                </form>
            </div>
            <div class="overflow-hidden h-96">
              <img src="../assets/image.png" alt="image contact" class="hidden h-full tablet:block">
            </div>
        </section>    
    </main>

  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
   
  },
}
        
</script>

<style scoped>

</style>
