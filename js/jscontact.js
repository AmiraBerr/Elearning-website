function validation() {
    //declaration:
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = parseInt(document.getElementById("tlf").value);
    var msg = document.getElementById("msg").value;
    var emailexpreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    //traitement:
    if( name!= "" && email!= "" && phone!= "" && msg!= "")
        {
        if(email.match(emailexpreg)){
            
            alert("Merci ! Votre message a bien été envoyé.");
            return true;
        }  
        
        else{
            alert("Email non valide!")
        }
		}
        else{
            alert("veuillez remplir tout les champs svp");
            return false;
        }
}