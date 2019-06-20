document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

const newArray = ['hi', 'scott', 'newItem', 'spreadftw'];
const [a, b, ...c] = newArray;
// const a = newArray[0];
// const b = newArray[1];

console.log(c);

// const person = {
//   name: 'Scott',
//   age: 32,
//   job: 'Web Dev'
// };

// const makePerson = (name, age, job) => {
//   return {
//     name: name,
//     age: age,
//     job: job
//   }
// }

const makePerson = (name, age, job) => {
  return {
    name,
    age,
    job
  };
};

const dev = makePerson('Scott', 32, 'Web Dev');
//X const name = dev.name;
//X const devName = dev.name;
const { name, ...rest } = dev;

//this.props.names
//const { names } = this.props;
//...this.props

console.log(name, rest);

const sayHi = () => console.log('hi');

sayHi();
