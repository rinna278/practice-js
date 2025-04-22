function reverseWords(str) {
    const str1 = str.trim();
    const str2 = str1.split(/\s+/);
    const str3 = str2.reverse();
    const str4 = str3.join(" ");
    return str4;
}
  
console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  ")); 
console.log(reverseWords("a good example"));    
  