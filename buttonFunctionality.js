import { addNote } from "./notesService.js"
import { formatDate, generateId } from "./functionHelper.js"
import renderTables from "./tableRender.js"

const createButtonFunctionality = () => {
    const createButton = document.querySelector('#createButton')
    createButton.addEventListener("click", (event) => {
        event.preventDefault()
        document.querySelector('#createFormDiv').style.display = "flex"
    })
}

const submitButtonFunctionality = () => {
    const submitButton = document.querySelector('#submitButton')
    const form = document.querySelector("#createNoteForm");
    submitButton.addEventListener("click", (event) => {
        event.preventDefault()
        const formData = new FormData(form);
        console.log(formData)

        const newNote = {
            id: generateId(),
            name: formData.get("name"),
            created: formatDate(new Date()),
            category: formData.get("category"),
            content: formData.get("content"),
            isArchieved: false
        }
        document.querySelector("#name").value = ""
        document.querySelector("#content").value = ""
        console.log(newNote)
        addNote(newNote)
        renderTables()
        document.querySelector('#createFormDiv').style.display = "none"
    })
}

const cancelButtonFunctionality = () => {
    const cancelButton = document.querySelector('#cancelButton')
    cancelButton.addEventListener("click", (event) => {
        event.preventDefault()
        document.querySelector("#name").value = ""
        document.querySelector("#content").value = ""
        document.querySelector('#createFormDiv').style.display = "none"
    })
}

const buttonsFunctionality = () => {
    createButtonFunctionality()
    submitButtonFunctionality()
    cancelButtonFunctionality()
}

export default buttonsFunctionality