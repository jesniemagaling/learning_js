const restaurantName = 'OrderQ';
let tableNumber = 7;
const isRestaurantOpen = true;

const menuItems = [
  {
    id: 101,
    name: 'Caesar Salad',
    price: 18.5,
    category: 'Salads',
    isAvailable: true,
  },
  {
    id: 102,
    name: 'Spaghetti',
    price: 12.5,
    category: 'Pastas',
    isAvailable: true,
  },
  {
    id: 103,
    name: 'Fruit Salad',
    price: 13.5,
    category: 'Salads',
    isAvailable: true,
  },
  {
    id: 104,
    name: 'Carbonara',
    price: 12.0,
    category: 'Pastas',
    isAvailable: true,
  },
];

let currentOrder = [];

const restaurantSettings = {
  taxRate: 0.8,
  serviceChargedEnabled: true,
  chefOnDuty: 'Chef Antoine',
};

console.log('Store Name: ', restaurantName);
console.log('Menu List: ', menuItems);
console.log('Your Order: ', currentOrder);
console.log('Restaurant Setup: ', restaurantSettings);

function addDishToOrder(dishId, quantity) {
  let itemAvailable = null;

  for (i = 0; i < menuItems.length; i++) {
    if (menuItems[i].id === dishId) {
      itemAvailable = menuItems[i];
      break;
    }
  }

  if (itemAvailable) {
    currentOrder.push({ dishId: dishId, quantity: quantity });
    console.log(`Added ${dishId} x${quantity} to order.`);
  } else if (menuItems.isAvailable == false) {
    console.log(`Sorry ${menuItems.name} is not available`);
  } else {
    console.log(`${dishId} not found! cannot be added to orders.`);
  }
}

addDishToOrder(101, 1);
addDishToOrder(102, 2);
addDishToOrder(103, 3);
addDishToOrder(104, 4);
addDishToOrder(105, 11);

console.log('Current Order: ', currentOrder);

let subtotalBill = 0;

for (i = 0; i < currentOrder.length; i++) {
  const orders = currentOrder[i];

  let correspondingOrder = null;
  for (j = 0; j < menuItems.length; i++) {
    correspondingOrder = menuItems[j];
    break;
  }

  if (correspondingOrder) {
    const orderTotal = correspondingOrder.price * orders.quantity;
    subtotalBill = subtotalBill + orderTotal;
    console.log(
      `- ${correspondingOrder.name} (x${
        orders.quantity
      }): $${orderTotal.toFixed(2)}`
    );
  } else {
    console.warn(
      `- Warning: Item with Product ID ${orders.productId} in cart could not be found in available products. Skipping.`
    );
  }
}
