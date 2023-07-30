import { getAllNotArchievedNotes,archiveNote, deleteNote  } from "../service/notesService.js"
import renderTables from "../render/tableRender.js"
import editFormButtonFunctionality from "../buttons/editTableButtons.js"
import { summarizeCategories } from "../helper/functionHelper.js"
import renderArchive from "../render/archiveRender.js"

//додати функціонал для кнопок архівації
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

//додати функціонал для кнопок видалення
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

//додати функціонал для кнопок редагування
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
            //форма для редагування
            editFormButtonFunctionality(note.id)
        })
    })
}

//додати функціонал для клікання контенту
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

//додати функціонал для клікання категорії
const clickCategoryEventListener = () => {
    const summarizedCategories = summarizeCategories()
    summarizedCategories.forEach(obj => {
        const categoryDiv = document.querySelector(`#${'category' + obj.category.slice(0, 5)}`)
        categoryDiv.addEventListener("click", (event) => {
            event.preventDefault()
            renderArchive(obj.category)
        })

    })
}

//весь функціонал
const addEventListeners = () => {
    addArchiveEventListeners()
    addDeleteEventListeners()
    addEditEventListeners()
    clickContentEventListener()
    clickCategoryEventListener()
}

export default addEventListeners