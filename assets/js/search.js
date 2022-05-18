function findElementById(id) {
    // Return the element in the DOM with corresponding `id`
    // return document.getElementById(id);
    return searchDom(document.body.children, id);
}
//helper function -> depth first search recursively find element in tree.
function searchDom(dom, id){

    const stack = [];
        // console.log(dom[0].children);
    for (let ele of dom){
        stack.push(ele);
    }
    // console.log('TEST', stack);

    while(stack.length){
        let popped = stack.pop();
        // console.log('TEST', popped.children);
        if(popped.id === id){
            return popped;
        }
        if(popped.childElementCount > 0){
            stack.push(popped.lastChild);
        }
    }
}
function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    let elements = document.getElementsByTagName(tag);
    for(let ele of elements){
        return ele;
    }
}

function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    let classes = document.getElementsByClassName(cls);
    for(let firstCls of classes){
        return firstCls;
    }
}

function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    let res = [];
    let elements = document.getElementsByTagName(tag);
    for(let ele of elements){
        res.push(ele);
    }
    return res;

    }

function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    let res = [];
    let classes = document.getElementsByClassName(cls);
    for(let firstCls of classes){
        res.push(firstCls);
    }
    return res;
}

export{
    findElementById,
    findFirstElementOfTag,
    findFirstElementOfClass,
    findElementsOfTag,
    findElementsOfClass
}
