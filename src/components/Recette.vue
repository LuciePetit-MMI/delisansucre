<template>
  <div>
    <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <section id="showcase" class="mt-8">
            <h1 class="mb-4">{{recette.nom}}</h1>
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
                    <p @click="listeCourse()" class="cursor-pointer font-overpass font-thin flex justify-center items-center mx-auto my-4"><i class="fas fa-plus-circle px-2 text-primary"></i>Ajouter à la liste de course</p>
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
                        <div class="border-b-2 border-primary w-fit mb-4">
                            <label for="">Votre ratio insuline :</label>
                            <input type="text" :placeholder="ratio" v-model="ratio" @change="calculInsuline()" class="w-10">
                        </div>
                        <p>Insuline nécessaire : {{insuline}} unité</p>    
                        <div class="grid grid-cols-2">
                            <p>Glucide : {{recette.glucide}} g</p>
                            <p>Lactose : {{recette.lactose}} g</p>
                            <p>Fibre : {{recette.fibre}} g</p>
                            <p>Protéine : {{recette.proteine}} g</p>
                            <p>Lipide : {{recette.lipide}} g</p>
                        </div>
                        <p class="text-sm">*Ces valeurs peuvent changer en fonction des ingrédients / marques que vous utilisez. </p>
                    </div>
                </div>    
            </div>
        </section>
        <section id="steps" class="my-8">
            <h2 class="border-dark border-b-2 w-32">Étapes</h2>
            <div  v-for="realisation in recette.realisation" :key="realisation.id" class="tablet:w-9/12 m-auto">
                <div class="flex flex-col my-4 tablet:flex-row tablet:items-center">
                    <p class="bg-light rounded-full w-auto h-auto px-8 py-6 flex items-center justify-center font-fira font-black text-2xl text-dark self-center mb-2 tablet:mr-8">{{realisation.numero}}</p>
                    <p class="font-overpass font-regular">{{realisation.etape}}</p>
                </div>
            </div>
        </section>
    </main>

  </div>
</template>

<script>
import param from '@/param/param'
import jsPDF from "jspdf"

export default {
  name: 'Recette',
  data () {
    return {
      recette: {},
      ratio: 0.1,
      insuline: 0,
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
  computed:{
//calcul de la quantité d'insuline en fonction du ratio de la personne
      calculInsuline: function(){
          let quantite_insuline;
          quantite_insuline = this.recette.glucide*this.ratio;
          this.insuline = quantite_insuline.toFixed(2);
      }
  },
  methods:{
//génération de la liste de course
        listeCourse: function(){
            const doc = new jsPDF();
            var nomRec = this.recette.nom; 
            var liste = this.recette.course;

            doc.text(liste, 10, 10);
            doc.save(nomRec+".pdf"); 
        },
  },
}
        
</script>

<style scoped>

</style>
