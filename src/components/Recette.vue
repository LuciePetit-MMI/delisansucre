<template>
  <div>
    <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <section id="showcase" class="mt-8">
            <h1 class="mb-4">{{recette.nom}}</h1>
            <p class="font-fira font-bold text-black text-center">Par <span class="text-dark">{{recette.auteur}}</span></p>
            <div>
                <div class="w-full h-60 laptop:h-80 overflow-hidden flex justify-center align-center">
                    <img :src="recette.urlImage" alt="image recette" class="w-full h-fit">
                </div>
                <p class="px-8 py-4 bg-white font-overpass font-regular">{{recette.description}}</p>
            </div>
        </section>
        <section id="infos" class="mt-4 mb-8">
            <div class="grid grid-cols-2 mb-4 mx-auto tablet:grid-cols-4">
                <span class="flex flex-col items-center">
                    <h4 class="text-center mb-2">Nombre de personne</h4>
                    <p class="text-center text-xl text-black font-bold w-14 h-14 bg-light rounded-full mx-4 shadow-lg flex justify-center items-center">{{recette.personne}}</p>
                </span>
                <span class="flex flex-col items-center">
                    <h4 class="text-center mb-2">Temps de préparation</h4>
                    <p class="text-center text-xl text-black font-bold w-14 h-14 bg-light rounded-full mx-4 shadow-lg flex justify-center items-center">{{recette.preparation}}"</p>
                </span>
                <span class="flex flex-col items-center">
                    <h4 class="text-center mb-2">Temps de cuisson</h4>
                    <p class="text-center text-xl text-black font-bold w-14 h-14 bg-light rounded-full mx-4 shadow-lg flex justify-center items-center">{{recette.cuisson}}"</p>
                </span>
                <span class="flex flex-col items-center">
                    <h4 class="text-center mb-2">Temps de repos</h4>
                    <p class="text-center text-xl text-black font-bold w-14 h-14 bg-light rounded-full mx-4 shadow-lg flex justify-center items-center">{{recette.repos}}"</p>
                </span>
            </div>
            <div class="laptop:grid laptop:grid-cols-2">
                <div>
                    <h2 class="border-dark border-b-2 w-32">Ingrédients</h2>
                    <ul class="grid grid-cols-2 gap-2 w-9/12 font-overpass font-regular">
                        <li v-for="composition in recette.composition" :key="composition.id" class="text-black">{{composition.quantite}} {{composition.unite}} <span v-for="ingredient in composition.ingredient" :key="ingredient.id"> {{ingredient.nom}}</span></li>
                    </ul>
                    <p class="font-overpass font-thin flex justify-center items-center mx-auto my-4"><i class="fas fa-plus-circle px-2 text-primary"></i>Ajouter à la liste de course</p>
                </div>
                <div class="laptop:border-l-2 laptop:border-secondary laptop:pl-4">
                    <div>
                        <ul class="font-overpass font-regular w-full flex justify-center border-secondary border-t-2 pt-2 laptop:border-none laptop:justify-start">
                            <li v-for="categorie in recette.categorie" :key="categorie.id" v-if="categorie.regime" class="px-3"><img :src="categorie.urlIcone" alt="" class="w-10"></li>
                        </ul>
                        <div class="flex justify-center my-4 laptop:justify-start">
                            <p v-for="categorie in recette.categorie" :key="categorie.id" v-if="categorie.regime==false" class="font-fira font-black border-2 border-secondary py-2 px-4 mx-3 rounded-full w-max">{{categorie.nom}}</p>
                        </div>
                    </div>
                    <div class="font-overpass font-regular">
                        <p>Insuline nécessaire : taux</p>    
                        <p>Glucide : taux</p>
                        <p>Lactose : taux</p>
                        <p>Gluten : taux</p>
                    </div>
                </div>    
            </div>
        </section>
        <section id="steps" class="my-8">
            <h2 class="border-dark border-b-2 w-32">Étapes</h2>
            <div  v-for="realisation in recette.realisation" :key="realisation.id" class="tablet:w-9/12 m-auto">
                <div  v-for="etape in realisation.etape" :key="etape.id" class="flex flex-col my-4 tablet:flex-row tablet:items-center">
                    <p class="bg-light rounded-full w-auto h-auto px-8 py-6 flex items-center justify-center font-fira font-black text-2xl text-dark self-center mb-2 tablet:mr-8">{{realisation.numero}}</p>
                    <p class="font-overpass font-regular">{{etape.description}}</p>
                </div>
            </div>
        </section>
        <section id="opinions" class="my-8">
            <h2 class="border-dark border-b-2 w-32">Vos avis</h2>
            <div class="tablet:w-9/12 laptop:w-7/12 m-auto">
                <form @submit.prevent="creer" enctype="multipart/form-data" class="flex flex-col">
                    <input type="text" hidden :value="recette.id">
                    <input type="text" placeholder="Donnez votre avis sur cette recette" class="border-secondary border-2 rounded-lg w-full font-overpass font-light p-2 text-center my-2 h-20">
                    <input type="submit" class="btn-primary" value="Valider">
                </form>
                <div>
                    <div v-for="commentaire in recette.commentaire" :key="commentaire.id" class="flex items-start my-4">
                        <div class="flex flex-col justify-center mr-4">            
                            <img :src="commentaire.imageUtilisateur" alt="Image profil" class="rounded-full w-20">
                            <p class="mt-2">{{commentaire.pseudoUtilisateur}}</p>
                        </div>
                        <p>{{commentaire.message}}</p>
                    </div> 
                    <div v-if="recette.commentaire.length == []">
                        <p class="my-6 text-center text-lg"><span class="text-dark font-bold">Oups, pas encore d'avis...</span> Soyez le premier à donner votre avis sur cette recette !</p>
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
  name: 'Recette',
  data () {
    return {
      recette: {},
    }
  },
  created() {
    this.recette.id = this.$route.params.id;
//requete donnees de la recette
    axios.get(param.hostSpecific+"getRecette/"+this.recette.id)
        .then(response=>{
        this.recette = response.data;
    })
  },
  method:{
        creer: function(){
            axios({
                method: 'post',
                url: param.auth+'token',
                data:{
                    'username' : param.user,
                    'password' : param.psw
                },
            }).then(function(response){
                      
            }.bind(this))
            .catch(error => {
                console.log("ERREUR Authorisation token");
                console.log(error)
            })
        }
  }
}
        
</script>

<style scoped>

</style>
