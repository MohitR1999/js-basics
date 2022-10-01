/**
 * We can see an example of closures here
 */
function x() {
    let a = 10;
    function y() {
        let b = a + 10;
        return b;
    }
    return y;
}

let z = x();
console.log(z());
/**
 * Output would be 20, as a is accessible by y() even outside x()
 * as it has closure with a
 */