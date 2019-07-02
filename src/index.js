//Made up code
//imported chargeCard
const chargeCard = () => 
  new Promise((resolve, reject) => {
    //card is valid
    // reject('fail!!!');
    if (true) {
      return resolve(true);
    }
    return reject(false);
  });

const chargeCC = async (ccNumber) => {
  try {
    const result = await chargeCard(ccNumber);
    console.log(result);
    return result;
  } catch(error) {
    console.log(error);
  }
};

console.log(chargeCC('23412341234'));

//Callback hell
// chargeCard('123412341234', (res) => {
//   //time to do something
//   saveToDb(res, () => {
//     //time to do something else
//   });
// });
