const object = {
    a: 1,
    b: 2,
    d: 5,
}

function checkKey(key, obj){
    let result = false;
    for (let i in obj){
        if (i === key){
            result = true
        }
    }
    return result
}

g = checkKey("d", object)
console.log(g)