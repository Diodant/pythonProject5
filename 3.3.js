function fun () {
    return Object.create(null)
}

console.log(fun)

const x = fun()
x.a = 'b'
console.log(x)