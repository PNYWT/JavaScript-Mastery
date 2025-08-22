// API
console.log("Immediate");

/*
setTimeout(() => {
    console.log("Delay...");
}, 2000);
*/

// MARK: Callback fetchData
function fetchData(callback: (data: string, deley: number) => void): void {
  setTimeout(() => {
    console.log("Data from server...");
    let data = "Sample Data";
    callback(data, 2000); 
  }, 2000);
}

function processData(data: string, deley: number): void {
  console.log("With Callback ->", data, "with deley time:", deley);
}

fetchData(processData);
console.log("Not pass processData");
fetchData((data: string, deley: number) => {
  console.log("With Callback ->", data, "with deley time:", deley);
});

// MARK: fetchDataWithSuccessError
function fetchDataWithSuccessError(
  completion: (data: string) => void,
  error: (err: string) => void
) {
  setTimeout(() => {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      completion("✅ Fetched data successfully!");
    } else {
      error("❌ Failed to fetch data.");
    }
  }, 2000);
}

fetchDataWithSuccessError(
  (data) => {
    console.log("Success ->", data);
  },
  (err) => {
    console.error("Error ->", err);
  }
);

// MARK: throw Object
type ResponseData = {
  success: boolean;
  data?: string;
  error?: string;
};

function fetchDataObjectWithSuccessError(
  completion: (res: ResponseData) => void
) {
  setTimeout(() => {
    const isSuccess = Math.random() > 0.3;
    if (isSuccess) {
      completion({
        success: true,
        data: "✅ User data from server",
      });
    } else {
      completion({
        success: false,
        error: "❌ Failed to fetch user data",
      });
    }
  }, 2000);
}

fetchDataObjectWithSuccessError((res) => {
  if (res.success) {
    console.log("Success ->", res.data);
  } else {
    console.error("Error ->", res.error);
  }
});
