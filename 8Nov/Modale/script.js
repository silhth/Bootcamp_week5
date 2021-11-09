// funzioni

const renameH1 = (event) => h1Tag.textContent = h1Text.value;


const addListItems = (event) =>{
    const addLi = document.createElement("li");
    ulPadre.appendChild(addLi);
    addLi.textContent = liText.value;
    liText.value =""
    }



// code

const h1RenameBtn = document.querySelector(".button-name");
const h1Tag = document.querySelector ("h1");
const h1Text = document.querySelector (".testo");


// by prompt


h1RenameBtn.addEventListener("click", renameH1);

// esercizio 2
  
const ulPadre = document.querySelector ("ul")
const liBtn=document.querySelector (".button-add-li")
const liText = document.querySelector (".testo-li")


liBtn.addEventListener("click",addListItems);

liText.addEventListener("keypress", (event) => 
            {if (event.key === "Enter")  {
                addListItems()
             }
            }
        );


// ------------------------ Modale comincia da qui ------------------------

const body = document.querySelector ('body')
const main = document.querySelector ('main')
const modal = document.querySelector(".modal");
const acceptBtn = document.querySelector("#btn-accept");
const denyBtn = document.querySelector("#btn-deny");

// const addNewModal = () =>{
//   let NewModal =document.createElement("div");
//   NewModal.textContent = p.value}

let newModal = document.createElement("div")
const newContent = document.createTextNode("wrong");

function threatenModal(contenitor){
  let img = document.createElement("img");
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  toggleClass(img, 'modal-img')
  toggleClass(h3, 'modal-h3')
  toggleClass(p, 'modal-p')
  img.setAttribute('src', "https://img.icons8.com/ios/50/000000/harambe-the-gorilla--v1.png");
  h3.textContent = `Sbagliato`;
  p.textContent = `Le scimmie ti attaccheanno`;
  contenitor.appendChild(img);
  contenitor.appendChild(h3);
  contenitor.appendChild(p);
}

function hideModal() {
    modal.style.opacity = 0;
  
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 350);
  }
  
const toggleClass = (target, newClass) => {
    target.classList.toggle(newClass);
  }

function removeElement (element) {
  document.body.removeChild(element)
  }

function addElement (element) {
    setTimeout(() => {
      document.body.append(element);;
    }, 5000);}


function loadModal() {
    document.body.removeChild(modal);
    setTimeout(() => {
        document.body.append(modal);;
      }, 1000);}

  document.addEventListener("DOMContentLoaded", loadModal)
  

  
  acceptBtn.addEventListener("click", hideModal, { once: true });



  denyBtn.addEventListener("click", ()=>{
    removeElement(main);
    removeElement(modal);
    addElement(newModal);
    toggleClass(newModal, 'modal')
    threatenModal(newModal);

  });




  // ------------------------ Modale fine ------------------------
  