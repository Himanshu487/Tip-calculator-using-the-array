

var bills=[125,555,44];

var abill,i,billAmount;

var tipValue=[];
var totalAmount=[];


const calcTip=()=>{

    for( i=0;i<bills.length;i++){
        // abill = abill + bills[i];
        // console.log(bills[i]);

        if(bills[i]>=50 && bills[i]<300){
            // console.log('the bill value is going to be 15% of the bill');
            theAmount = bills[i] * (15/100);
        }
        else{
            // console.log('the bill value is going to be 20% of the bill');
            theAmount = bills[i] * (20/100);
        }

         billAmount = bills[i];

        //  console.log("the bill amount",billAmount);

         console.log(`you have to pay ${billAmount}  with the tip of ${theAmount}`);

         tipValue.push(theAmount);

         totalAmount.push( billAmount + theAmount);

    }

    console.log('the value of array will be',tipValue);
    console.log('the total amount will be',totalAmount);

}


calcTip();