<template>
  <div>
    <main class="w-10/12 mx-auto">
        <h1>Proposer une recette</h1>
        <p>Utilisez ce formulaire pour sauvegarder et partager vos recettes avec votre famille, vos amis et tout les membres de DéliSanSucre !</p>
        <form @submit.prevent="creer" enctype="multipart/form-data">
            <input type="text" placeholder="Titre de la recette" class="bg-primary font-fira font-black placeholder-black py-3 px-4 text-center w-full mb-4 placeholder-opacity-60">
            <input type="text" placeholder="Description de la recette" class="bg-primary font-fira font-black placeholder-black py-3 px-4 text-center w-full mb-4 placeholder-opacity-60">
            
            <div class="laptop:flex laptop:justify-between">  
                <div class="container laptop:w-5/12">
                    <div class="wrapper relative h-60 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                        <div class="image absolute h-full w-full flex items-center justify-center">
                            <img id="img_placeholder" src="" alt="" class="h-full w-full object-cover">
                        </div>
                        <div class="content">
                            <div class="text-center text-dark">Ajoutez votre photo</div>
                        </div>
                    </div>
                    <input id="default-btn" type="file" hidden>
                    <button v-on:click="defaultBtnActive()" id="custom-btn" class="bg-primary text-center w-full my-4 font-fira font-black text-black py-4 px-8 shadow-lg rounded-lg">Choisir une photo</button>
                    <div id="cancel-btn" class="bg-light text-center w-full font-fira font-black text-black py-4 px-8 shadow-lg rounded-lg">Annuler</div>    
                </div>
            
                <div class="border-2 border-primary px-4 py-2 my-4 laptop:flex laptop:flex-col laptop:justify-center laptop:m-0">
                    <h2 class="border-b-dark border-b-2 w-32">Informations</h2>
                    <div class="tablet:grid tablet:grid-cols-2">
                        <div>
                            <label for="" class="font-fira font-black text-black">Nombre de personne</label>
                            <div class="numinputblock flex row items-center justify-center my-2">
                                <div id="symbol-minus"><i class="symbol fas fa-minus-circle fa-2x text-black"></i></div>
                                <div><input class="numinput text-center text-xl text-black font-bold w-20 h-20 bg-light rounded-full mx-4 shadow-lg" id="num1" type="text" value=1></div>
                                <div id="symbol-plus"><i class="symbol fas fa-plus-circle fa-2x text-black"></i></div>
                            </div>    
                        </div>

                        <div>
                            <label for="" class="font-fira font-black text-black">Temps de préparation (min)</label>
                            <div class="numinputblock flex row items-center justify-center my-2">
                                <div id="symbol-minus"><i class="symbol fas fa-minus-circle fa-2x text-black"></i></div>
                                <div><input class="numinput text-center text-xl text-black font-bold w-20 h-20 bg-light rounded-full mx-4 shadow-lg" id="num2" type="text" value=0></div>
                                <div id="symbol-plus"><i class="symbol fas fa-plus-circle fa-2x text-black"></i></div>
                            </div>    
                        </div>

                        <div>
                            <label for="" class="font-fira font-black text-black">Temps de cuisson (min)</label>
                            <div class="numinputblock flex row items-center justify-center my-2">
                                <div id="symbol-minus"><i class="symbol fas fa-minus-circle fa-2x text-black"></i></div>
                                <div><input class="numinput text-center text-xl text-black font-bold w-20 h-20 bg-light rounded-full mx-4 shadow-lg" id="num3" type="text" value=0></div>
                                <div id="symbol-plus"><i class="symbol fas fa-plus-circle fa-2x text-black"></i></div>
                            </div>    
                        </div>

                        <div>
                            <label for="" class="font-fira font-black text-black">Temps de repos (min)</label>
                            <div class="numinputblock flex row items-center justify-center my-2">
                                <div id="symbol-minus"><i class="symbol fas fa-minus-circle fa-2x text-black"></i></div>
                                <div><input class="numinput text-center text-xl text-black font-bold w-20 h-20 bg-light rounded-full mx-4 shadow-lg" id="num4" type="text" value=0></div>
                                <div id="symbol-plus"><i class="symbol fas fa-plus-circle fa-2x text-black"></i></div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-4 tablet:flex tablet:flex-col">
                <h2 class="border-b-dark border-b-2 w-32">Ingrédients</h2>
                <div class="border-b-2 border-primary mt-4 tablet:flex laptop:w-8/12 laptop:mx-auto">
                    <input type="text" multiple list="ingredients" placeholder="Sélectionner des ingrédients" class="w-full my-2 tablet:w-2/4 tablet:m-0">
                    <datalist id="ingredients">
                        <option v-for="ingredient in listeIngredients" :key="ingredient.id" :value="ingredient.nom"></option>
                    </datalist>
                    <input type="text" placeholder="Quantité" class="w-full my-2 tablet:w-1/4 tablet:m-0">
                    <input type="text" placeholder="Unité de mesure" class="w-full mt-2 tablet:w-1/4 tablet:m-0">
                </div>
                <div id="new_ing"></div>
                <div v-on:click="addIng()" class="bg-dark w-full text-white font-overpass py-2 px-4 text-center my-2 tablet:w-80 tablet:self-center">Ajouter un ingrédient</div>
                <div v-on:click="removeIng()" class="border-2 border-dark w-full text-dark font-overpass py-2 px-4 text-center my-2 tablet:w-80 tablet:self-center tablet:m-0">Supprimer le dernier ingrédient</div>
                <input type="hidden" value="1" id="total_ing">
            </div>
            
            <div class="my-4 tablet:flex tablet:flex-col">
                <h2 class="border-b-dark border-b-2 w-32">Étapes</h2>
                <textarea rows="3" cols="33" placeholder="Etape 1" class="w-full bg-primary placeholder-dark font-overpass py-2 px-4 my-2 laptop:w-8/12 laptop:mx-auto"></textarea>
                <div id="new_chq"></div>
                <div v-on:click="add()" class="bg-dark w-full text-white font-overpass py-2 px-4 text-center my-2 tablet:w-80 tablet:self-center">Ajouter une étape</div>
                <div v-on:click="remove()" class="border-2 border-dark w-full text-dark font-overpass py-2 px-4 text-center my-2 tablet:w-80 tablet:self-center tablet:m-0">Supprimer la dernière étape</div>
                <input type="hidden" value="1" id="total_chq">
            </div>

            <div class="my-4 flex flex-col justify-center ">
                <div class="flex items-center my-4">
                    <input type="checkbox" class="checkbox-custom hidden" id="conditions">
                    <label for="conditions" class="checkbox-custom-label"><div><i class="fa fa-check"></i></div>J’ai pris connaissance et j’accepte les modalités de participation.</label>    
                </div>
                <input type="submit" value="Soumettre la recette" class="btn-secondary tablet:w-80 tablet:self-center">
            </div>
        </form>    
    </main>
  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'CreationRecette',
  data () {
    return {
      listeIngredients: [],
      
    }
  },
  created(){
      axios.get(param.hostSpecific+"listeIngredients")
      .then(response=>{
            this.listeIngredients = response.data;
        })
        .catch(error => console.log(error))
  },
  methods: {
        //ajouter un input
        add: function (){
            var new_chq_no = parseInt($('#total_chq').val())+1;
            var new_input="<textarea rows=\"3\" cols=\"33\" placeholder=\"Etape "+new_chq_no+"\" id='new_"+new_chq_no+"'>";
            $('#new_chq').append(new_input);
            $('#total_chq').val(new_chq_no)
        },
        addIng: function (){
            var new_chq_no_ing = parseInt($('#total_ing').val())+1;
            var new_input_ing="<div id='new_ing_"+new_chq_no_ing+"'><input type=\"text\" multiple list=\"ingredients\" placeholder=\"Sélectionner des ingrédients\"><datalist id=\"ingredients\"><option value=\"Saumon\">Saumon</option><option value=\"Lait\">Lait</option><option value=\"Poivre\">Poivre</option><option value=\"Farine de riz\">Farine de riz</option><option value=\"Yaourt\">Yaourt</option></datalist><input type=\"text\" placeholder=\"Quantité\"><input type=\"text\" placeholder=\"Unité de mesure\"></div>";   
            $('#new_ing').append(new_input_ing);
            $('#total_ing').val(new_chq_no_ing)
        },

        //supprimer un input
        remove: function (){
            var last_chq_no = $('#total_chq').val();
            if(last_chq_no>1){
                $('#new_'+last_chq_no).remove();
                $('#total_chq').val(last_chq_no-1);
            }
        },
        removeIng: function (){
            var last_chq_no_ing = $('#total_ing').val();
            if(last_chq_no_ing>1){
                $('#new_ing_'+last_chq_no_ing).remove();
                $('#total_ing').val(last_chq_no_ing-1);
            }
        },
        //afficher une preview de l'image
        defaultBtnActive: function (){
            const wrapper = document.querySelector(".wrapper");
            const cancelBtn = document.querySelector("#cancel-btn");
            const defaultBtn = document.querySelector("#default-btn");
            const img = document.querySelector("#img_placeholder");

            defaultBtn.click(console.log("clic"));
            
            defaultBtn.addEventListener("change", function(){
            console.log("change");
            const file = this.files[0];
            if(file){
                const reader = new FileReader();
                reader.onload = function(){
                    const result = reader.result;
                    img.src = result;
                    wrapper.classList.add('active');
                }
                cancelBtn.addEventListener("click", function(){
                    img.src = "";
                    wrapper.classList.remove('active');
                });
                reader.readAsDataURL(file);
            }
        })

        }

  },
  mounted(){
        //input number minus
        $("div#symbol-minus").click( function() {
            var numblock = $(this).parent().find("input.numinput");
            var numid = $(numblock).attr("id");

            var num = $("#"+numid).val();
            if ( num == "" ) { $("#"+numid).val(1); } else
            if ( num > 0 ) { $("#"+numid).val( parseInt(num)-1 ); }
        });

        //input number plus
        $("div#symbol-plus").click( function() {
            var numblock = $(this).parent().find("input.numinput");
            var numid = $(numblock).attr("id");

            var num = $("#"+numid).val();
            if ( num == "" ) { $("#"+numid).val(1); } else
            { $("#"+numid).val( parseInt(num)+1 ); }
        });

  }
}
        
</script>

<style scoped>

</style>
