

const getStoredBooks = (key) => {
    const storedItem = localStorage.getItem(key);
    if(storedItem) {
        return JSON.parse(storedItem);
    }
    return [];
}


const saveBooks = (id, key) => {
    const storedItems = getStoredBooks(key);
    const exists = storedItems.find(bookId => bookId === id);
    if(!exists){
        storedItems.push(id);
        localStorage.setItem(key, JSON.stringify(storedItems))
    }
}

export {saveBooks, getStoredBooks}