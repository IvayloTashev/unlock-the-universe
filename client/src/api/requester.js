async function requester(method, url, data) {

    const option = {
        method,
        headers: {}
    }

    if (data) {
        option.headers["Content-Type"] = "application/json"
        option.body = JSON.stringify(data)
    }

    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        option.headers["X-Authorization"] = accessToken;
    }

    try {
        const response = await fetch(url, option);

        if (!response.ok) {
            if (response.status == 403) {
                clearUserData();
            }

            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

function get(url) {
    return requester("GET", url)
}

function post(url, data) {
    return requester("POST", url, data)
}

function put(url, data) {
    return requester("PUT", url, data)
}

function del(url) {
    return requester("DELETE", url)
}

export {
    get,
    post,
    put,
    del
}
