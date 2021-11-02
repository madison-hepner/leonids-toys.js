const toyToFind = 2

const toys = [
    {
        id: 1,
        name: "plush bear",
        price: 45
    }
    ,
    {
        id: 2,
        name: "legos",
        price: 65
    }
    ,
    {
        id: 3,
        name: "hotwheels set",
        price: 75
    }
    ,
    {
        id: 4,
        name: "barbie set",
        price: 25
    }
]

const toy5 = {
    name: "trampoline",
    price: 175
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)

}

addToyToInventory(toy5)


for (const toy of toys) {
    console.log(`${toy.name} costs $${toy.price}`)
}








