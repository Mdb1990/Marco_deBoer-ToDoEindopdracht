/** @format */

// A function to create every LI and Other related things....
const inToDom = (lijst) => {
  lijst.forEach((element) => {
    // Making every Element
    const uL = document.getElementById("toDoList");
    const newLi = document.createElement("li");
    const icon = document.createElement("i");
    const checkbox = document.createElement("input");
    const newId = document.createElement("input");
    //const newEdit = document.createElement("i");

    // Setting all the attributes for the newly made li etc...
    icon.setAttribute("id", "icon1");
    newId.setAttribute("type", "hidden");
    newId.setAttribute("value", element._id);
    checkbox.setAttribute("type", "checkbox");
    //newEdit.classList = "fas fa-edit";
    checkbox.classList.add("checkMe");
    icon.classList = "far fa-trash-alt";

    // Appending every thing into the li and appending the li into the ul
    newLi.append(newId);
    newLi.append(element.description);
    newLi.append(icon);
    newLi.append(checkbox);
    //newLi.append(newEdit);
    uL.appendChild(newLi);
  });
};

// Calling getToDo so the items are put into the DOM
getToDo();

// Selecting the things that need to be selected and used later on.
const btn1 = document.getElementById("inputBtn"); // Button for submitting the input
const todoList = document.querySelector("#toDoList"); // selecting the whole UL

// EventListener for the whole list
todoList.addEventListener("click", deleteCheck);
// listener for the submit button that sends the input.value to the post function.
btn1.addEventListener("click", () => {
  const inputVeld = document.getElementById("inputField").value;
  const inputBody = { description: inputVeld, done: "false" };
  postTodo(inputBody);
});

// Function that checks if the item clicked has a specific class in it with the clickevent.
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "far") {
    const todo = item.parentElement.firstChild;
    deleteTodo(todo.value);
    document.location.reload(true);
  }
  // Checking if the checkbox is checked and toggle the Styling for the parent Element..
  if (item.classList[0] === "checkMe") {
    const todo = item.parentElement;
    todo.classList.toggle("checked");
  }

  // DE EDIT IS NIET HELEMAAL GELUKT MAAR IK WIL GRAAG VERDER xD EN HET IS EEN EXTRA BONUS....//
}
