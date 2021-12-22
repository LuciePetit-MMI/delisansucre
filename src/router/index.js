import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Menu from '@/components/Menu'
import Compte from '@/components/Compte'
import EditionCompte from '@/components/EditionCompte'
import Articles from '@/components/Articles'
import Article from '@/components/Article'
import Recettes from '@/components/Recettes'
import Recette from '@/components/Recette'
import Categories from '@/components/Categories'
import Categorie from '@/components/Categorie'
import CreationRecette from '@/components/CreationRecette'
import Contact from '@/components/Contact'
import MentionsLegales from '@/components/MentionsLegales'
import Confidentialite from '@/components/Confidentialite'
import Connexion from '@/components/Connexion'
import Inscription from '@/components/Inscription'



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',                    name: 'Accueil',             component: Accueil},
    {path: '/Menu',                name: 'Menu',                component: Menu},
    {path: '/Compte',              name: 'Compte',              component: Compte},
    {path: '/EditionCompte',       name: 'EditionCompte',       component: EditionCompte},
    {path: '/Articles',            name: 'Articles',            component: Articles},
    {path: '/Article/:id',         name: 'Article',             component: Article},
    {path: '/Recettes',            name: 'Recettes',            component: Recettes},
    {path: '/Recette/:id',         name: 'Recette',             component: Recette},
    {path: '/Categories',          name: 'Categories',          component: Categories},
    {path: '/Categorie/:id',       name: 'Categorie',           component: Categorie},
    {path: '/CreationRecette',     name: 'CreationRecette',     component: CreationRecette},
    {path: '/Contact',             name: 'Contact',             component: Contact},
    {path: '/MentionsLegales',     name: 'MentionsLegales',     component: MentionsLegales},
    {path: '/Confidentialite',     name: 'Confidentialite',     component: Confidentialite},
    {path: '/Connexion',           name: 'Connexion',           component: Connexion},
    {path: '/Inscription',         name: 'Inscription',         component: Inscription},
  ]
})
