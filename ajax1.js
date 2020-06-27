document.getElementById('button').addEventListener('click', loadText);

function loadText() {
    // console.log('Click en botón');

    // Create XHR Object
    let xhr = new XMLHttpRequest();
    // OPEN - typeof, url/File, async
    // Nota: true significa que será síncrono????
    xhr.open('GET', 'sample.txt', true);

    console.log('READYSTATE: ', xhr.readyState);

    // ***** Nota: Versión moderna de hacer XMLHttpRequest
    // xhr.onload = function() {
    //     // Nota: this.status se utilijza en lugar de xhr.status 
    //     if(this.status == 200){
    //         console.log(this.responseText);
    //     }
    // }
    // *****

    // >>>>>>> Nota: Versión anterior de como hacer XMLHttpRequest
    xhr.onreadystatechange = function() {
        // Nota: readyState Values
        // 0: request not initialized
        // 1: Server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is ready

        // Nota: Muestra los readystates 2, 3, 4 
        console.log('READYSTATE: ', xhr.readyState);

        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
        }
    }
    // >>>>>>>

    // Sends request
    xhr.send();
}