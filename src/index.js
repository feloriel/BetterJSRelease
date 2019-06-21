document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

const makePerson = ({firstName, age, lastName, job}) => {
  return {
    name: firstName + ' ' + lastName,
    age,
    job
  };
};

const dev = makePerson({
  firstName: 'Scott',
  lastName: 'Tolinski',
  age: 32,
  job: 'Web Dev'
});

console.log(dev);

const sayHi = () => console.log('hi');

sayHi();
