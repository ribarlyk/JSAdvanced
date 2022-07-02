function onClick() {
  let result = start();
  result.then(onResolve);
  result.catch(onReject);
}
function executor(resolve, reject) {
  console.log("before");
  console.log("after");
  setTimeout(resolve, 2000);
}
function start() {
  let myPrm = new Promise(executor);
  console.log(myPrm);
  return myPrm;
}

function onResolve() {
  console.log("approve");
}
function onReject() {
  console.log("error");
}
