function  account ( b ) {
    return  function ( a ) {
        return  adds (a, b);
    }
}

function  adds ( a , b ) {
    return a + b;
}

var s = account(10);

console.log(s(15));