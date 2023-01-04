let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});


let formValidation = () => {
    if (input.value === "") { //prevent use enter an emty form
        msg.innerHTML = "Post cannot be blank";
        console.error("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData(); //used when user press the submit button 
    }
};

let data = {};

let acceptData = () => { //Fired when browser throw the error
    data["text"] = input.value;
    console.log(data);

    createPost();
};

let createPost = () => { //create a new template
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class = "options">
        <i onClick="editPost(this)" class ="fas fa-edit" ></i>
        <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
    </div>
    `;
    input.value = "";
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove(); //parentElement used to specify the parent of that class
}