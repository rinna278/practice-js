function formatMoney(amount) {
    if (amount <= 0) {
      return "0";
    }
    return amount.toLocaleString();
  }
  
  console.log(formatMoney(-1));       
  console.log(formatMoney(0));       
  console.log(formatMoney(10));
  console.log(formatMoney(1000));
  console.log(formatMoney(10000));
  console.log(formatMoney(1000000));
  