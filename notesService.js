let allNotes = [{
    id: 1,
    name: 'stas1',
    created: 'April 20, 2021',
    category: 'Quote',
    content: 'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
    isArchieved: false
},
{
    id: 2,
    name: 'stas2',
    created: 'April 20, 2021',
    category: 'Idea',
    content: 'April 20, 2021 and April 21, 2021',
    isArchieved: false
},
{
    id: 3,
    name: 'stas3',
    created: 'April 20, 2021',
    category: 'Idea',
    content: 'content',
    isArchieved: true
},
{
    id: 4,
    name: 'stas4',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'content',
    isArchieved: false
},
{
    id: 5,
    name: 'stas5',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'content',
    isArchieved: true
},
{
    id: 6,
    name: 'stas6',
    created: 'April 20, 2021',
    category: 'Random Thought',
    content: 'content',
    isArchieved: false
}]

const getAllNotArchievedNotes = () => {
    return allNotes.filter(note => note.isArchieved === false)
}

const getAllArchievedNotes = () => {
    return allNotes.filter(note => note.isArchieved === true)
}

const getAllNotes = () => {
    return allNotes
}

const addNote = (data) => {
    allNotes.push(data)
}

const deleteNote = (id) => {
    allNotes = allNotes.filter(note => note.id !== id)
}

const updateNote = (id, data) => {
    allNotes = allNotes.map(note => {
        if (note.id === id) {
            return data
        } else {
            return note
        }
    })
}

const archiveNote = (id) => {
    allNotes = allNotes.map(note => {
        if (note.id === id) {
            return { ...note, isArchieved: !note.isArchieved }
        } else {
            return note
        }
    })
}

const getArchievedNotesByCategory = (category) => {
    return allNotes.filter(note => note.isArchieved===true && note.category === category)
}

export { getAllNotArchievedNotes, archiveNote, getAllArchievedNotes, getAllNotes, addNote, deleteNote, updateNote, getArchievedNotesByCategory }