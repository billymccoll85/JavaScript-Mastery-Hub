function outerFunction() {
    var outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

var closureExample = outerFunction();
closureExample(); // Output: I am from the outer function
