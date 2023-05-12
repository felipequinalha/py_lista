//RETORNANDO A HORA
let horas = new Date()
document.write(horas.getHours());
document.write("<br><br>")

//RETORNANDO OS MINUTOS
let minutos = new Date()
document.write(horas.getMinutes());
document.write("<br><br>")

//RETORNANDO OS SEGUNDOS
let segundos = new Date()
document.write(segundos.getSeconds());
document.write("<br><br>")

//SETANDO A HORA
let horas1 = new Date()
horas1.setHours(horas1.getHours()+5); 
document.write(horas1.getHours())
document.write("<br><br>")

//SETANDO os minutos
let minutos1 = new Date()
horas1.setMinutes(horas1.getMinutes()+10); 
document.write(horas1.getMinutes())
document.write("<br><br>")

//SETANDO os segundos
let segundos1 = new Date()
horas1.setSeconds(horas1.getSeconds()+10); 
document.write(horas1.getSeconds())
document.write("<br><br>")

// USANDO O setTimeout

function BemVindo(){
    alert("Ola seja bem vindo")
}
setTimeout(BemVindo,2000)