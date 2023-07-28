import { getAllNotArchievedNotes, getAllArchievedNotes, getAllNotes } from "./notesService.js"

const notArchivedNotes = document.querySelector('#notArchivedNotes>tbody')
const allNotArchievedNotes = getAllNotArchievedNotes()
allNotArchievedNotes.forEach(note => {
    notArchivedNotes.innerHTML = notArchivedNotes.innerHTML +
        `<td>${note.category}</td>
         <td>${note.name}</td>
         <td>${note.created}</td>
         <td>${note.category}</td>
         <td>${note.content}</td>
         <td>Dates</td>
         <td>change</td>
         <td>archive</td>
         <td>delete</td>`
})

const archivedNotes = document.querySelector('#archivedNotes>tbody')

const allArchievedNotes = getAllNotes()
const archievedCategories = allArchievedNotes.reduce((accumulator, currentValue) => {
    if (accumulator.find(obj => obj.category === currentValue.category)){
        if(currentValue.isArchieved){
            accumulator = accumulator.map(obj => {
                if (obj.category === currentValue.category){
                    if(obj.hasOwnProperty("archieved")){
                        return {
                            ...obj, archieved: obj.archieved+1
                        }
                    }else{
                        return {
                            ...obj, archieved: 1
                        }
                    }
                }else{
                    return obj
                }
            })
        }else{
            accumulator = accumulator.map(obj => {
                if (obj.category === currentValue.category){
                    if(obj.hasOwnProperty("active")){
                        return {
                            ...obj, active: obj.active+1
                        }
                    }else{
                        return {
                            ...obj, active: 1
                        }
                    }
                }else{
                    return obj
                }
            })
        }
    }else{
        if(currentValue.isArchieved){
            accumulator.push({
                category: currentValue.category,
                archieved: 1
            })
        } else{
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
        `<td>${note.category}</td>
         <td>${note.category}</td>
         <td>${note.active || 0}</td>
         <td>${note.archieved || 0}</td>`
})