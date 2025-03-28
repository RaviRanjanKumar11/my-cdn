async function fetchData(url, method = "GET", body = null) {
    try {
        let options = { method, headers: { "Content-Type": "application/json" } };
        if (body) options.body = JSON.stringify(body);
        let response = await fetch(url, options);
        return response.json();
    } catch (error) {
        console.error("API Error:", error);
    }
}

window.myCDNAPI = { fetchData };
