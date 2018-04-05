function isInArray(a: string[], ...b: string[]) {
    if (b) { return true; }
}


function summator( [...arr] ) {
    let newArr = [];
    arr.forEach( (item, i, arr) => {
        if (typeof item === "number") {
            newArr += item;
        }
    };
    return newArr;
}


function getUnique( [...arr] ) {
    return new Set(arr);
}