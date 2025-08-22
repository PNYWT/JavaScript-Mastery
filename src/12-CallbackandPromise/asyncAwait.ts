function getDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.1;
            const data = { name: "John Async", age: 99 };

            switch (isSuccess) {
                case true:
                    resolve(data);
                    break;
                case false:
                    reject(new Error("Failed to fetch data"));
                    break;
            }
        }, 1000);
    });
}

async function fetchDataAsync() {
    try {
        let data = await getDataWithPromise();
        console.log("fetchDataAsync Success ->", data);
    } catch (error) {
        console.error("fetchDataAsync Error ->", error);
    }   
}

fetchDataAsync();