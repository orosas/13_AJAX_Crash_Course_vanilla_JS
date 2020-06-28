document.getElementById('button').addEventListener('click', getName);
document.getElementById('getForm').addEventListener('submit', getName);
document.getElementById('postForm').addEventListener('submit', postName);

// Nota: Código para button
// function getName() {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'process.php', true);

//     xhr.onload = function(){
//         console.log(this.responseText);
//     }

//     xhr.send();
// }

// Nota: Código para GET FORM enviado a php
function getName(e) {
    e.preventDefault();

    let name = document.getElementById('name1').value

    let xhr = new XMLHttpRequest();
    console.log(name);
    xhr.open('GET', 'process.php'+name, true);

    xhr.onload = function(){
        console.log(this.responseText);
    }

    xhr.send();


}
// Nota: Código para POST FORM enviado a php
function postName(e) {
    e.preventDefault();

    let name = document.getElementById('name2').value

    // Nota: Parámetro para ser enviado a POST
    let params = "name="+name;

    let xhr = new XMLHttpRequest();
    console.log(name);
    xhr.open('POST', 'process.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function(){
        console.log(this.responseText);
    }

    xhr.send(params);
}