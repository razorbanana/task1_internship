import { getAllNotArchievedNotes } from "./notesService.js"
import { extractDates, summarizeCategories } from "./functionHelper.js"
import addEventListeners from "./manageNotesButtons.js"
import getIcons from "./icons.js"
const icons = getIcons()

const renderActiveNoteRow = (note) => {
    const notArchivedNotes = document.querySelector('#notArchivedNotes>tbody')
    notArchivedNotes.innerHTML +=
        `<td>${icons[note.category]}</td>
        <td>${note.name}</td>
        <td>${note.created}</td>
        <td>${note.category}</td>
        <td><div class="contentDiv" id=${'content' + note.id}>${note.content.length > 13 ? note.content.slice(0, 13) + '...' : note.content.slice(0, note.content.length)}</div></td>
        <td>${extractDates(note.content)}</td>
        <td><div class="buttonDiv" id=${'edit' + note.id}>${icons["edit"]}</div></td>
        <td><div class="buttonDiv" id=${'archive' + note.id}>${icons["archive"]}</div></td>
        <td><div class="buttonDiv" id=${'delete' + note.id}>${icons["delete"]}</div></td>`

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
    
}

const renderNotesStats = () => {
    clearStatsTable()
    const notesStatsTable = document.querySelector('#notesStatsTable>tbody')

    const categoriesStats = summarizeCategories()
    categoriesStats.forEach(obj => {
        notesStatsTable.innerHTML = notesStatsTable.innerHTML +
            `<td>${icons[obj.category]}</td>
         <td><div class="contentDiv" id=${'category'+obj.category.slice(0,5)}>${obj.category}</div></td>
         <td>${obj.active || 0}</td>
         <td>${obj.archieved || 0}</td>`
    })
}

const renderTables = () => {
    renderActiveNotes()
    renderNotesStats()
    addEventListeners()
}

export default renderTables