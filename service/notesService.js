//нотатки зберігаються в масиві
let allNotes = [{
    id: 1,
    name: 'note1',
    created: 'April 20, 2021',
    category: 'Quote',
    content: 'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
    isArchieved: false
},
{
    id: 2,
    name: 'note2',
    created: 'April 20, 2021',
    category: 'Idea',
    content: 'April 20, 2021 and April 21, 2021',
    isArchieved: false
},
{
    id: 3,
    name: 'note3',
    created: 'April 20, 2021',
    category: 'Idea',
    content: 'content3',
    isArchieved: true
},
{
    id: 4,
    name: 'note4',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'content4',
    isArchieved: false
},
{
    id: 5,
    name: 'note5',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'content5',
    isArchieved: true
},
{
    id: 6,
    name: 'note6',
    created: 'April 20, 2021',
    category: 'Random Thought',
    content: 'content6',
    isArchieved: false
}]

//витягнути активні нотатки
const getAllNotArchievedNotes = () => {
    try {
        return allNotes.filter(note => note.isArchieved === false);
    } catch (error) {
        console.error("Error in getAllNotArchievedNotes:", error);
        return [];
    }
};

//витягнути архівовані нотатки
const getAllArchievedNotes = () => {
    try {
        return allNotes.filter(note => note.isArchieved === true);
    } catch (error) {
        console.error("Error in getAllArchievedNotes:", error);
        return [];
    }
};

//витягнути всі нотатки
const getAllNotes = () => {
    try {
        return allNotes;
    } catch (error) {
        console.error("Error in getAllNotes:", error);
        return [];
    }
};

//додати нотатку
const addNote = (data) => {
    try {
        allNotes.push(data);
    } catch (error) {
        console.error("Error in addNote:", error);
    }
};

//видалити нотатку
const deleteNote = (id) => {
    try {
        allNotes = allNotes.filter(note => note.id !== id);
    } catch (error) {
        console.error("Error in deleteNote:", error);
    }
};

//обновити дані нотатки
const updateNote = (id, data) => {
    try {
        allNotes = allNotes.map(note => {
            if (note.id === id) {
                return data;
            } else {
                return note;
            }
        });
    } catch (error) {
        console.error("Error in updateNote:", error);
    }
};

//зміни стан архівації нотатки
const archiveNote = (id) => {
    try {
        allNotes = allNotes.map(note => {
            if (note.id === id) {
                return { ...note, isArchieved: !note.isArchieved };
            } else {
                return note;
            }
        });
    } catch (error) {
        console.error("Error in archiveNote:", error);
    }
};

//витягнути архівовані нотатки за категорією
const getArchievedNotesByCategory = (category) => {
    try {
        return allNotes.filter(note => note.isArchieved === true && note.category === category);
    } catch (error) {
        console.error("Error in getArchievedNotesByCategory:", error);
        return [];
    }
};

export { getAllNotArchievedNotes, archiveNote, getAllArchievedNotes, getAllNotes, addNote, deleteNote, updateNote, getArchievedNotesByCategory }