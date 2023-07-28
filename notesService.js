const allNotes = [{
    name: 'stas1',
    created: '20/12/2003',
    category: 'idea',
    content: 'content',
    isArchieved: false
},
{
    name: 'stas2',
    created: '20/12/2003',
    category: 'idea',
    content: 'content',
    isArchieved: false
},
{
    name: 'stas3',
    created: '20/12/2003',
    category: 'idea',
    content: 'content',
    isArchieved: true
},
{
    name: 'stas4',
    created: '20/12/2003',
    category: 'task',
    content: 'content',
    isArchieved: false
},
{
    name: 'stas5',
    created: '20/12/2003',
    category: 'task',
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

export {getAllNotArchievedNotes, getAllArchievedNotes, getAllNotes}