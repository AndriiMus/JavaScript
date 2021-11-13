export default  arr => {
    if (!Array.isArray(arr)) {
      return null;
    }
  
    if ([''] >= arr) {
      return null;
    }
  
    const arrNew = arr.map(el => Math.abs(el)).map(el => el *el);
  
   return Math.min(...arrNew);
  };
