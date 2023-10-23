const ul = document.getElementById("toDolist");
const source = document.getElementById("NewTask");
const button = document.getElementById("AddTask");


button.addEventListener('click', () => {
    const newlist = document.createElement("li");
    newlist.className = "tasklist";
    newlist.textContent = `${source.value}`;
    ul.appendChild(newlist);
});

















// const newlist = document.createElement('list');
// newlist.classname = 'tasklist';
// newlist.textContent = `

// ulist.appendChild(newlist);
// Get the text from the input field
// const NewTask = NewTask.value;
// Add an event listener to the "Add Task" button