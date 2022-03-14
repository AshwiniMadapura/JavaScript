function positive(event){
    const number= event.target.value;

    if(number>=0){
        alert('number is positive')
    }
    else{
        alert('number is negetive')
    }
}

function greatest(event){
    const num1=event.target.value;
    const num2=event.target.value;
    const num3=event.target.value;
    // let largest;
    if(num1>num2 && num1>num3){
        // largest=num1;
        alert(num1+' is greater')
        
    }
    else if(num2>num3){
        alert(num2+' is graeter')
        
    }
    else{
        alert(num3+'is greater')
    }

}

function weekend(event){
    let days=event.target.value;
    if (!days) return;
    // days=days.toUpperCase();
    let msg;
    switch(days){
        case "Monday":
            msg="Only 4 more days untill weekend";
            break;
        case "Tuesday":
            msg="Only 3 more days untill weekend";
            break;
        case "Wednesday":
            msg="Only 2 more days untill weekend";
            break;
        case "Thursday":
            msg="Only 1 more days untill weekend";
            break;
        case "Friday":
            msg="Only 0 more days untill weekend";
            break;
        case "Saturday":
        case "Sunday":
            msg="Hurrayy its a weekend";
            break;
        default: alert('sorry we did not recognise this day');
        break;
    }
    alert(msg);
    
}