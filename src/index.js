//Made up code
//imported chargeCard
const chargeCard = () => 
  new Promise((resolve, reject) => {
    //card is valid
    reject('fail!!!');
    if (true) {
      return resolve(true);
    }
    return reject(false);
  });

chargeCard().then((val) => {
  console.log(val);
}).catch((err) => {
  console.log(err);
});

//Callback hell
// chargeCard('123412341234', (res) => {
//   //time to do something
//   saveToDb(res, () => {
//     //time to do something else
//   });
// });
