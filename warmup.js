// function that gives the max of the numbers provided

var my_max = function(arr){
  max = arr[0];
  for(i=0;i<arr.length;i++){
    if(arr[i]>max){
      max = arr[i];
    }
  }
  console.log(max);
};

numbers = [2,3,5,6,1];
my_max(numbers);

// function that gives the numbers of vowels in a string

var vowel_count = function(str){
  count =0;
  str1 = str.toLowerCase().split("");
  for(i=0;i<str1.length;i++){
    if(str1[i] === "a" || str1[i] === "e" || str1[i] === "i" || str1[i] === "o" || str1[i] === "u"){
      count++;
    }
  }
  console.log("The number of vowels are: " + count);
}

vowel_count("What is going on guys?");

// function that reverses a string

var reverse = function reverse(str){
  str1 = str.split("").reverse().join("");
  console.log(str1);
}

reverse("What is going on guys?");
