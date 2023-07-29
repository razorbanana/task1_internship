import { addNote} from "./notesService.js"
import { formatDate, generateId} from "./functionHelper.js"
import {renderActiveNoteRow } from "./tableRender.js"
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
        document.querySelector("#name").value =""
        document.querySelector("#content").value = ""
        console.log(newNote)
        addNote(newNote)
        renderActiveNoteRow(newNote)
        document.querySelector('#formDiv').style.display = "none"
    })
}

export { createButtonFunctionality, submitButtonFunctionality }