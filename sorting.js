const sort = (arr) => {
    for(let i=1; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i]<arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
};

const num = [2,3,5,1,6,6,7];

sort(num);

console.log(num); 