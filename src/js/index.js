// Global app controller
// 
// https://www.food2fork.com/api/search
import axios from 'axios';
async function getResults(query) {
    try {
        const key = '1992bf39ce325f0e2fe71135bd717e7d';
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`)
        const recipes = res.data.recipes
        console.log(recipes)
    }
    catch(error) {
        alert(error)
    }
}
getResults('pizza');  