import { getAllNotArchievedNotes } from "./notesService.js"
import { archiveNote } from "./notesService.js"
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

export {addArchiveEventListeners}