const sortedArray = [1, 12, 23, 34, 45, 56, 67, 78, 89, 90];

const unsortedArray = [23,12,45,23,67,3,67,98,1,23,12,37,77];

//////////////////////

const obj = {
    a:10,

    b: {
        x:20
    }
}


const abc = {...obj};


abc.a=100;

abc.b.x = 200;

console.log(obj)