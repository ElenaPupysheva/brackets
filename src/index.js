module.exports = function check(str, bracketsConfig) {
  // your solution
  const openBR=["(","[","{","|"];
  const brPair={
    [")"]: "(",
    ["]"]: "[",
    ["}"]: "{",
    ["|"]: "|" 
    // ['1']: '2',
    // ['3']: '4',
    // ['5']: '6',
    // ['7']: '7',
    // ['8']: '8'
  };
  let stack=[];
  for (let i=0;i<str.length;i++){
    let currentSymbol=str[i];  
  if (openBR.includes(currentSymbol)){
    stack.push(currentSymbol);
  }
  else {
    if (stack.length === 0){
      return false;
    }
    let topElement=stack[stack.length-1];
    if (brPair[currentSymbol] === topElement){
      stack.pop();
    }
    else {return false;}
    }
  }
  if (stack.length===0) {
    return true
  }
  
}

