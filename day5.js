function print(val){
    console.log(`-----------------${val}------------------------`)
}
print("printing odd number using anonymous function");
let odd = function(arr){
    let oddList = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            oddList.push(arr[i]);
        }
    }
    console.log(oddList);
}
let arr = [2, 5, 567, 6, 9, 79, 1, 2034];
odd(arr);


print("printing odd number using IIFE function");
(function oddFunc(arr){
    let oddList = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            oddList.push(arr[i]);
        }
    }
    console.log(oddList);
})(arr);

print("strings to title caps in a string array using anonymous function");
let titleCap = function(arr){
    let out = [];
    for(var i=0; i<arr.length; i++){
        let str = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        out.push(str);
    }
    console.log(out);
    }
let arrOfString = ["surya", "prakash", "guvi"];
titleCap(arrOfString);

print("strings to title caps in a string array using IIFE function");

(function titleToCap(arr){
    let out = [];
    for(var i=0; i<arr.length; i++){
        let str = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        out.push(str);
    }
    console.log(out);
})(arrOfString);

print("sum of array using anonymous function");
let sumOfArray = function(arr){
    let sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}
let numArr = [2, 5, 567, 6, 9, 79, 1, 2033];
sumOfArray(numArr);

print("sum of array using IIFE function");

(function sumArr(arr){
    let sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
})(numArr);

print("prime number using anonymous function");
let isPrime = function(arr){
    let out = [];
    
    for(var i=0; i<arr.length; i++){
        let isPrime = true;
        
        
        if(arr[i] == 0 || arr[i] == 1){
            isPrime=false;
        }
        
        else{
            for(var j=2; j<arr[i]; j++){
                if(arr[i]%j==0){
                    isPrime=false;
                    break;
                }
            }
        }
        if(isPrime==true){
            out.push(arr[i]);
        }
}
console.log(out);
}
let arrNum = [0, 20, 3, 7, 19, 2, 37]
isPrime(arrNum);

print("prime number using IIFE function");

(function prime(arr){
    let out = [];
    
    for(var i=0; i<arr.length; i++){
        let isPrime = true;
        
        
        if(arr[i] == 0 || arr[i] == 1){
            isPrime=false;
        }
        
        else{
            for(var j=2; j<arr[i]; j++){
                if(arr[i]%j==0){
                    isPrime=false;
                    break;
                }
            }
        }
        if(isPrime==true){
            out.push(arr[i]);
        }
    
}
console.log(out);
})([0, 20, 3, 7, 19, 2]);

print("printing palindrome using anonymous function");

let palin = function(arr){
    let out = [];
    for(let i=0; i<arr.length; i++){
        let reversed = Number(String(arr[i]).split('').reverse().join(''));
        if(arr[i]==reversed){
            out.push(arr[i]);
        }
    }
    console.log(out);
}
let palinArr = [121, 2000002, 141, 222, 23456789];
palin(palinArr);

print("printing palindrome using IIFE function");

(function isPalin(arr){
    let out = [];
    for(let i=0; i<arr.length; i++){
        let reversed = Number(String(arr[i]).split('').reverse().join(''));
        if(arr[i]==reversed){
            out.push(arr[i]);
        }
    }
    console.log(out);
})(palinArr);


print("finding median using anonymous function");
let findMed = function(arr1, arr2, size){
    arr1 = arr1.sort((a, b)=>a-b);
    arr2 = arr2.sort((a, b)=>a-b);
    let med1 = 0;
    let med2 = 0;
    let sum = 0
    if(size%2==0){
        let mid = Math.floor(size/2);
        med1 = (arr1[mid]+arr1[mid-1])/2;
        med2 = (arr2[mid]+arr2[mid-1])/2;
        sum = (med1+med2)/2;
    }
    else{
        let mid = Math.floor(size/2);
        med1 = arr1[mid];
        med2 = arr2[mid];
        sum = (med1+med2)/2;
    }
    return sum;
}

let arr1 = [2, 3, 4, 6, 7, 9];
let arr2 = [5, 9, 1, 4, 8, 3];
let size1 = arr1.length;
let size2 = arr2.length;
if(size1 == size2){
    console.log(findMed(arr1, arr2, size1));
}
else{
    console.log("both are not equal");
}
print("finding median using IIFE function");

(function isMedian(arr1, arr2){
    let sum = 0
    if(arr1.length!==arr2.length){
        console.log("both are not equal");
    }
    else{
        let med1 = 0;
        let med2 = 0;
        let size = arr2.length;
        if(size%2==0){
            let mid = Math.floor(size/2);
            med1 = (arr1[mid]+arr1[mid-1])/2;
            med2 = (arr2[mid]+arr2[mid-1])/2;
            sum = (med1+med2)/2;
        }
        else{
            let mid = Math.floor(size/2);
            med1 = arr1[mid];
            med2 = arr2[mid];
            sum = (med1+med2)/2;
        }
    }
    console.log(sum);
})(arr1, arr2);

print("removing duplicate values in array using anonymous function");

let dupliArr = function(arr){
    let out = [];
    for(let i=0; i<arr.length; i++){
        if(out.indexOf(arr[i])===-1){
            out.push(arr[i]);
        }
}
console.log(out);
}
dupliArr([1, 1, 2, 3, 4, 5, 6, 6]);

print("removing duplicate values in array using IIFE function");

(function IsDuplicate(arr){
    let out = [];
    for(let i=0; i<arr.length; i++){
        if(out.indexOf(arr[i])===-1){
            out.push(arr[i]);
        }
    }
    console.log(out);
})([1, 1, 2, 3, 4, 5, 6, 6, 8, 9, 10, 10, 26]);

print("Rotate an array by k times using anonymous function");

let rotateArr = function(arr, k){
    let out = [];
    let size = arr.length;
    let kk = k%size;
    for(let i=0; i<size; i++){
        if(i<kk){
            out.push(arr[i+size-kk]);
        }
        else{
            out.push(arr[i-kk]);
        }
    }
    return out;
}
let rotArr = [1, 2, 3];
let k = 2;
let rotatedAr = rotateArr(rotArr, k);
console.log(rotatedAr);


print("Rotate an array by k times using IIFE function");

(function rotateKTimes(arr, k){
    let out = [];
    let size = arr.length;
    let kk = k%size;
    for(let i=0; i<size; i++){
        if(i<kk){
            out.push(arr[i+size-kk]);
        }
        else{
            out.push(arr[i-kk]);
        }
    }
console.log(out);
})(rotArr, k);

print("printing odd numbers in an array using arrow function");
let findOdd = ((arr)=>{
    let oddArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!==0){
            oddArr.push(arr[i]);
        }
    }
    return oddArr;
});
console.log(findOdd([2, 3, 4, 7, 99, 101, 98]));

print("strings to title caps in a string array using arrow function");

let changeToCaps = ((arrOfString)=>{
    let out = [];
    for(let i=0; i<arrOfString.length; i++){
        let str = arrOfString[i].charAt(0).toUpperCase()+arrOfString[i].slice(1);
        out.push(str);
    }
    return out;
});
console.log(changeToCaps(["surya", "welcome", "yellow"]));

print("sum of array using arrow function");
let sumArrArrow = ((arr)=>{
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum = sum+arr[i];
    }
    return sum;
});
console.log(sumArrArrow([2, 3, 4, 7, 99, 101, 98]));

print("prime number using arrow function");

let primeNumber = ((arr)=>{
    let out = [];
    for(let i=0; i<arr.length; i++){
        let primee = true;
        if(arr[i]==0 || arr[i]==1){
            primee=false;
        }
        else{
            for(var j=2; j<arr[i]; j++){
                if(arr[i]%j==0){
                    primee=false;
                    break;
                }
            }
        }
        if(primee==true){
            out.push(arr[i]);
        }
    }
    return out;
});
console.log(primeNumber([2, 3, 4, 7, 99, 101, 98]));

print("printing palindrome using arrow function");

let printPalin = ((arr)=>{
    let out = [];
    for(let i=0; i<arr.length; i++){
        let reversedNum = Number(String(arr[i]).split("").reverse().join(""));
        if(arr[i]===reversedNum){
            out.push(arr[i]);
        }
    }
    return out;
});
console.log(printPalin([444, 56, 989, 121, 2662]));