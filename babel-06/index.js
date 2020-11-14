// import '@babel/polyfill'

var flag = true

let promise = new Promise(function (reslove, reject) {
  if (flag) {
    reslove('成功')
  } else {
    reject('失败')
  }
})
promise.then(res => {
  console.log('reslove返回结果：' + res)
}, err => {
  console.log('reject返回结果: ' + err)
})

function doubleAfter2seconds(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2 * num)
    }, 1000);
  })
};

async function testResult() {
  let result = await doubleAfter2seconds(30);
  console.log(result);
};
testResult();