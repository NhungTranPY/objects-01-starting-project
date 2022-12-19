let person = { 
    name: "Max",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {
        alert('Hi there')
    }
}

// person.greet()

person.age = 31
person.isAdmin = true

console.log(person);