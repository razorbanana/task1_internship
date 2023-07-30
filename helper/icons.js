//масив з компонентами іконок
const icons = {
    Task: `<div class="circled-icons"><span class="material-symbols-outlined ">
    shopping_cart
    </span></div>`,
    Quote: `<div class="circled-icons"><span class="material-symbols-outlined ">
    format_quote
    </span></div>`,
    'Random Thought': `<div class="circled-icons"><span class="material-symbols-outlined ">
    psychology
    </span></div>`,
    Idea: `<div class="circled-icons"><span class="material-symbols-outlined">
    lightbulb
    </span></div>`,
    edit: `<span class="material-symbols-outlined">
    edit
    </span>`,
    unarchive: `<span class="material-symbols-outlined">
    unarchive
    </span>`,
    archive: `<span class="material-symbols-outlined">
    archive
    </span>`,
    delete: `<span class="material-symbols-outlined">
    delete
    </span>`
}

//отримати іконки
const getIcons = () => {
    return icons
}

export default getIcons