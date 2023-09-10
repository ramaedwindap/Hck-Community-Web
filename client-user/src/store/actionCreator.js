import { POSTS_FETCH_SUCCESS, POST_FETCH_SUCCESS, TOP_TAGS_FETCH_SUCCESS } from "./actionTypes";

export function fetchPosts() {
    return async function (dispatch) {
        try {
            const response = await fetch(
                "https://api-hck.sesber.com/public/posts",
                { method: "GET" }
            );

            if (!response.ok) {
                throw { message: "Something wrong!" };
            }

            const result = await response.json();
            // console.log(result, "================");

            dispatch({ type: POSTS_FETCH_SUCCESS, payload: result });
        } catch (error) {
            console.log(error);
        }
    }
}

export function fetchPost(slug) {
    return async function (dispatch) {
        try {
            const response = await fetch(
                `https://api-hck.sesber.com/public/posts/${slug}`,
                { method: "GET" }
            );

            if (!response.ok) {
                throw await response.json();
            }

            const result = await response.json();

            dispatch({ type: POST_FETCH_SUCCESS, payload: result });
        } catch (error) {
            console.log(error);
        }
    }
}

export function fetchTopTags() {
    return async function (dispatch) {
        try {
            const response = await fetch("https://api-hck.sesber.com/public/top-tags", {
                method: "GET",
            });

            if (!response.ok) {
                throw await response.json();
            }

            const result = await response.json()
            // console.log(result, "asdadadasd============")

            dispatch({ type: TOP_TAGS_FETCH_SUCCESS, payload: result });
        } catch (error) {
            console.log(error);
        }
    }
}