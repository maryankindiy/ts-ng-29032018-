function isInArray(a: string[], ...b: string[]) {
    if (b) { return true; }
}


function summator(...arr: (string | number)[]) {
    let newArr: number;
    arr.forEach((item: string|number , i: number, arr: (string|number)) => {
        if (typeof item === "number") {
            newArr += item;
        }
    };
    return newArr;
}


function getUnique(arr) {

}