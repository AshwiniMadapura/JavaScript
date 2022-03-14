// to find perimeter of a rectangle
 
const calculatePerimeter = (width, height)=>{
    return width+width+height+height;
}

console.log(calculatePerimeter(2,1));

const calculateArea=(radius)=>{
    const area=Math.PI*radius*radius;
    return area;
}
// const smallArea= calculateArea(3);
// console.log(smallArea);
console.log(calculateArea(3));

const calculateCircumference=(radiusCircle)=>{
    const circumference= 2*Math.PI*radiusCircle;
    return circumference;
}
console.log(calculateCircumference(2));

// priniting person description challenge

const getDescription=(partner,numberOfChildren,location, jobTitle)=>{
    // const message= "I am currently a "+jobTitle+" living in "+location+" and married to "+partner+" with "+numberOfChildren+" kids";
    const message=`I am currently a ${jobTitle} living in ${location} and married to ${partner} with ${numberOfChildren} kids`;
    console.log(message);
}
getDescription("pradeep",1,"Birmingham","Software Engineer")

//calculate number of sneakers used by a person in life time

const calculateSupply=(currentAge,numberOfSneakersPerday)=>{
    const maxAge=90;
    const numberOfSneakersPerLifetime=(numberOfSneakersPerday+365)+(maxAge-currentAge);
    const msg=`you will need ${numberOfSneakersPerLifetime} bars of sneakers to last you untill age of ${maxAge}`;
    console.log(msg);
}
calculateSupply(28,2);

// demo of forEach method

const coaches=["Andy","Bex","sam"];
coaches.forEach((coach)=>{
    console.log(coach)
})

// demo of map() function

const newCoaches= coaches.map((c)=>{
    return c;
})
console.log(newCoaches);

//demo of filter() function

const scores=[4,6,10];
const highScore=scores.filter((score)=>{
    if(score>8){
        return true;
    }
    else{
        return false;
    }
})
console.log(highScore);

//to simplify above code 

const highScore1=scores.filter((score1)=> score1>8);
console.log(highScore1)
