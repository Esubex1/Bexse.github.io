"use strict";

module.exports = {findTitles,showTitles, findAuthors, addBook }

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
  ];
  
  function findTitles(){
    let titles = [];
    for (let item in library){
      titles.push(library[item]["title"])
    }
   
    titles.sort();
    
    return titles;
  }
    
  function showTitles(){
    const titles = findTitles();
    titles.sort();
    //const titleString = titles.join('\n')
    //console.log(titleString);
    return titles;
  }
  
  function findAuthors(){
    const authors = [];
  
    for (const item in library){
      authors.push(library[item]["author"]);
    }
  
    authors.sort();
  
    return authors;
  
  }
  //read dom
  function addBook(title, author, libraryID){
    const newBook = {};
    newBook['title']  = document.getElementById('title');
    newBook['author']  = document.getElementById('author');
    newBook['libraryID']  = document.getElementById('libraryid');
  console.log(newBook);
  //library.push(newBook)
  
  }
  