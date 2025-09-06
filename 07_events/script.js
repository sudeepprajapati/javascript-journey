// document.getElementById('owl').onclick = function () {
// alert('Owl clicked!');
// }

// attachEvent()
// jQuery()

// type, timestamps, defaultPrevented
// target, toElement, srcElement, curreentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// true = capturing - executes code top to bottom
// false = bublling - executes code bottom to top
// document.getElementById('images').addEventListener('click', function (e) {
//     console.log('clicked inside the ul');
// }, false)

// document.getElementById('owl').addEventListener('click', function (e) {
//     console.log("owl clicked");
//     e.stopPropagation() // it prevents bubbling
// }, false)


// document.getElementById('google').addEventListener('click', function (e) {
//     e.preventDefault() // it prevents bubbling
//     e.stopPropagation() // it prevents bubbling
//     console.log("google clicked");
// }, false)

document.querySelector('#images').addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode
    }
    let removeIt = e.target.parentNode
    removeIt.remove()
}, false)
// removeIt.parentNode.removeChild(removeIt)