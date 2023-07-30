import { extractDates } from "../helper/functionHelper.js"
import { archiveNote, getArchievedNotesByCategory } from "../service/notesService.js"
import renderTables from "./tableRender.js"
import getIcons from "../helper/icons.js"
const icons = getIcons()

//рендер одного рядка таблиці з архівними нотатками
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

//очищення таблиці з архівними нотатками
const clearArchiveTable = (notes) => {
    const archiveDiv = document.querySelector('#archiveDiv')
    const chosenDiv = document.querySelector(`#archivedContentDiv`)
    //якщо не вибрана категорія, то таблиці немає, вивід відповідного повідомлення
    if(notes.length === 0){
        archiveDiv.innerHTML = ''
        chosenDiv.innerHTML = 'Click category to show archived notes'
    }else{
        //якщо є архівні нотатки, то підказка для перегляду вмісту
        chosenDiv.innerHTML = 'Click content cell of archive note to read it!'
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

//функіонал для кнопки розархівації
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

//он клік для контенту для його виведення
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

//рендер архівних нотаток
const renderArchiveNotes = (notes) => {
    clearArchiveTable(notes)
    notes.forEach(note => {
        renderArchiveNoteRow(note)
    })
}

//рендер нотаток і додавання функціоналу
const renderAllByNotes = (notes) => {
    renderArchiveNotes(notes)
    addUnarchiveEventListeners(notes)
    clickArchiveContentEventListener(notes)
}

//рендер за категорією
const renderArchive = (category) => {
    const chosenDiv = document.querySelector(`#archivedContentDiv`)
    chosenDiv.innerHTML = ""
    const notes = getArchievedNotesByCategory(category)
    renderAllByNotes(notes)
}

export default renderArchive