// Nota: Script que utiliza la API de Github
document.getElementById('button').addEventListener('click', loadUsers);

// Load Github Users
function loadUsers() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function() {
        if(this.status == 200){
            let users = JSON.parse(this.responseText);

            console.log(users);

            let output = '';

            for(let i in users){
                output += 
                    '<div class="user">' + 
                        '<img src="' + users[i].avatar_url +'" width="70" height="70">' +
                        '<ul>' + 
                            '<li>ID: '+ users[i].id +'</li>' +
                            '<li>ID: '+ users[i].login +'</li>' +
                        '</ul>' +
                    '</div>'
            }
            document.getElementById('users').innerHTML = output;
        }
    }

    xhr.send();
    

    // for(var i in users){
    //     output += '<ul>' +
    //             '<li>ID:'+  users[i].id + '</li>'+
    //             '<li>Name:'+  users[i].name + '</li>'+
    //             '<li>Email:'+  users[i].email + '</li>'+
    //             '</ul>';
    // }
}

