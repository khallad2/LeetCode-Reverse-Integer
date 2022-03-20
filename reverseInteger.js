/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var negative = false;
    if(x<0){
        negative = true;
        x *= -1;
    }
    
    var reversed = 0;
    while(x>0){
        reversed = (reversed*10)+(x%10);
        x /= 10;
    }
    
    if(reversed > Number.MAX_VALUE){
        return 0;
    }
    
    return negative ? (-1*reversed) : reversed;
};
