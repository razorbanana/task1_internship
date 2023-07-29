const allNotes = [{
    name: 'stas1',
    created: 'April 20, 2021',
    category: 'Quote',
    content: 'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
    isArchieved: false
},
{
    name: 'stas2',
    created: 'April 20, 2021',
    category: 'Idea',
    content: 'April 20, 2021 and April 21, 2021',
    isArchieved: false
},
{
    name: 'stas3',
    created: 'April 20, 2021',
    category: 'Idea',
    content: 'content',
    isArchieved: true
},
{
    name: 'stas4',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'content',
    isArchieved: false
},
{
    name: 'stas5',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'content',
    isArchieved: true
},
{
    name: 'stas5',
    created: 'April 20, 2021',
    category: 'Random Thought',
    content: 'content',
    isArchieved: true
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

export {getAllNotArchievedNotes, getAllArchievedNotes, getAllNotes, addNote}