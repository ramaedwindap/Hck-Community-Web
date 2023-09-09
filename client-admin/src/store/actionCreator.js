// Action Login
export function handleLogin(form) {
    return async function (dispatch) {
        try {
            // console.log(form)
            const res = await fetch("http://localhost:3000/login", {
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

        } catch (error) {
            console.log(error)
            return error
        }
    }
}

// Action Post
export function fetchPosts() {
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token
            const res = await fetch("http://localhost:3000/posts", { method: "GET", headers: { access_token } })

            const data = await res.json()

            if (!res.ok) throw (data)

            dispatch({ type: "posts/fetchSuccess", payload: data })
        } catch (error) {
            console.log(error)
            if (error.message == "Invalid token") {
                localStorage.removeItem('access_token')
            }
            return error
        }
    }
}

export function deletePost(id) {
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token

            const res = await fetch(`http://localhost:3000/posts/${id}`, { method: "DELETE", headers: { access_token } })

            const data = await res.json()

            if (!res.ok) throw data

            return data
        } catch (error) {
            console.log(error)
        }
    }
}

// Action Category
export function fetchCategories() {
    return async function (dispatch) {
        try {
            const access_token = localStorage.access_token
            const res = await fetch("http://localhost:3000/categories", { method: "GET", headers: { access_token } })

            const data = await res.json()
            // console.log(data)

            if (!res.ok) throw data

            dispatch({ type: "categories/fetchSuccess", payload: data })
        } catch (error) {
            console.log(error)
            if (error.message == "Invalid token") {
                localStorage.removeItem('access_token')
            }
        }
    }
}