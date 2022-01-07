export default{
    // Serveur fournisseur de données - back-end
    host : /*'http://localhost/delisansucre/wp-json/wp/v2/'*//*'https://administration.delisansucre.luciepetit.fr/wp-json/wp/v2/'*/'https://administration.recette-diabetique.com/wp-json/wp/v2/',
    //Routes specifiques
    hostSpecific : /*'http://localhost/delisansucre/wp-json/recette/v1/'*//*'https://administration.delisansucre.luciepetit.fr/wp-json/recette/v1/'*/'https://administration.recette-diabetique.com/wp-json/recette/v1/',
    // Authentification JWT Wordpress
    auth: /*'http://localhost/delisansucre/wp-json/jwt-auth/v1/'*//*'https://administration.delisansucre.luciepetit.fr/wp-json/jwt-auth/v1/'*/'https://administration.recette-diabetique.com/wp-jsonjwt-auth/v1/',
    user: 'abonne',
    psw: 'abonne',

    message: {
      errCnx: "Les éléments d'identification ne permettent pas d'accéder à l'application",
      errAcces: "Vous n'avez pas les droits nécessaires pour accéder à cette page",
      noCnx: "",
    }
}
