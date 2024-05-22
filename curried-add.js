
function curriedAdd(total=0) {

  if(arguments.length === 0){
    return total;
  }

  return function finalCurried(num){
    if(num === undefined){
      return total;
    }else{
      return curriedAdd(total + num);
    }
  }
}

module.exports = { curriedAdd };

