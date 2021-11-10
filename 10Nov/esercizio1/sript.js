function sendCredentials (username) {
    h1.innerHTML = userPage.firstElementChild.textContent.replace('[NOME]', username)
}



const userPage = document.querySelector ('.userPage') 
const modalEL = document.querySelector (".modal");
const userInputEl = document.querySelector('#user');
const passInputEl =document.querySelector('#pass');
const btnSendEl = document.querySelector('.btnSend');
const h1 = document.querySelector ('h1')


const user = {
    username: "",
    passward: ""
}


btnSendEl.addEventListener('click', (e) => {
       
    user.username = userInputEl.value;
    user.passward = passInputEl.value;

    

    userPage.style.display = "block";
    document.body.removeChild(modalEL); 
    console.log(user.username)

    sendCredentials(user.username);
   
});

setTimeout (()=> {
    
    modalEL.style.transform = 'translateY(0px)';
}, 2000);