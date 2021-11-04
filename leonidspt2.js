const toys = [
    {
        id: 1,
        name: "toy 1",
        price: 45
    }
    ,
    {
        id: 2,
        name: "toy 2",
        price: 65
    }
    ,
    {
        id: 3,
        name: "toy 3",
        price: 75
    }
    ,
    {
        id: 4,
        name: "toy 4",
        price: 25
    }
]



const toyToFind = prompt("What's the id of the toy you'd like?");


for (const toy of toys) {
    if (toy.id === parseInt(toyToFind)) {
        toy.price = toy.price / 100 * 5 + toy.price
        alert(`${toy.name} costs $${toy.price}`);
    }

}


// loop inside a loop that asks user for what kind of toy, then the id?