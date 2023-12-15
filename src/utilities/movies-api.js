import config from "../config"

export async function index() {
    const res = await fetch(config.BASE_URL, {method: "GET"})
    console.log(res)
    
    if (res.ok){
        return res.json()
    } else {
        throw new Error("Invalid Request: ", res.statusText)
        // console.log("something is wrong")
    }
}
