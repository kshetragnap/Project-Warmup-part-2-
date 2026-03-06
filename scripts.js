function descriptionRoom(room){
    if(room === "entrance"){
        return "A duty entrance filled with dark webs"
    } else if(room === "hallway"){
        return "A dark hallway with loud sounds coming from the walls"
    } else if(room === "kitchen"){
        return "A broken kitchen filled with rats and mold"
    } else{
        return "You are in an unfamiliar room. Stay safe!"
    }
};

console.log(descriptionRoom("entrance"));
console.log(descriptionRoom("hallway"));
console.log(descriptionRoom("kitchen"));

let exampleNode = {
    image: "./images/entrance.jpg",
    text: "You are now at the entrance!!! It's dark outside with scary noises.",
    choices: ["Go the hallway","Enter the kitchen"]
};

console.log(exampleNode.image);
console.log(exampleNode.text);
console.log(exampleNode.choices);

let storyNodes = [
{
    image: "./images/entrance.jpg",
    text: "You are now at the entrance!!! It's dark outside with scary noises.",
    choices: ["Go to the hallway","Enter the kitchen"]
}, 
{
    image: "./images/hallway.jpg",
    text: "The hallway is dark and loud with screaming sounds",
    choices: ["Go upstairs", "return to entrance"]
},
{
    image: "./images/kitchen.jpg",
    text: "The kitchen is broken with mold and rats everywhere.",
    choices: ["Retrun to entrance", "Look around"]
},
{
    image: "./images/upstairs.jpg",
    text: "You are now upstairs. Its pitch quiet and dark.",
    choices: ["Go back downstairs", "Back to entrance"]
}
];

function displayNode(index){
    let node =  storyNodes[index];
    let imageElement = document.getElementById("scene-image");
    let textElement = document.getElementById("scene-text");

    imageElement.src = node.image;
    textElement.textContent =  node.text;
}

displayNode(0);
