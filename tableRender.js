import { getAllNotArchievedNotes, getAllArchievedNotes, getAllNotes, addNote } from "./notesService.js"
import {extractDates} from "./functionHelper.js"

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
        <td>${icons["archive"]}</td>
        <td>${icons["delete"]}</td>`
}

const renderActiveNotes = () => {
    const allNotArchievedNotes = getAllNotArchievedNotes()
    allNotArchievedNotes.forEach(note => {
        renderActiveNoteRow(note)
    })
}

const renderNotesStats = () => {
    const archivedNotes = document.querySelector('#archivedNotes>tbody')

    const allArchievedNotes = getAllNotes()
    const archievedCategories = allArchievedNotes.reduce((accumulator, currentValue) => {
        if (accumulator.find(obj => obj.category === currentValue.category)) {
            if (currentValue.isArchieved) {
                accumulator = accumulator.map(obj => {
                    if (obj.category === currentValue.category) {
                        if (obj.hasOwnProperty("archieved")) {
                            return {
                                ...obj, archieved: obj.archieved + 1
                            }
                        } else {
                            return {
                                ...obj, archieved: 1
                            }
                        }
                    } else {
                        return obj
                    }
                })
            } else {
                accumulator = accumulator.map(obj => {
                    if (obj.category === currentValue.category) {
                        if (obj.hasOwnProperty("active")) {
                            return {
                                ...obj, active: obj.active + 1
                            }
                        } else {
                            return {
                                ...obj, active: 1
                            }
                        }
                    } else {
                        return obj
                    }
                })
            }
        } else {
            if (currentValue.isArchieved) {
                accumulator.push({
                    category: currentValue.category,
                    archieved: 1
                })
            } else {
                accumulator.push({
                    category: currentValue.category,
                    active: 1
                })
            }
        }
        return accumulator
    }, [])
    console.log(archievedCategories)
    archievedCategories.forEach(note => {
        archivedNotes.innerHTML = archivedNotes.innerHTML +
            `<td>${icons[note.category]}</td>
         <td>${note.category}</td>
         <td>${note.active || 0}</td>
         <td>${note.archieved || 0}</td>`
    })
}

export { renderActiveNotes, renderNotesStats, renderActiveNoteRow }