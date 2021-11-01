function traverseAndExecute(element, callback){
    callback(this);
    for(let child of element.children){
        traverseAndExecute(child, callback);
    }
}