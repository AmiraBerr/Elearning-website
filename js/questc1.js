// create questions
var questions = [
    new Question("On peut caractérisé le risque en terme de sécurité par l'equation :", ["risque = (menace * vulnerabilite) / contre mesure", "risque = contre mesure / (menace * vulnerabilite)","risque = contre mesure - (menace * vulnerabilite)", "risque = (menace * contre mesure) / vulnerabilite"], "risque = (menace * vulnerabilite) / contre mesure"),
    
    new Question("Un virus peut se propager via des supports amovibles ( disquettes, CD/DVD, clé USB)", ["faux", "vrai", "seulement ceux achetés à part", "je ne sais pas"], "vrai"),
    new Question("La métrise des risques est un domaine", ["complexe mais countournable", "facile à métriser  ","dures et incontournable", "nécessite l'expérience"], "dures et incontournable")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
displayquiz();
