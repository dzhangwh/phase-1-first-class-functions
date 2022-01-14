function receivesAFunction(cb) {
    return cb()

}

//receivesAFunction(function () {return 'test'})



function returnsANamedFunction () {
    return function test() {
        console.log('test')
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        
    }
}