const movieList = document.getElementById('movie-list')

movieList.style.backgroundColor = 'red'
movieList.style.display = 'block'

const userChosenKeyName = 'level'

let person = { 
    'first name': "Max",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    [userChosenKeyName]: '...',
    greet: function() {
        alert('Hi there')
    },
    1.5: 'Hello'
}

// person.greet()
delete person.age
person.isAdmin = true

const keyName = 'first name'

console.log(person[keyName]); // Max
console.log(person['first name']); // Max
console.log(person[1.5]) // Hello, console.log(person['1.5']) is also work
console.log(person);