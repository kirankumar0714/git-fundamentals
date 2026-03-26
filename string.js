let string = "kiran"

function capitalise(){
    const  capital = string.toUpperCase();
    console.log(capital)
}
function reverse(){
    let rev = "";
    for (let i = string.length - 1; i >= 0; i--) {
        rev += string[i]
    }
    return rev;
}
function trim(){
   const trimmer = string.trim();
}

capitalise();
reverse();
trim();
