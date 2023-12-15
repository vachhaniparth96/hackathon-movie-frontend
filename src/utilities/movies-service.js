import * as movieAPI from "./movies-api";

export async function getMovies() {
    try {
        const data = await movieAPI.index()
        console.log(data)
        console.log("service", data)
        return data
    }catch(err){
        console.log(err)
    }
}
