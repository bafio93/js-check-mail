alert("Salve utente! Sei nella lista degli eletti???");
//Asking the user for an input!
var userMail = prompt("Inserisci qui la tua email:");
//Creating an arbritary mail list:
var list = ["profOak@gmail.com","profElm@gmail.com","profBirch@gmail.com","bill@gmail.com"];
console.log(list);
var presence = 0;
//Checking the user's input, via a for loop.
for (var i = 0; i < list.length ; i++) {
    if (userMail === list[i]) {
        presence = 1;
    }
}
//Evaluation of result:
if (presence == 1) {
    document.getElementById("outcome").innerHTML = "Sei presente nella lista! Benvenuto!";
}
else {
    document.getElementById("outcome").innerHTML = "Non sei presente nella lista. Ciao.";
}
