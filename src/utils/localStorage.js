const getStoredWishlistBooks = () => {
    const storedItem = localStorage.getItem("wishlist-books");
    if(storedItem) {
        return JSON.parse(storedItem);
    }
    return [];
}


const saveWishlistBooks = id => {
    const storedItems = getStoredWishlistBooks();
    const exists = storedItems.find(wishlistId => wishlistId === id);
    if(!exists){
        storedItems.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storedItems))
    }
}

export {saveWishlistBooks, getStoredWishlistBooks}