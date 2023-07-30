import { getAllNotes } from "../service/notesService.js";

//функція для форматування дати в вигляд з прикладу
function formatDate(date) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

//витягнення дат з тексту
const extractDates = (inputString) => {

    const datePatterns = [/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}\b/g, /\b\d{2,4}[\/-]\d{1,2}[\/-]\d{1,2}\b/g,
        /\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2},\s\d{2,4}\b/g,
        /\b\d{1,2}\s(?:January|February|March|April|May|June|July|August|September|October|November|December)\s\d{2,4}\b/g,
        /\b\d{2,4}\s(?:January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2}\b/g
    ]

    const allDates = datePatterns.reduce((acc, currentValue) => {
        if (inputString.match(currentValue)) {
            return acc.concat(...inputString.match(currentValue))
        } else {
            return acc
        }
    }, [])
    return allDates.join(', ')
}

//генерація ідентифікатора
const generateId = () => {
    const allNotes = getAllNotes()
    return 1 + allNotes.reduce((acc, currentValue) => currentValue.id > acc ? currentValue.id : acc, 1)
}

//отримати об'єкт для побудови статистики
const summarizeCategories = () => {
    const allNotes = getAllNotes()
    return allNotes.reduce((accumulator, currentValue) => {
        if (accumulator.find(obj => obj.category === currentValue.category)) {
            if (currentValue.isArchieved) {
                return accumulator.map(obj => {
                    if (obj.category === currentValue.category) {
                        return {
                            ...obj, archieved: obj.archieved + 1
                        }
                    } else {
                        return obj
                    }
                })
            } else {
                return accumulator.map(obj => {
                    if (obj.category === currentValue.category) {
                        return {
                            ...obj, active: obj.active + 1
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
                    archieved: 1,
                    active: 0
                })
            } else {
                accumulator.push({
                    category: currentValue.category,
                    active: 1,
                    archieved: 0
                })
            }
        }
        return accumulator
    }, [])
}

export { formatDate, extractDates, generateId, summarizeCategories }