import { CATEGORIES_FETCH_SUCCESS, CATEGORY_FETCH_SUCCESS, POSTS_FETCH_SUCCESS, POST_FETCH_SUCCESS } from "./actionTypes"

// Action Login
export function handleLogin(form) {
    return async function (dispatch) {
        try {
            // console.log(form)
            const res = await fetch("https://api-hck.sesber.com/login", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(form)
            })

            const data = await res.json()

            if (!res.ok) throw (data)

            // console.log(res, "success===")

            localStorage.setItem('access_token', data.access_token)

            return { success: true, data: { message: "Login success!" } }
        } catch (error) {
            // console.log(error)
            return { success: false, error }
        }
    }
}


// Action Add User
export function addUser(form) {
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token
            // console.log(form)
            const res = await fetch("https://api-hck.sesber.com/add-user", { method: "POST", headers: { "Content-Type": "application/json", access_token }, body: JSON.stringify(form) })

            const data = await res.json()

            if (!res.ok) throw (data)

            // console.log(data, "Ac")

            return { success: true, data }
        } catch (error) {
            // console.log(error)
            return { success: false, error }
        }
    }
}

// Action Post
export function fetchPosts() {
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token
            const res = await fetch("https://api-hck.sesber.com/posts", { method: "GET", headers: { access_token } })

            const data = await res.json()

            if (!res.ok) throw (data)

            dispatch({ type: POSTS_FETCH_SUCCESS, payload: data })
        } catch (error) {
            console.log(error)
            if (error.message == "Invalid token") {
                localStorage.removeItem('access_token')
            }
            // return error
        }
    }
}

export function fetchPost(id) {
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token
            const res = await fetch(`https://api-hck.sesber.com/posts/${id}`, { method: "GET", headers: { access_token } })

            let data = await res.json()

            if (!res.ok) throw data

            dispatch({ type: POST_FETCH_SUCCESS, payload: data })
        } catch (error) {
            console.log(error)
            // return error
        }
    }
}

export function storePost(form) {
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token
            const res = await fetch("https://api-hck.sesber.com/posts", { method: "POST", headers: { "Content-Type": "application/json", access_token }, body: JSON.stringify(form) })

            const data = await res.json()

            if (!res.ok) throw data

            return { success: true, data }
        } catch (error) {
            console.log(error)
            return { success: false, error }
        }
    }
}

export function updatePost(slug, form) {
    // console.log(form)
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token
            const res = await fetch(`https://api-hck.sesber.com/posts/${slug}`, { method: "PUT", headers: { "Content-Type": "application/json", access_token }, body: JSON.stringify(form) })

            const data = await res.json()

            if (!res.ok) throw data

            return { success: true, data }
        } catch (error) {
            console.log(error)
            return { success: false, error }
        }
    }
}

export function deletePost(id) {
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token
            const res = await fetch(`https://api-hck.sesber.com/posts/${id}`, { method: "DELETE", headers: { access_token } })

            const data = await res.json()

            if (!res.ok) throw data

            return { success: true, data }
        } catch (error) {
            // console.log(error)
            return { success: false, error }
        }
    }
}

// Action Category
export function fetchCategories() {
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token
            const res = await fetch("https://api-hck.sesber.com/categories", { method: "GET", headers: { access_token } })

            const data = await res.json()
            // console.log(data)

            if (!res.ok) throw data

            dispatch({ type: CATEGORIES_FETCH_SUCCESS, payload: data })
        } catch (error) {
            console.log(error)
            if (error.message == "Invalid token") {
                localStorage.removeItem('access_token')
            }
        }
    }
}

export function storeCategory(form) {
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token
            const res = await fetch("https://api-hck.sesber.com/categories", { method: "POST", headers: { "Content-Type": "application/json", access_token }, body: JSON.stringify(form) })
            const data = await res.json()

            if (!res.ok) throw error

            return { success: true, data }
        } catch (error) {
            return { success: false, error }
            // console.log(error)
        }
    }
}

export function showCategory(id) {
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token
            const res = await fetch(`https://api-hck.sesber.com/categories/${id}`, { method: "GET", headers: { access_token } })
            const data = await res.json()

            // console.log(data)
            if (!res.ok) throw data


            dispatch({ type: CATEGORY_FETCH_SUCCESS, payload: data })
            // return { success: true, data }
        } catch (error) {
            // return { success: false, error }
        }
    }
}

export function updateCategory(id, form) {
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token
            const res = await fetch(`https://api-hck.sesber.com/categories/${id}`, { method: 'PUT', headers: { access_token, "Content-Type": "application/json" }, body: JSON.stringify(form) })
            const data = await res.json()

            // console.log(data)
            if (!res.ok) throw data

            return { success: true, data }
        } catch (error) {
            // console.log(error)
            return { success: false, error }
        }
    }
}

export function deleteCategory(id) {
    return async function (dispatch) {
        try {
            // console.log("delete bos?")
            const access_token = localStorage.access_token

            const res = await fetch(`https://api-hck.sesber.com/categories/${id}`, { method: "DELETE", headers: { "Content-Type": "application/json", access_token } })

            const data = await res.json()

            if (!res.ok) throw data

            return { success: true, data }
        } catch (error) {
            // console.log(error)
            return { success: false, error }
        }
    }
}