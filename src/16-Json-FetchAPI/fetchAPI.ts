// MARK: แบบเจาะจง Model (Todo)
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodo(): Promise<Todo> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Todo = await response.json();
  return data;
}

fetchTodo()
  .then((todo) => {
    console.log("📌 Todo:", todo);
    console.log("📌 Todo.title:", todo.title);
  })
  .catch((error) => console.error("❌ Error:", error));

// MARK: แบบ Generic Function
interface User {
  userId: number;
  id: number;
  title: string;
}
async function fetchDataGenericType<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

(async () => {
  try {
    const todo = await fetchDataGenericType<Todo>(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Todo ✅", todo.title, todo.completed);

    const user = await fetchDataGenericType<User>(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("User ✅", user.userId, user.title);
  } catch (error) {
    console.error("❌ Error:", error);
  }
})();

// MARK: POST
interface PostModel {
  title: string;
  body: string;
  userId: number;
}
async function fetchPost() {
  const dataPost = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // ✅ เปลี่ยนเป็น POST
      headers: {
        "Content-Type": "application/json", // ✅ บอกว่า body เป็น JSON
        //   "Authorization": "Bearer mytoken123" // ✅ ถ้ามี JWT token
      },
      body: JSON.stringify(dataPost),
    });

    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

fetchPost()
  .then((postModel: PostModel) => {
    console.log("📌 postModel:", postModel);
  })
  .catch((error) => console.error("❌ Error:", error));
