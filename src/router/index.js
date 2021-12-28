import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Menu from '@/components/Menu'
import Articles from '@/components/Articles'
import Article from '@/components/Article'
import Recettes from '@/components/Recettes'
import Recette from '@/components/Recette'
import Categories from '@/components/Categories'
import Categorie from '@/components/Categorie'
import Contact from '@/components/Contact'
import MentionsLegales from '@/components/MentionsLegales'
import Confidentialite from '@/components/Confidentialite'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',                    name: 'Accueil',             component: Accueil},
    {path: '/Menu',                name: 'Menu',                component: Menu},
    {path: '/Articles',            name: 'Articles',            component: Articles},
    {path: '/Article/:id',         name: 'Article',             component: Article},
    {path: '/Recettes',            name: 'Recettes',            component: Recettes},
    {path: '/Recette/:id',         name: 'Recette',             component: Recette},
    {path: '/Categories',          name: 'Categories',          component: Categories},
    {path: '/Categorie/:id',       name: 'Categorie',           component: Categorie},
    {path: '/Contact',             name: 'Contact',             component: Contact},
    {path: '/MentionsLegales',     name: 'MentionsLegales',     component: MentionsLegales},
    {path: '/Confidentialite',     name: 'Confidentialite',     component: Confidentialite},
  ]
})
