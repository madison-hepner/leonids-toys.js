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





for (const toy of toys) {
    const toyToFind = prompt("What's the id of the toy you'd like?");
    if (toy.id === toyToFind) {
        toy.price = toy.price / 100 * 5 + toy.price
    }
    alert(`${toy.name} costs $${toy.price}`);
}


