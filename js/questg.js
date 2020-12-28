// create questions
var questions = [
    new Question("Laquelle de ces contre mesures protège spécifiquement contre les attaques de MAC flooding et de MAC spoofing ?", ["Configurer la sécurité du port (Port security) sur le switch", "Configurer la reconnaissance du port (Port recon) sur le switch","Configurer le switch mapping", "Configurer la reconnaissance multiple sur le switch"], "Configurer le switch mapping"),
    new Question("Si un virus se réveille chaque 15 du mois pour s’exécuter. Il fait partie de quellecatégorie ?", ["Boot sector virus", "Metamorphic virus", "Macro virus", "Sparse infector virus"], "Sparse infector virus"),
    new Question("Dans le contexte des trojan, quelle est la définition d’un wrapper ?", ["Un outil utilisé pour lier le trojan à un fichier légitime", "Un outil de chiffrement pour protéger le trojan","Un outil qui encapsule les paquets dans un nouvel entête.", "Un outil utilisé pour calculer la bande passante et les cycles CPU perdu à causedu trojan"], "Un outil utilisé pour lier le trojan à un fichier légitime"),
    new Question("Quel est le risque d’installer un faux antivirus ?", ["Les version de l’OS, services exécutés et applications installées de la victime seront publiés les blogs et forums", "Des informations identifiables personnelles de la victime (adresse, détails de carte de crédit) peuvent être extraite et exploité par l’attaquant", "Une fois infecté, l’ordinateur ne pourra plus démarrer et le trojan tentera de formater le disque dur", "Une attaque DOS sera lancé à partir de l’ordinateur infecté, crashant les autres machines connectées dans le réseau"], "Des informations identifiables personnelles de la victime (adresse, détails de carte de crédit) peuvent être extraite et exploité par l’attaquant"),
    new Question("Si vous rencontrer une machine dipsheep sur le site client, que devriez-vous faire ?", ["Une machine dipsheep est utilisé que pour de la vérification de virus", "Une machine dipsheep est un autre nom pour le honeypot", "Un dipsheep coordonne plusieurs honeypots", "Des ordinateurs dipsheep diffère une attaque de déni de service"], "Une machine dipsheep est utilisé que pour de la vérification de virus"),
     new Question("Laquelle de ces déclarations ne sont pas une bonne définition d’un cheval de troie ?", ["N’importe quel programme qui parait effectuer une fonction voulue et nécessaire mais qui effectuent des fonctions inconnues par l’utilisateur.", "Un programme autorisé qui a été conçu pour capturer les frappes de touche pendant que l’utilisateur est inconscient de cette activité.", "Un programme non autorisé contenu dans un programme légitime. Ce programme non autorisé effectue des fonctions inconnues par l’utilisateur", "Un programme légitime altéré en plaçant un code non autorisé en son sein, ce code effectue des fonctions inconnues de l’utilisateur"], "Un programme autorisé qui a été conçu pour capturer les frappes de touche pendant que l’utilisateur est inconscient de cette activité.")
    
];

// create quiz
var quiz = new Quiz(questions);

// display  le quiz
displayquiz();
