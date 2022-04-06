function solve(input) {
    let givenAge = input;
    if (givenAge >= 0 && givenAge <= 2 ? console.log('baby') : false) { }
    else if (givenAge >= 3 && givenAge <= 13 ? console.log('child') : false) { }
    else if (givenAge >= 14 && givenAge <= 19 ? console.log('teenager') : false) { }
    else if (givenAge >= 20 && givenAge <= 65 ? console.log('adult') : false) { }
    else if (givenAge >= 66 ? console.log('elder') : false) { }
    else {
        console.log('out of bound');
    }
}
solve(-23)