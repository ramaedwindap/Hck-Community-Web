
export function fetchPosts() {
    return async function (dispatch) {
        try {
            const response = await fetch(
                "http://localhost:3000/posts?_expand=author&_embed=tags&_expand=category",
                { method: "GET" }
            );

            if (!response.ok) {
                throw new Error("Something wrong!");
            }

            const result = await response.json();

            dispatch({ type: "posts/fetchSuccess", payload: result });
        } catch (error) {
            console.log(error);
        }
    }
}

export function fetchPost(slug) {
    return async function (dispatch) {
        try {
            const response = await fetch(
                `http://localhost:3000/posts?slug=${slug}&&_expand=author&&_expand=category&&_embed=tags`,
                { method: "GET" }
            );

            if (!response.ok) {
                throw await response.json();
            }

            const result = await response.json();

            // console.log(result[0]);
            dispatch({ type: "post/fetchSuccess", payload: result[0] });
        } catch (error) {
            console.log(error);
        }
    }
}