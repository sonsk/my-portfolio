import React from 'react'

export const projects = {
    tab1: {
        company:"sancfis",
        image:'projets/sancfis1.png',
        title: "Projet de fin d'étude",
        description :`Application web pour amélioration du suivi des demandes techniques à sancfis cameroun`,
        langages : ['php','html','css','Javascript','Chartjs','PhpMailer','Bootstrap']
    },
    tab2:{
        company:"geloc",
        image:'projets/geloc1.png',
        title:"Gestion de location",
        description:`Projet personnel de gestion de location réalisé pour faciliter l'administration des
        locataires et des appartements loués`,
        langages:['php','html','css','Javascript','Bootstrap']
    },
    tab3:{
      company:"sweet By Kjhons",
      image:'projet/sweet1.png',
      title:"E-commerce de Pâtisserie",
      description:`Site ecommerce pour vente de pâtisserie et mise en place des interfaces administrateur
      pour gestion des clients, commandes, et spécifités liées aux produits comme les parfums disponibles `,
      langages:['php','html','css','Javascript','Bootstrap']
  }
    
}
export const experience = {
  tab0:{
    company:'Sks',
    poste:"My portfolio",
    date:"Aout 2023",
    description:['Création et développement d\'un site portfolio interactif en utilisant ReactJS avec une esthétique moderne optimisée par Tailwind CSS.'],
    link:"",
    outils:["ReactJs","TailwindCss"]
  },
  tab1:{
    company:'Sancfis',
    poste:"stagiaire PFE",
    date:"Avril -Juillet 2023",
    description: ['Développement du backend en PHP pour une application de gestion de projets',
     'Création et gestion d\'opportunités appelées demandes d\'études techniques',
      'Suivi de l\'avancement des projets',
      'Collaboration entre les membres de l\'équipe',
       'Gestion des ressources et des tâches',
        'Génération de rapports détaillés sur les projets',
        'Utilisation de graphes pour la représentation visuelle des données'],
    link:"",
    outils:['Php', 'Html','Css','Javascript','Bootstrap','Figma','Trello','ChartJs']
  },
  tab2:{
    company:'Sanzegal',
    poste:"Freelance",
    date:"Aout 2023",
    description:['Création d\'un site vitrine WordPress associé à un blog pour une présence en ligne complète',
    'Mise en avant des produits ou services sur le site vitrine et partage d\'articles pertinents sur le blog',
    'Utilisation de thèmes et de plugins pour personnaliser l\'apparence et les fonctionnalités du site',
    'Optimisation pour les moteurs de recherche (SEO) afin d\'améliorer la visibilité en ligne',
    'Offre d\'une expérience conviviale pour les utilisateurs sur différents appareils et mise en avant des moyens de contact'],
    link:"",
    outils:['Wordpress']
  },
  tab3:{
    company:'GELOC',
    poste:"Personnel",
    date:"En cours",
    description:['Conception et réalisation d\'une application des gestion de location',
    'Mise en place des profils utilisateurs', 
    'Contrôle des paiements en fonction des contrats par locataires', 
    'Rappel de paiement en date déchéance',
    'Mise en place de fonctionnalités pour gérer les interactions entre locataires et bailleur. cas d \'un chat intégré par exemple'],
    link:"",
    outils:['Php','Html','Css','Javascript','Bootstrap']
  },
  tab4:{
    company:'Sweet by Kjohn\'s',
    poste:"Freelance",
    date:"Février 2022",
    description :[ 'Réalisation d\'un site e-commerce responsive avec fonctionnalités style CMS en utilisant le langage PHP',
     'Gestion de l\'ajout de produits parfums et tailles d\'articles',
      'Intégration d\'une galerie d\'images par produit',
       'Interface d\'administration conviviale pour gérer le contenu',
        'Utilisation de PHP pour la logique backend et la communication avec la base de données'],
    link:"",
    outils : ['Php', 'Html','Css','Javascript','Bootstrap']
  },
  tab5:{
    company:'Kaiidou Lab',
    poste:"Stagiaire",
    date:"Aout - Octobre 2022",
    description:['Prise en main de Spring Boot et réalisation d\'un projet de collecte journalière pour une microfinance',
     'Assistance à la réplication de serveurs',
      'Connaissance avancée de la manipulation des bases de données',
      'Auto-complete avec Ajax sur springboot'],
    link:"",
    outils:['Springboot','Bootstrap','Mysql','Ajax']

  },
  tab6:{
    company:'ENSPD',
    poste:"(Projet_Ecole)",
    date:"Janvier 2022",
    description: ['Conception et réalisation d\'un site d\'évaluation en ligne',
  'Création d\'examens par les enseignants','Contrôle de l\'accessibilité aux examens des étudiants par les enseignants',
    'Gestion des classes et des étudiants (ajout et retrait)',
    'Mise en place de fonctionnalités pour gérer les interactions entre enseignants et étudiants'],
    link:"",
    outils:['Php', 'Html','Css','Javascript','Bootstrap']
  }
  
}


export const languages = [
    "PHP 8",
    "SQL",
    "HTML 5",
    "CSS 3",
    "JavaScript"
  ];

export  const frameworks = [
    "React js",
    "Bootstrap",
    "Tailwind css",
    "Wordpress",
    "ChartJs"
  ];

export  const tools = [
    "Git/Github",
    "WampServer",
    "Vs code",
    "Postman",
  ];

function Details() {
  <></>
}
export default Details
