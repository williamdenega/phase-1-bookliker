
booksUrl = 'http://localhost:3000/books/'
usersUrl = 'http://localhost:3000/users'
document.addEventListener("DOMContentLoaded", init);


function init(){

    console.log('hi')

    fetch(booksUrl)
    .then(res => res.json())
    .then(arry => arry.forEach(book =>displayBookList(book)))

}


function displayBookList(book){
    let bookList = document.getElementById('list')
    let bookCard = document.createElement('li')

    bookCard.innerHTML =
     `
    ${book.title}
    `
    

    //settting id for each book 
    bookCard.id = book.id

    //adding each book to the website
    bookList.appendChild(bookCard)

    //addding a event listener to each book
    bookCard.addEventListener('click', handleClick)

    //console.log(book.title)

}

function handleClick(evt){
    let id = evt.target.id
    //console.log(booksUrl+id)
    fetch(booksUrl+id)
    .then(res => res.json())
    .then(book => displayBook(book))
}

function displayBook(book){

    let showPanel = document.getElementById('show-panel')
    
    //console.log(book.users)
    showPanel.innerHTML = 
    `
    <img src=${book.img_url}>;
    <h2>${book.title}</h2>
    <h4>${book.author}</h4>
    <p>${book.description}<p>
    <ul id='likes'>

    </ul>
    <BUTTON id='book${book.id}'>Like</BUTTON>
    `
    let listLikers = book.users
    //console.log(listLikers)
    let likesList= document.getElementById('likes')
    book.users.forEach(user => {
        let li = document.createElement('li')
        li.innerHTML = user.username
        li.id =  'user' +user.id
        likesList.append(li)
    })

    //console.log(document.getElementsByClassName(`${book.id}`))
    document.getElementById(`book${book.id}`).addEventListener('click',handleLike)
    //console.log(document.getElementsByTagName('button'))//.addEventListener('click',handleLike)
    //document.getElementsByClassName(`${book.id}`).addEventListener('click', handleLike)
}



function handleLike(evt){

    let bttnId = evt.target.id
    let id = bttnId.replace( /^\D+/g, '')

    console.log(id)

    // fetch(booksUrl+id,{
    //     method: "PATCH",
    //     headers: {
    //         'Conetent-Type':"'applicatoin/json"
    //     },
    //     body: 

    // })
}