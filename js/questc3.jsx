// create questions
var questions = [
    new Question("Pourquoi faut-il un mot de passe compliqué ?", ["Pour ne pas s'en rappeler dans un mois", "Pour que personne ne l'apprenne par coeur","Pour ce protéger des logiciels pirates", "Pour garantir l'unicité"], "Pour ce protéger des logiciels pirates"),
    
    new Question("Quelle technique d'attaque consiste à usurper l'identité de sa victime ?", ["Le denial of service", "Le spoofing", "Web bug", "Flooding"], "Le spoofing"),
    new Question("Un antivirus permet :", ["De détecter les virus", "De repérer et supprimer les virus d’un système informatique","D’analyser un système informatique", "D’analyser le système informatique et détecter les virus"], "D’analyser le système informatique et détecter les virus")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
displayquiz();
