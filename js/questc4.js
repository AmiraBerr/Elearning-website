// create questions
var questions = [
    new Question("Pour assurer la sécurité , un système doit garantir :", ["La confidentialité , authentification , La traçabilité", "La confidentialité , La disponibilité, l'intégrité","La disponibilité, l'intégrité , l'authentification", "La traçabilité ,l'intégrité , l'authentification"], "La confidentialité , La disponibilité, l'intégrité"),
    new Question("Dans le domaine du cryptage, RSA veut dire...", ["Research of Security by Algorithm  ", "Reasonable and Secure Activity", "Research of Security by Activity", "Rivest, Shamir, et Adelman, auteurs de l’algorithme du chiffrement "], "Rivest, Shamir, et Adelman, auteurs de l’algorithme du chiffrement "),
    new Question("la Sécurité des Systèmes d'Information doit être au centre de toute société voulant préserver ses travaux, ses secrets, ses avantages concurrentiels , quel est le moyen qui ne satisfait pas cette condition ", ["L'abondon de poste de travail", "La classification de l'information", "Le choix des mots de passe", "La sauvegarde"], "L'abondon de poste de travail")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
displayquiz();
