"use strict";

const assert = require("assert");  
const myExports = require("./W2D1 objects.js"); 
const findTitles = myExports.findTitles; 
const showTitles = myExports.showTitles;
const findAuthors = myExports.findAuthors;
const addBook = myExports.addBook;
 

describe("library", function () {

    const titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];
    const authors = ["Bill Gates", "Steve Jobs", "Suzanne Collins"];
    const ids = [1254, 3245, 4264];


    it("find titles", function () {
        assert.deepEqual(findTitles(), titles);
    });

    it("find authors", function () {
        assert.deepEqual(findAuthors(), authors);
    });
    it("shows title", function () {
        assert.deepEqual(showTitles(), titles);
    });

    // it("find ids", function () {
    //     assert.deepEqual(findIDs(), ids);
    // });

    it("add book", function () {
        const newBook = {title: "My New Book", author: "Me Too", libraryID: 1144};
        ids.push(1144);
        assert.deepEqual(addBook("My New Book",  "Me Too",  1144), newBook);
        assert.deepEqual(findIDs(), ids);
    });

});