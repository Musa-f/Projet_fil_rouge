let books = [...document.querySelectorAll('span')];
const styleArray = ['style1', 'style2', 'style3', 'style4'];
const rotationArray = ['rotation-r', 'rotation-l'];
const largeArray = ['large-xs', 'large-m']

books.forEach(function(book){
    let randomStyle = styleArray[Math.floor(Math.random() * styleArray.length)];
    book.classList.add(randomStyle);

    let randomRotation = rotationArray[Math.floor(Math.random() * 9)];
    book.classList.add(randomRotation);

    let randomWidth = largeArray[Math.floor(Math.random() * 9)];
    book.classList.add(randomWidth);
})


//Boucle forEach pour ajouter des éléments
/*books.forEach(function(book){
    console.log(book);
    book.classList.add('style2');
})*/


