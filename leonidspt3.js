
// this is the array of objects, it includes all the toys, their id, the type, and the price
const toysArray = [
    {
        id: 1,
        name: "sakura tree lego set",
        type: "legos",
        price: 45
    }
    ,
    {
        id: 2,
        name: "panda bear plush",
        type: "plush toys",
        price: 65
    }
    ,
    {
        id: 3,
        name: "barbie set",
        type: "dolls",
        price: 75
    }
    ,
    {
        id: 4,
        name: "skywalker millenium falcon lego set",
        type: "legos",
        price: 25
    }
    ,
    {
        id: 5,
        name: "yoda funko pop toy",
        type: "action figures",
        price: 14.43
    }
    ,
    {
        id: 6,
        name: "kakashi funko pop toy",
        type: "action figures",
        price: 10.99
    }
    ,
    {
        id: 7,
        name: "american girl doll julie",
        type: "dolls",
        price: 110
    }
    ,
    {
        id: 8,
        name: "bear plush",
        type: "plush toys",
        price: 5.35
    }
    ,
    {
        id: 9,
        name: "giant stuffed bear",
        type: "plush toys",
        price: 65.55
    }
]

let newArray = [

]

// this prompts the user in browser to enter what type of toy they're looking for
const typeToyToFind = prompt("What's the type of toy would you like? Our inventory includes: action figures, legos, dolls, and plush toys.");

// the goal is to do a loop inside of a loop with a conditional, for every toy, if toy type is equal to the typetoytofind, it'll go through each and make a new array using map? or does that not work.
for (const toy of toysArray) {
    if (toy.type === (typeToyToFind.toLowerCase())) {
        newArray.push(toy.name)
        newArray.push(toy.price)
        }
        

        }

alert(`Under '${typeToyToFind}' we have: ${newArray}`);
    




        // toy.price = toy.price / 100 * 5 + toy.price
        // alert(`${toy.name} costs $${toy.price}`);

    
// alert(`Under '${typeToyToFind}' we have: ${newArray.toy1}`);







/*

let newArray = [

]


// this prompts the user in browser to enter what type of toy they're looking for
const typeToyToFind = prompt("What's the type of toy would you like? Our inventory includes: action figures, legos, dolls, and plush toys.");

// the goal is to do a loop inside of a loop with a conditional, for every toy, if toy type is equal to the typetoytofind, it'll go through each and make a new array using map? or does that not work.
for (const toy of toysArray) {
    if (toy.type === (typeToyToFind.toLowerCase())) {
        const addToyToNewArray = (toyObject) => {
            const currentLength = newArray.length
        }
        
        
        if (currentLength === 0) {
            const toy1 = {
                
            }
            newArray.push(toy1)

        }

         const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)

}



        // toy.price = toy.price / 100 * 5 + toy.price
        // alert(`${toy.name} costs $${toy.price}`);
    }}

    
    alert(`Under '${typeToyToFind}' we have: ${newArray.toy1}`);
 // */
       