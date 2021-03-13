module.exports = function toReadable (number) {
    const small = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const big = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    function Readable(number){
        if(number<10) return small[num];
        else if (num>= 10 && num < 20) return big[num-10];
        else if (num>= 20 && num < 100) return num(number);
        else if (num >= 100 && num < 1000) return num_hudreds(number);
    }
    
    function number(number){
        number = number.toString().split('');
            if(number[1] === 0) return dozens[number[0]];
            else    return dozens[number[0]] + ' ' + small[number[1]];
    }
    
    function num_hundreds(number){
        number = number.toString().split('');
        if(number[1] === 0 && number[2] === 0) return small[number[0]] + ' hunred';
        else if(number[1] === 0 && number[2] !== 0) return small[number[0]] + ' hundred ' + small[number[2]];
        else if(number[2] === 0 && number[1] !== 0) return small[number[0]] + ' hunred ' + dozens[number[1]];
}
