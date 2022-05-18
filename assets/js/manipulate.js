 function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = "(Your name)'s Portfolio"


}

 function changeHeader() {
    // Change the name in the h1 of the page to your name
    document.body.children[0].children[0].innerText = "Your name"


}

 function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    document.body.children[1].children[1].innerText = "Small passage about myself"
    document.body.children[1].children[2].innerText = "Small passage about myself"

}

export{
    changeTitle,
    changeHeader,
    changeAboutMe
};
