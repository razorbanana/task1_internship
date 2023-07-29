import { updateNote } from "./notesService.js";
import { formatDate } from "./functionHelper.js";
import renderTables from "./tableRender.js";

const submitEditFormButtonFunctionality = (id) => {
    const editButton = document.querySelector('#submitEditButton')
    const form = document.querySelector("#editNoteForm");
    editButton.addEventListener("click", (event) => {
        event.preventDefault()
        const formData = new FormData(form);
        console.log(formData)

        const newNote = {
            id: id,
            name: formData.get("name"),
            created: formatDate(new Date()),
            category: formData.get("category"),
            content: formData.get("content"),
            isArchieved: false
        }
        document.querySelector("#editedName").value = ""
        document.querySelector("#editedContent").value = ""
        updateNote(id, newNote)
        renderTables()
        document.querySelector('#editFormDiv').style.display = "none"
    })
}

const cancelEditFormButtonFunctionality = (id) => {
    const cancelButton = document.querySelector('#cancelEditButton')
    const form = document.querySelector("#editNoteForm");
    cancelButton.addEventListener("click", (event) => {
        event.preventDefault()
        document.querySelector("#editedName").value = ""
        document.querySelector("#editedContent").value = ""
        document.querySelector('#editFormDiv').style.display = "none"
    })
}

const editFormButtonFunctionality = (id) => {
    cancelEditFormButtonFunctionality(id)
    submitEditFormButtonFunctionality(id)
}

export default editFormButtonFunctionality