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

const extractDates = (inputString) => {
    
    const datePatterns = [/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}\b/g, /\b\d{2,4}[\/-]\d{1,2}[\/-]\d{1,2}\b/g,
     /\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2},\s\d{2,4}\b/g,
     /\b\d{1,2}\s(?:January|February|March|April|May|June|July|August|September|October|November|December)\s\d{2,4}\b/g,
     /\b\d{2,4}\s(?:January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2}\b/g
]


    const allDates = datePatterns.reduce((acc, currentValue) => {
        if(inputString.match(currentValue)){
            console.log(inputString.match(currentValue))
            return acc.concat(...inputString.match(currentValue))
        }else{
            return acc
        }
    }, [])
    console.log(inputString, allDates)
    return allDates.join(', ')
}

export { formatDate, extractDates }