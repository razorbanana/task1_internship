import { getAllNotArchievedNotes,archiveNote, deleteNote, getArchievedNotesByCategory  } from "./notesService.js"
import renderTables from "./tableRender.js"
import editFormButtonFunctionality from "./editTableButtons.js"
import { summarizeCategories } from "./functionHelper.js"
import renderArchive from "./archiveRender.js"

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

const addEditEventListeners = () => {
    const allNotArchievedNotes = getAllNotArchievedNotes()
    allNotArchievedNotes.forEach(note => {
        const editButton = document.querySelector(`#${'edit' + note.id}`)
        editButton.addEventListener("click", (event) => {
            event.preventDefault()
            document.querySelector("#editedName").value = note.name
            document.querySelector("#editedContent").value = note.content
            document.querySelector("#editedCategory").value = note.category

            document.querySelector('#editFormDiv').style.display = "flex"
            editFormButtonFunctionality(note.id)
        })
    })
}

const clickContentEventListener = () => {
    const allNotArchievedNotes = getAllNotArchievedNotes()
    const chosenDiv = document.querySelector(`#chosenContent`)
    allNotArchievedNotes.forEach(note => {
        const contentDiv = document.querySelector(`#${'content' + note.id}`)
        contentDiv.addEventListener("click", (event) => {
            event.preventDefault()
            chosenDiv.innerHTML = note.content
        })
    })
}

const clickCategoryEventListener = () => {
    const summarizedCategories = summarizeCategories()
    console.log(summarizedCategories)
    summarizedCategories.forEach(obj => {
        const categoryDiv = document.querySelector(`#${'category' + obj.category.slice(0, 5)}`)
        categoryDiv.addEventListener("click", (event) => {
            event.preventDefault()
            renderArchive(obj.category)
        })

    })
}

const addEventListeners = () => {
    addArchiveEventListeners()
    addDeleteEventListeners()
    addEditEventListeners()
    clickContentEventListener()
    clickCategoryEventListener()
}

export default addEventListeners