import { getAllNotArchievedNotes } from "../service/notesService.js"
import { extractDates, summarizeCategories } from "../helper/functionHelper.js"
import addEventListeners from "../buttons/manageNotesButtons.js"
import getIcons from "../helper/icons.js"
const icons = getIcons()

//рендер одного рядка таблиці з активними нотатками
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

//очищення таблиці з активними нотатками
const clearActiveTable = (allNotArchievedNotes) => {
    const notArchivedNotes = document.querySelector('#notArchivedNotes')
    const chosenDiv = document.querySelector(`#chosenContent`)
    //якщо немає активних нотаток, то таблиці немає, вивід відповідного повідомлення 
    if (allNotArchievedNotes.length === 0) {
        notArchivedNotes.innerHTML = ""
        chosenDiv.innerHTML="There are no active notes"
    } else {
        //якщо є активні нотатки, то підказка для перегляду вмісту
        chosenDiv.innerHTML="Click content cell to read it!"
        notArchivedNotes.innerHTML = `<tbody>
    <tr>
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
    </tr>
</tbody>`
    }

}

//очищення таблиці з статистикою
const clearStatsTable = () => {
    const notArchivedNotes = document.querySelector('#notesStatsTable>tbody')
    notArchivedNotes.innerHTML = `<tr>
    <th></th>
    <th>Note Category</th>
    <th>Active</th>
    <th>Archived</th>
</tr>`
}

//рендер активних нотаток
const renderActiveNotes = () => {
    const allNotArchievedNotes = getAllNotArchievedNotes()
    clearActiveTable(allNotArchievedNotes)
    allNotArchievedNotes.forEach(note => {
        renderActiveNoteRow(note)
    })

}

//рендер статистики
const renderNotesStats = () => {
    clearStatsTable()
    const notesStatsTable = document.querySelector('#notesStatsTable>tbody')

    const categoriesStats = summarizeCategories()
    categoriesStats.forEach(obj => {
        notesStatsTable.innerHTML = notesStatsTable.innerHTML +
            `<td>${icons[obj.category]}</td>
         <td><div class="contentDiv" id=${'category' + obj.category.slice(0, 5)}>${obj.category}</div></td>
         <td>${obj.active || 0}</td>
         <td>${obj.archieved || 0}</td>`
    })
}

//рендер таблиць з активними нотатками та статистикою, додавання функціоналу
const renderTables = () => {
    renderActiveNotes()
    renderNotesStats()
    addEventListeners()
}

export default renderTables