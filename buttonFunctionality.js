import { addNote, archiveNote } from "./notesService.js"
import { formatDate, generateId } from "./functionHelper.js"
import renderTables from "./tableRender.js"
import {addArchiveEventListeners} from "./manageNotesButtons.js"
const createButtonFunctionality = () => {
    const createButton = document.querySelector('#createButton')
    createButton.addEventListener("click", (event) => {
        event.preventDefault()
        document.querySelector('#formDiv').style.display = "flex"
    })
}

const submitButtonFunctionality = () => {
    const submitButton = document.querySelector('#submitButton')
    const form = document.querySelector("#newNoteForm");
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
        document.querySelector('#formDiv').style.display = "none"
    })
}

const cancelButtonFunctionality = () => {
    const cancelButton = document.querySelector('#cancelButton')
    const form = document.querySelector("#newNoteForm");
    cancelButton.addEventListener("click", (event) => {
        event.preventDefault()
        document.querySelector("#name").value = ""
        document.querySelector("#content").value = ""
        document.querySelector('#formDiv').style.display = "none"
    })
}

const buttonsFunctionality = () => {
    createButtonFunctionality()
    submitButtonFunctionality()
    cancelButtonFunctionality()
}

export default buttonsFunctionality