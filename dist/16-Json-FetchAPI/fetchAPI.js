var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchTodo() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = yield response.json();
        return data;
    });
}
fetchTodo()
    .then((todo) => {
    console.log("📌 Todo:", todo);
    console.log("📌 Todo.title:", todo.title);
})
    .catch((error) => console.error("❌ Error:", error));
function fetchDataGenericType(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield fetchDataGenericType("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo ✅", todo.title, todo.completed);
        const user = yield fetchDataGenericType("https://jsonplaceholder.typicode.com/todos/1");
        console.log("User ✅", user.userId, user.title);
    }
    catch (error) {
        console.error("❌ Error:", error);
    }
}))();
function fetchPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataPost = {
            title: "foo",
            body: "bar",
            userId: 1,
        };
        try {
            const response = yield fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST", // ✅ เปลี่ยนเป็น POST
                headers: {
                    "Content-Type": "application/json", // ✅ บอกว่า body เป็น JSON
                    //   "Authorization": "Bearer mytoken123" // ✅ ถ้ามี JWT token
                },
                body: JSON.stringify(dataPost),
            });
            if (!response.ok)
                throw new Error("Network response was not ok");
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
fetchPost()
    .then((postModel) => {
    console.log("📌 postModel:", postModel);
})
    .catch((error) => console.error("❌ Error:", error));
export {};
//# sourceMappingURL=fetchAPI.js.map