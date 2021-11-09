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

/*   h1RenameBtn.addEventListener(
    "click",
    () => { 
            const h1TextPrompt = prompt ('inserisci il testo');   
            h1Tag.textContent = h1TextPrompt;}
,
  );*/

// by input

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

function hideModal() {
    modal.style.opacity = 0;
  
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 350);
  }
  
//   function redirectToGoogle() {
//     window.location.href = "http://google.com";
//   }

function loadModal() {document.body.removeChild(modal);
    setTimeout(() => {
        document.body.append(modal);;
      }, 10000);}
  
  const modal = document.querySelector(".modal");
  const acceptBtn = document.querySelector("#btn-accept");
  const denyBtn = document.querySelector("#btn-deny");
  
  acceptBtn.addEventListener("click", hideModal, { once: true });
//   denyBtn.addEventListener("click", redirectToGoogle, { once: true });

  document.addEventListener("DOMContentLoaded", loadModal)
  
  // ------------------------ Modale fine ------------------------
  