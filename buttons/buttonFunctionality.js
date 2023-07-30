import { addNote } from "../service/notesService.js"
import { formatDate, generateId } from "../helper/functionHelper.js"
import renderTables from "../render/tableRender.js"

//клікання кнопки для форми створення нотатки
const createButtonFunctionality = () => {
    const createButton = document.querySelector('#createButton')
    createButton.addEventListener("click", (event) => {
        event.preventDefault()
        document.querySelector('#createFormDiv').style.display = "flex"
    })
}

//кнопка підтвердження створення нотатки
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

//закриття форми створення нотатки
const cancelButtonFunctionality = () => {
    const cancelButton = document.querySelector('#cancelButton')
    cancelButton.addEventListener("click", (event) => {
        event.preventDefault()
        document.querySelector("#name").value = ""
        document.querySelector("#content").value = ""
        document.querySelector('#createFormDiv').style.display = "none"
    })
}

//вся функціональність створення нотатки
const buttonsFunctionality = () => {
    createButtonFunctionality()
    submitButtonFunctionality()
    cancelButtonFunctionality()
}

export default buttonsFunctionality