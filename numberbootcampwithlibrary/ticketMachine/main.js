function ageControl(age){
    let price;
    if(age <= 17){
        price = 10;

    }else if(age >= 65){
        price = 15;

    }else{
        price = 20;
    }
    return price;

}
ageControl(21)