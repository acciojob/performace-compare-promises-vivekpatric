// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
function fetchData(url) {
  return fetch(url).then(response => response.json());
}

function fetchWithPromiseAll() {
  const startTime = performance.now();
  
  Promise.all(apiUrls.map(fetchData))
    .then(() => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      document.getElementById("output-all").textContent = timeTaken.toFixed(2);
    })
    .catch(error => {
      console.error("Promise.all failed:", error);
    });
}

function fetchWithPromiseAny() {
  const startTime = performance.now();

  Promise.any(apiUrls.map(fetchData))
    .then(() => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      document.getElementById("output-any").textContent = timeTaken.toFixed(2);
    })
    .catch(error => {
      console.error("Promise.any failed:", error);
    });
}

fetchWithPromiseAll();
fetchWithPromiseAny();
// You can write your code here
