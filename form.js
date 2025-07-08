// Mi richiamo gli elementi della documentazione su cui dovrò prendere le informazioni date dai campi di testo e bottoni

const name = document.getElementById(`nameInput`)
const lastname = document.getElementById(`lastnameInput`)
const phone = document.getElementById(`phoneInput`)
const saveButton = document.getElementById(`saveButton`)
const deleteButton = document.getElementById(`deleteButton`)

// Prendo anche il riferimento alla chiave utlizzata per salvare le info dal localStorage

const memoryKey = `savedContacts`

// Identifico il form aggiungo un ascoltatore di evento che, al click/submit del bottone "save" crea così un nuovo contatto (grazie alla costruttore sopra)

// Creo una "class" (costruttore) che prenderà i valori inseriri per "salvarli" e riportarli dove ne ho bisogno

class Contact {
  constructor(_name, _lastname, _phone) {
    this.nameInput = _name
    this.lastnameInput = _lastname
    this.telephoneInput = _phone
  }
}

const createNewContactSlot = function (contact) {
  const contactsRow = document.getElementById("contactsRow")
  contactsRow.innerHTML += `
      <div class="col col-12 col-md-4 col-lg-3">
        <div class="card">
          <img src="https://placecats.com/300/300" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${contact.nameInput} ${contact.lastnameInput}</h5>
            <p class="card-text">${contact.telephoneInput}</p>
          </div>
        </div>
      </div>
    `
}

saveButton.addEventListener(`click`, function (e) {
  e.preventDefault()
  const newContact = new Contact(
    nameInput.value,
    lastnameInput.value,
    telephoneInput.value
  )

  let contactsArray = []
  if (localStorage.getItem(memoryKey)) {
    contactsArray = JSON.parse(localStorage.getItem(memoryKey))
  }
  contactsArray.push(newContact)
  localStorage.setItem(memoryKey, JSON.stringify(contactsArray))

  createNewContactSlot(newContact)
  alert(`Contact Saved`)
})
