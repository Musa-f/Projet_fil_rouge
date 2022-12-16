let books = [...document.querySelectorAll('span')];
let booksEven = [...document.querySelectorAll('span:nth-child(even)')];
const styleArray = ['style1', 'style2', 'style3', 'style4', 'style5', 'style6', 'style7'];
const rotationArray = ['rotation-r', 'rotation-l'];

books.forEach(function(book){
    let randomStyle = styleArray[Math.floor(Math.random() * styleArray.length)];
    book.classList.add(randomStyle);
})

booksEven.forEach(function(book){
    let randomRotation = rotationArray[Math.floor(Math.random() * 4)];
    book.classList.add(randomRotation);
})




/*let container = document.getElementById('container');

let line = document.createElement('div');
line.classList.add('line');
container.append(line);

books.forEach(function(book){
    let randomStyle = styleArray[Math.floor(Math.random() * styleArray.length)];
    book.classList.add(randomStyle);

    let randomRotation = rotationArray[Math.floor(Math.random() * 9)];
    book.classList.add(randomRotation);
})

*/

