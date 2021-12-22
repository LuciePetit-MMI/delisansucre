<template>
  <div>
    <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <section id="modify">
            <h1>Éditer le profil</h1>
            <form action="">
                <div>
                    <h2 class="mb-0">Informations</h2>
                    <div class="border-dark border-b-2 w-32 mb-4"></div>
                    <div class="flex flex-col tablet:flex-row tablet:items-center tablet:justify-center">
                        <div class="mr-4 self-center tablet:w-60">
                            <img id="preview_img" src="image/image.png" alt="your image" class="max-w-full rounded-full w-32 h-32"/>
                            <input type="file" onchange="readURL(this);" class="w-32">    
                        </div>
                        <div class="flex flex-col">
                            <span>
                                <label for="" class="font-overpass text-black font-regular my-2">Nom :</label>
                                <input type="text" placeholder="Votre nom" class="my-2">    
                            </span>
                            <span>
                                <label for="" class="font-overpass text-black font-regular my-2">Prénom :</label>
                                <input type="text" placeholder="Votre prénom" class="my-2">    
                            </span>
                            <span>
                                <label for="" class="font-overpass text-black font-regular my-2">Email :</label>
                                <input type="text" placeholder="Votre e-mail" class="my-2">    
                            </span>
                            <span>
                                <label for="" class="font-overpass text-black font-regular my-2">Mot de passe :</label>
                                <input type="text" placeholder="Votre mot de passe" class="my-2">    
                            </span>
                        </div>    
                    </div>
                </div>
                <div>
                    <h2 class="mb-0">Mon régime alimentaire</h2>
                    <div class="border-dark border-b-2 w-32 mb-4"></div>
                    <div class="tablet:w-9/12 mx-auto">
                        <div class="grid grid-cols-1 tablet:grid-cols-3">
                            <select multiple name="" id="" data-placeholder="Sélectionner un régime">
                                <option>Sans sucre</option>
                                <option>Sans gluten</option>
                                <option>Sans lactose</option>
                                <option>Sans sel</option>
                                <option>Végétarien</option>
                                <option>Vegan</option>
                            </select>
                        </div> 
                    </div>
                </div>
                <div class="flex flex-col tablet:flex-row tablet:justify-center tablet:mt-4">
                    <input type="submit" class="btn-primary mx-auto my-2 tablet:mx-2" value="Valider">
                    <router-link to="/Compte" class="btn-secondary mx-auto my-2 tablet:mx-2">Annuler</router-link>
                </div>
            </form>
        </section>
    </main>

  </div>
</template>

<script>
export default {
  name: 'EditionCompte',
  data () {
    return {
      
    }
  }
}
        
</script>

<style scoped>

</style>
