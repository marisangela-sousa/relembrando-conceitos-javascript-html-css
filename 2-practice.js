const fruits = ["orange", "water melon", "passio fruit"];

const showEven = () => {
    for (let i = 0; i<fruits.length; i++){
        if(i % 2 === 0){
            console.log(fruits[i]);
        }
    }
}

showEven();