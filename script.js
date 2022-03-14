// function greeting(event){
//     const greet = event.target.value;
    
    
//     if(greet=="hello"){
//         alert('bojour')
//     }
//     else{
//         alert('not recognised')
//     }
// }

// function minute(event){
//     const min = event.target.value;
//     const seconds = min*60;
    
//     alert(seconds)
    
// }

function CalculateGrade(event){
    let grade = event.target.value;
    if(!grade) return;
    grade=grade.toUpperCase();

    let percent;
    switch(grade){
        case "A":
            percent="90-100";
            break;
        case "B":
            percent="80-90";
            break;
        case "C":
            percent="70-80";
            break;       
    }
    alert("percentage was " +percent);

}

