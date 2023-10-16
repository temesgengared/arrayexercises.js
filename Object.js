// what to do ?
//how to do ?using.oprator or using[property name `]
const Student = {
    name: 'Elnathan ',
    age: 6,
    adress: {
        street: '6201 northeast',
        city: 'hyattsville',
        zipcode: '20206'

    }
}
console.log(`Student city: ${Student.adress.city}`)
console.log(`Student city using []: ${Student ['adress']['city']}`);

Student.greet = function() {
    console.log('hello'.concat(Student.name));
};

let street1 = '20th avn';
let city1 = 'montgomery';
let zipcode1 = 20902;
Student.changeAdress = (street1, city1, zipcode1) => {
    Student.adress.street = street1;
    Student.adress.city = city1;
    Student.adress.zipcode = zipcode1;
}



StudentchangeAdress(street1, city1, zipcode1);
console.log(`Student city after modfication:${Student.adress.city}`);
console.log(Student.adress.city);
Student.greet();