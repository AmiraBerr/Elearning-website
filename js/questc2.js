// create questions
var questions = [
    new Question("laquelle des méthodes suivantes est une méthode française pour l'analyse des risques ?", ["OCTAVE", "EBIOS","CRAMM", "MELISA"], "EBIOS"),
    new Question("quelles sont les trois méthodes d'analyse des risques les plus conuus ?", ["MAHARI, MARION , EBIOS", "MEHARI ,EBIOS , CRAMM", "EBIOS , CRAMM , OCTAVE", "MARION ,EBIOS, OCTAVE"], "MAHARI, MARION , EBIOS"),
    new Question("Quelle est la signification de l'abréviation  EBIOS ?", ["Experience des besoins et identification des objectifs de sécurité.", "Expression des besoins et identificateurs des objectifs de sécurité.","Expression des bases et identification des objectifs de sécurité.", "Expression des besoins et identification des objectifs de sécurité."], "Expression des besoins et identification des objectifs de sécurité.")
    
    ];

// create quiz
var quiz = new Quiz(questions);

// display quiz
displayquiz();
