import * as movieAPI from "./movies-api";

export async function getMovies() {
    try {
        const data = await movieAPI.index()
        return data
    }catch(err){
        console.log(err)
    }
}

export async function showMovie(id) {
    try {
        const data = await movieAPI.show(id)
        console.log(id)
        console.log(data)
        return data
    }catch(err){
        console.log(err)
    }
}