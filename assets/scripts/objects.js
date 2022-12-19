const movieList = document.getElementById('movie-list')

movieList.style.backgroundColor = 'red'
movieList.style.display = 'block'

let person = { 
    'first name': "Max",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {
        alert('Hi there')
    }
}

// person.greet()
delete person.age
person.isAdmin = true

console.log(person['first name']); // Max