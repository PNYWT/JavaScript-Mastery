function getDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5;
            const data = { name: "John", age: 99 };
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
getDataWithPromise()
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.error(error);
});
// MARK: Multiple Promise
const p1 = new Promise((resolve) => setTimeout(() => resolve("API 1"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("API 2"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("API 3"), 1500));
// MARK: Run All
Promise.all([p1, p2, p3])
    .then((results) => console.log("All done:", results))
    .catch((error) => console.error("One failed:", error));
// MARK: Get done first
Promise.race([p1, p2, p3])
    .then((result) => console.log("First done:", result))
    .catch((error) => console.error("Race", error));
export {};
//# sourceMappingURL=promisests.js.map