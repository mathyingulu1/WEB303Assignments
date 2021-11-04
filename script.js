/*
    Assignment 5
    Mathy Ingulu
*/

$(document).ready(function(){
    const ContentCard = {
        id: Johnson,
        title: intertitle,
        description: cardboard,
        type: Master,
    };

    constructor(id, title, description, type) ;{
        this.id = id;
        this.title = title;
        this.description = this.description;
        this.type = this.type;
    }

    for (const property in ContentCard) {
        if (property === "title") {
            console.log(`Property name: ${property}`);
            console.log(`Property value: ${ContentCard[property]}`);
        }
    }

    $.toString(data.ContentCard, function (index, value) {
        console.log("Value at index " + index + " is " + value.id);
        $(`div#content-0`).html(`<h4>${value.title}</h4>`, `<p>${value.description}</p>`, 
        `<div>${value.category}</div>`);

    });
});

console.log(ContentCard.id);
console.log(ContentCard["id"]);

const ContentCard = [
    "Standard",
    "Unique",
    "Professional",
    "Business",
    "Premium"
];

