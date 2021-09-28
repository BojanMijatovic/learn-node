const name = 'Max';

const userAge = 34;

const user = {
  name,
  userAge,
  location: 'Serbia',
};

console.log(user);

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const { label: productLabel, stock, rating = 5 } = product;
console.log(productLabel);
console.log(stock);
