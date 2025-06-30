// Immediately Invoked Function Expression (IIFE)

(function hello() {
    // named IIFE
    console.log("hello");
})();

// it will throw an error if semicolor is not declared
// (function db() {
//     console.log('DB');
// })();

((name) => {
    console.log(`DB connected to ${name}`);
})('sudeep');