function vacation(peopleCount, groupType, dayOfweek){

    let studentFridayPrice = 8.45;
    let busnessFridayPrice = 10.90;
    let regularFridayPrice = 15;
    let studentsSaturdayPreci = 9.8;
    let busneeSaturdayPrice = 15.6;
    let regularSaturdayPrice = 20;
    let studenSundayPrice = 10.46;
    let busnessSundayPrice = 16;
    let regularSundayPrice = 22.5;

    let studentDiscountCount = 15;
    let busnessDiscountCount = 10;
    let regularDiscounCount = 5;

    let totalPrice = 0;

    if(groupType === "Business" && groupType == peopleCount >= 100){
        peopleCount = busnessDiscountCount;
    }

    if(groupType === "Students" && dayOfweek === "Friday"){
        totalPrice += peopleCount * studentFridayPrice;
    }else if (groupType === "Students" && dayOfweek === "Saturday"){
        totalPrice = peopleCount * studentsSaturdayPreci;
    }else if (groupType === "Students" && dayOfweek == "Sunday"){
        totalPrice = peopleCount * studenSundayPrice;
    }else if(groupType === "Regular" && dayOfweek == "Friday"){
        totalPrice += peopleCount * regularFridayPrice;
    }else if(groupType === "Regular" && dayOfweek == "Saturday"){
        totalPrice += peopleCount * regularSaturdayPrice;
    }else if(groupType === "Regular" && dayOfweek == "Sunday"){
        totalPrice += peopleCount * regularSundayPrice;
    }else if(groupType === "Business" && dayOfweek == "Friday"){
        totalPrice += peopleCount * busnessFridayPrice;
    }else if(groupType === "Business" && dayOfweek == "Saturday"){
        totalPrice += peopleCount * busneeSaturdayPrice;
    }else if(groupType === "Business" && dayOfweek == "Sunday"){
        totalPrice += peopleCount * busnessSundayPrice;
    }

    if(groupType === "Students" && peopleCount >= 30){
        totalPrice -= studentDiscountCount / 100 * totalPrice;
    }else if(groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20){
        totalPrice -= (regularDiscounCount / 100) * totalPrice
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
//vacation(30,"Students","Sunday")
vacation(40,"Regular","Saturday")