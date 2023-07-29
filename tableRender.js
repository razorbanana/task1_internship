import { getAllNotArchievedNotes, getAllArchievedNotes, getAllNotes, addNote, archiveNote } from "./notesService.js"
import {extractDates, summarizeCategories} from "./functionHelper.js"

const icons = {
    Task: `<div class="circled-icons"><span class="material-symbols-outlined ">
    shopping_cart
    </span></div>`,
    Quote:`<div class="circled-icons"><span class="material-symbols-outlined ">
    format_quote
    </span></div>`,
    'Random Thought':`<div class="circled-icons"><span class="material-symbols-outlined ">
    psychology
    </span></div>`,
    Idea: `<div class="circled-icons"><span class="material-symbols-outlined">
    lightbulb
    </span></div>`,
    edit: `<span class="material-symbols-outlined">
    edit
    </span>`,
    archive: `<span class="material-symbols-outlined">
    archive
    </span>`,
    delete: `<span class="material-symbols-outlined">
    delete
    </span>`
}

const renderActiveNoteRow = (note) => {
    const notArchivedNotes = document.querySelector('#notArchivedNotes>tbody')
    notArchivedNotes.innerHTML = notArchivedNotes.innerHTML +
        `<td>${icons[note.category]}</td>
        <td>${note.name}</td>
        <td>${note.created}</td>
        <td>${note.category}</td>
        <td>${note.content.length>13?note.content.slice(0,13) + '...':note.content.slice(0,note.content.length)}</td>
        <td>${extractDates(note.content)}</td>
        <td>${icons["edit"]}</td>
        <td><div class="archiveDiv" id=${'archive'+note.id}>${icons["archive"]}</div></td>
        <td>${icons["delete"]}</td>`
}


const clearActiveTable = () => {
    const notArchivedNotes = document.querySelector('#notArchivedNotes>tbody')
    notArchivedNotes.innerHTML = `<tr>
    <th></th>
    <th>Name</th>
    <th>Created</th>
    <th>Category</th>
    <th>Content</th>
    <th>Dates</th>
    <th><span class="material-symbols-outlined">
            edit
        </span></th>
    <th><span class="material-symbols-outlined">
        archive
        </span></th>
    <th><span class="material-symbols-outlined">
        delete
        </span></th>
</tr>`
}

const clearStatsTable = () => {
    const notArchivedNotes = document.querySelector('#notesStatsTable>tbody')
    notArchivedNotes.innerHTML = `<tr>
    <th></th>
    <th>Note Category</th>
    <th>Active</th>
    <th>Archived</th>
</tr>`
}

const renderActiveNotes = () => {
    clearActiveTable()
    const allNotArchievedNotes = getAllNotArchievedNotes()
    allNotArchievedNotes.forEach(note => {
        renderActiveNoteRow(note)
    })
    allNotArchievedNotes.forEach(note => {
        const archiveButton = document.querySelector(`#${'archive'+note.id}`)
        archiveButton.addEventListener("click", (event) => {
            event.preventDefault()
            archiveNote(note.id)
            renderActiveNotes()
            renderNotesStats()
        })
    })
    
}

const renderNotesStats = () => {
    clearStatsTable()
    const notesStatsTable = document.querySelector('#notesStatsTable>tbody')

    const allNotes = getAllNotes()
    const categoriesStats = summarizeCategories(allNotes)
    categoriesStats.forEach(note => {
        notesStatsTable.innerHTML = notesStatsTable.innerHTML +
            `<td>${icons[note.category]}</td>
         <td>${note.category}</td>
         <td>${note.active || 0}</td>
         <td>${note.archieved || 0}</td>`
    })
}

export { renderActiveNotes, renderNotesStats, renderActiveNoteRow }