const howUnlucky = (year) => {
    let friday13ths = 0;
  
    for (let month = 0; month < 12; month++) {
      const date = new Date(year, month, 13);
      
      if (date.getDay() === 5) {
        friday13ths++;
      }
    }
  
    return friday13ths;
  };
  
  console.log(howUnlucky(2020)); // ➞ 2
  console.log(howUnlucky(2026)); // ➞ 3
  console.log(howUnlucky(2016)); // ➞ 1
  