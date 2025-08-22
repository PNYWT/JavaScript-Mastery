// MARK: GET
axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
    console.log("📌 GET Response:", response.data);
})
    .catch((error) => {
    console.error("❌ GET Error:", error);
});
// MARK: POST
let postData = {
    title: "Hello Post",
    body: "This is a post"
};
axios.post("https://jsonplaceholder.typicode.com/posts", postData)
    .then((response) => {
    console.log("📌 POST Response:", response.data);
})
    .catch((error) => {
    console.error("❌ POST Error:", error);
});
export {};
//# sourceMappingURL=axiosTest.js.map