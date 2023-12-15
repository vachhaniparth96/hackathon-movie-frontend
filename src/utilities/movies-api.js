import config from "../config"

export async function index() {
    const res = await fetch(config.BASE_URL, {method: "GET"})
    if (res.ok){
        return res.json()
    } else {
        throw new Error("Invalid Request: ", res.statusText)
        // console.log("something is wrong")
    }
}

export async function show(id) {
    const url = `${config.BASE_URL}/${id}`
    console.log(url)
    const res = await fetch(url, {method: "GET"})

    if(res.ok) {
        return res.json()
    } else {
        throw new Error("Something went wrong: ", res.statusText)
    }
}