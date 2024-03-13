// Given a string, reverse each word in the sentence
function reverseString(str){
    const reverseString =
    str.split("").reduce((acc,char)=> char+ acc, "");
    //.split seprate the words 
console.log(reverseString)
}
reverseString("hello gyys kaise hai aap log")