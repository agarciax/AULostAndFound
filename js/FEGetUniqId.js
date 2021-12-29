
function getUniqId( data ) {
    let buffer = 0; // this variable will be compared with the id of the data parameter
    for(let i = 0; i < data.menu.length; i++){
        if (buffer == data.menu[i].id){
            buffer += 1;
        } else {
            return buffer; //if they don't match, buffer is whats returned
        }
    }
    return buffer
}
