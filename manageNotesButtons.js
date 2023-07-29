import { getAllNotArchievedNotes } from "./notesService.js"
import { archiveNote, deleteNote } from "./notesService.js"
import renderTables from "./tableRender.js"

const addArchiveEventListeners = () => {
    const allNotArchievedNotes = getAllNotArchievedNotes()
    allNotArchievedNotes.forEach(note => {
        const archiveButton = document.querySelector(`#${'archive' + note.id}`)
        archiveButton.addEventListener("click", (event) => {
            event.preventDefault()
            archiveNote(note.id)
            renderTables()
        })
    })
}

const addDeleteEventListeners = () => {
    const allNotArchievedNotes = getAllNotArchievedNotes()
    allNotArchievedNotes.forEach(note => {
        const deleteButton = document.querySelector(`#${'delete' + note.id}`)
        deleteButton.addEventListener("click", (event) => {
            event.preventDefault()
            deleteNote(note.id)
            renderTables()
        })
    })
}

const addEventListeners = () => {
    addArchiveEventListeners()
    addDeleteEventListeners()
}

export default addEventListeners