/* eslint-disable no-restricted-syntax */

export const getAdults = obj => {
    const newObj = {};
    for (let key in obj) {
      if (obj[key] >= 18) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  };
    
 export const withdraw = (clients, balances, client, amount) => {
      const clientIndex = clients.indexOf(client);
      const balanceIndex = balances[clientIndex];
      if (balanceIndex < amount) {
          return -1;
      } 
          // eslint-disable-next-line no-param-reassign
          balances[clientIndex] = balanceIndex - amount;
          return balances[clientIndex];
      
  }
  
 export const reverseArray = (arr) => {
      if (!Array.isArray(arr)) {
          return null;
        }
  
   
      return arr.slice().reverse();
  }