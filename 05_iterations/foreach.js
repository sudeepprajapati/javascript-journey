const coding = ["js", "rb", "py", "java", "cpp"]

coding.forEach(function (item) {
    // console.log(item);
})

coding.forEach(element => {
    // console.log(element);
});

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: 'javscript',
        languageFileName: 'js',
    },
    {
        languageName: 'Python',
        languageFileName: 'py',
    },
    {
        languageName: 'C++',
        languageFileName: 'cpp',
    },
]

myCoding.forEach(item => {
    console.log(`${item.languageFileName}: ${item.languageName}`);
})