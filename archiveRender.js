import { extractDates } from "./functionHelper.js"
import { archiveNote, getArchievedNotesByCategory } from "./notesService.js"
import renderTables from "./tableRender.js"
import getIcons from "./icons.js"
const icons = getIcons()

const renderArchiveNoteRow = (note) => {
    const archivedNotes = document.querySelector('#archivedNotes>tbody')
    archivedNotes.innerHTML +=
        `<td>${icons[note.category]}</td>
        <td>${note.name}</td>
        <td>${note.created}</td>
        <td>${note.category}</td>
        <td><div class="contentDiv" id=${'content' + note.id}>${note.content.length > 13 ? note.content.slice(0, 13) + '...' : note.content.slice(0, note.content.length)}</div></td>
        <td>${extractDates(note.content)}</td>
        <td><div class="buttonDiv" id=${'unarchive' + note.id}>${icons["unarchive"]}</div></td>`
}

const clearArchiveTable = (notes) => {
    const archiveDiv = document.querySelector('#archiveDiv')
    if(notes.length === 0){
        archiveDiv.innerHTML = ''
    }else{
        archiveDiv.innerHTML = `
<table id="archivedNotes" class="notesTable">
    <tbody>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th><span class="material-symbols-outlined">
                    unarchive
                </span></th>
        </tr>
    </tbody>
</table>`
    }
    
    
}

const addUnarchiveEventListeners = (notes) => {
    notes.forEach(note => {
        const contentDiv = document.querySelector(`#${'unarchive' + note.id}`)
        contentDiv.addEventListener('click', (event) => {
            event.preventDefault()
            archiveNote(note.id)
            const newNotes = notes.filter(x => x.id !== note.id)
            renderAllByNotes(newNotes)
            renderTables()
        })
    })
}

const clickArchiveContentEventListener = (notes) => {
    const chosenDiv = document.querySelector(`#archivedContentDiv`)
    notes.forEach(note => {
        const unarchiveButton = document.querySelector(`#${'content' + note.id}`)
        unarchiveButton.addEventListener('click', (event) => {
            event.preventDefault()
            chosenDiv.innerHTML = note.content
        })
    })
}

const renderArchiveNotes = (notes) => {
    clearArchiveTable(notes)
    notes.forEach(note => {
        renderArchiveNoteRow(note)
    })
}

const renderAllByNotes = (notes) => {
    renderArchiveNotes(notes)
    addUnarchiveEventListeners(notes)
    clickArchiveContentEventListener(notes)
}

const renderArchive = (category) => {
    const notes = getArchievedNotesByCategory(category)
    renderAllByNotes(notes)
}

export default renderArchive