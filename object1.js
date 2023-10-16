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