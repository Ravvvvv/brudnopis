console.log("Klasy - definicja i tworzenia obiektow")

class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    printInfo() {
        console.log | (`Imie: ${this.name}, Nazwisko: ${this.lastName}`);
    }
}

let person = new Person("Hans", "Kowaslki");
person.printInfo();
let person2 = new Person("Monika", "Nowak");
person2.printInfo();
let person3 = new Person("Jan", "Kowaslki")
person3.printInfo();
console.log(person);


// function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.printInfo = function () {
//         console.log('Imię: ' + this.name + ',   ' + 'Nazwisko: ' + this.surname);
//     }
// }

// let lukasz = new Person('Łukasz', 'Badocha');
// //Stwórz nową instancję obiektu Person

// lukasz.printInfo();
// //Wyloguje 'Imię: Łukasz, Nazwisko: Badocha

// let krystian = new Person('Krystian', 'Dziopa');
// //Stwórz nową instancję obiektu Person

// krystian.printInfo();
// //Wyloguje 'Imię: Krystian, Nazwisko: Dziopa














// console.log('Obiekty');

// var person = {
//     name: 'Jans',
//     height: 180,
//     print: function () {
//         console.log('mam na imie:' + this.name);
//     },
//     printThis: function() {
//         console.log('jestem metoda obiektu');
//         this.print();
//     }

// };

// // console.log(person.height);

// // person.printThis();

// person.height =181
// person.weight = 75
// // console.log(person)
// var women = {
//     name: 'Monika',
//     height: 165,

// }

// let {name, height,} = women;

// console.log(height)




// console.log("obiekty w es5 i es6");


// // es6

// let personES6 = {
// name: 'Monika',
// height: 165,
// print(){
//     console.log("mam na imie: "  + this.name)
// },
// printThis(){
// console.log("Jestem metoda obiektu 'printThis' i zaraz urochomie wewnetrzna metode 'print'");
// this.print()
// }

// };

// personES6.printThis();