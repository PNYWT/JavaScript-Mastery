// บอก TS ว่ามี axios (มาจาก CDN) ไม่งั้นมันจะ error
declare const axios: any;

// MARK: GET
axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response: { data: any }) => {
    console.log("📌 GET Response:", response.data);
  })
  .catch((error: any) => {
    console.error("❌ GET Error:", error);
  });

// MARK: POST
let postData = {
  title: "Hello Post",
  body: "This is a post"
}
axios.post("https://jsonplaceholder.typicode.com/posts", postData)
  .then((response: { data: any }) => {
    console.log("📌 POST Response:", response.data);
  })
  .catch((error: any) => {
    console.error("❌ POST Error:", error);
  });
