function kilometerTometer(num){
    var result = num * 1000;
    return result;
}
var fainal =kilometerTometer(10);
console.log(fainal);



function budgetCalculator(wach, mobile, laptop){
    var result=wach*50 + mobile*100 + laptop*500;
    return result;
}
var sum = budgetCalculator(2,2,2);
console.log(sum);



function hotelCost(days) {
    var amount = 0;
    if (days <= 10){
        amount = days * 100;
    }else if (days <= 20) {
        var firstPartofJurny = 10 * 100;
        var remaining = days - 10;
        var secondPartofJurny = remaining * 80;
        amount = firstPartofJurny + secondPartofJurny;
    }else {
        var firstPartofJurny = 10 * 100;
        var secondPartofJurny = 10 * 80;
        var remaining = days - 20;
        var thirdPartofjurny = remaining * 50;
        amount = firstPartofJurny + secondPartofJurny + thirdPartofjurny;
    }
    return amount;
}
var totalAmount = hotelCost(21);
console.log(totalAmount);