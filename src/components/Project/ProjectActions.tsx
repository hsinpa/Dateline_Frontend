const FETCH_POST = "FETCH_POST";

export function fetchPost() {
    return function(dispatch : Function) {
        fetch("./dataset/fake_tasks.json")
        .then(res => res.json())
        .then(posts => dispatch({
            type : FETCH_POST,
            payload : posts
        }));
    }
}