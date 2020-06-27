document.getElementById('button').addEventListener('click', loadText);

function loadText() {
    // console.log('Click en botón');

    // Create XHR Object
    let xhr = new XMLHttpRequest();
    // OPEN - typeof, url/File, async
    // Nota: true significa que será síncrono????
    xhr.open('GET', 'sample2.txt', true);

    // Nota: Muestra readystate 1
    console.log('READYSTATE: ', xhr.readyState);

    // OPTIONAL - used for loaders
    // Nota: onprogress permite usar las barras o círculos gif
    //         animados durante la carga de páginas
    xhr.onprogress = function(){
        console.log('READYSTATE: onProgress ', xhr.readyState);
    }

    // ***** Nota: Versión moderna de hacer XMLHttpRequest
    xhr.onload = function() {
        console.log('READYSTATE: ', xhr.readyState);
        // Nota: this.status se utilijza en lugar de xhr.status 
        if(this.status == 200){
            // console.log(this.responseText);
            document.getElementById('text').innerHTML = this.responseText;
        } else if(this.status = 404){
            document.getElementById('text').innerHTML = 'Not Found';
        }
    }

    // Nota: En caso de error
    xhr.onerror = function() {
        console.log('Request Error ...');
    }

    // *****

    // >>>>>>> Nota: Versión anterior de como hacer XMLHttpRequest
            // Se tiene que verificar el readyState antes de proceder
    // xhr.onreadystatechange = function() {
        // Nota: readyState Values
        // 0: request not initialized
        // 1: Server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is ready

        // Nota: Muestra los readystates 2, 3, 4 
        // console.log('READYSTATE: ', xhr.readyState);

        // if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
    //     }
    // }
    // >>>>>>>

    // Sends request
    xhr.send();
}