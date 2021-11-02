const toyToFind = 1

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
    if (toy.id === toyToFind) {
        toy.price = toy.price / 100 * 5 + toy.price
        console.log(`${toy.name} costs $${toy.price}`);
    }
}


/*  TRYING TO PROMPT USER RESPONSE?
prompts response, but does not return value

const toyToFind = prompt("What's the id of the phone you'd like?");
alert(`${toy.name} costs $${toy.price}`);

*/


