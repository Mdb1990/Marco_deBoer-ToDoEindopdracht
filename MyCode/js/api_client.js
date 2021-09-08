/** @format */

//URL for fetching the database TODO
const url = "http://localhost:3000/";

//Making a GET fetch to Get all the elements from the database. and sending them to the DOM
async function getToDo() {
  await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((toDoList) => {
      inToDom(toDoList);
    });
}

//Making a POST fetch that takes in an input from the user and posts it in de UL as an LI...
async function postTodo(inputBody) {
  try {
    const bodyContent = inputBody;
    const fetchPost = await fetch(url, {
      method: "POST",
      body: JSON.stringify(bodyContent),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await fetchPost.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

// Making a DELETE fetch that just deletes the todo when the trashcan is clicked.
async function deleteTodo(id) {
  try {
    const response = await fetch(url + id, {
      method: "DELETE",
    });
  } catch (err) {
    console.log(err);
  }
}

// De Put methode die ik zou gebruiken...
async function putTodo(id) {
  try {
    const fetchPost = await fetch(url + id, {
      method: "PUT",
      body: { description: "blah", done: false },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await fetchPost.json();
  } catch (err) {
    console.log(err);
  }
}
