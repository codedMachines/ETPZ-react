console.log("-index.js-");


//-------------------------------
// using DOM API
//-------------------------------

let box = document.querySelector('.alert')
let greetBtn = document.querySelector('.btn-success')
let showBtn = document.querySelector('.btn-primary')
let hideBtn = document.querySelector('.btn-danger')

greetBtn.addEventListener('click', e => {
    box.innerHTML = "good noon"
})
hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    box.style.display = ''
})

//---------------------------------



//-------------------------------
// using XHR / Fetch API
//-------------------------------

let todosBtn = document.querySelector('.btn-dark')
todosBtn.addEventListener('click', e => {
    let api = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    let promise = fetch(api)
    promise
        .then(response => response.json())
        .then(todos => {
            let newArr = todos.map((todo) => {
                return `
                <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">${todo.id} - ${todo.title} - ${todo.completed}</li>
                `
            })
            document.getElementById('todo-list').innerHTML = newArr.join(" ");
        })
})


//-------------------------------
// using Timer API
//-------------------------------

setInterval(() => {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString()
}, 1000);