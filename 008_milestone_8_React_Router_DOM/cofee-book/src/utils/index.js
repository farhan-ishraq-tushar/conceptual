// import toast from "react-hot-toast"

import toast from "react-hot-toast"

// get all coffee from local storage
const getAllFavorites =()=>{
    const all = localStorage.getItem('favorites')
    if (all) {
        const favorites = JSON.parse(all)
        return favorites
    }else{
        return []
    }
}

// add a coffee to local storage
const addFavorite = coffee =>{
    // get all previously save data
    console.log(coffee)
    const favorites = getAllFavorites()
    const isExist = favorites.find(item => item.id == coffee.id)
    if(isExist) return toast.error('Already exist')
        
    favorites.push(coffee)
    
    // sets coffee data in browser as array like object
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Successfully added')
    // alert('Test successful')
}

export{addFavorite, getAllFavorites}

// remove a coffee from local storage