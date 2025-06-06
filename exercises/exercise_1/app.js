// --- Part 1: Setting Up the Store & Customer ---

// 1. Mastering Variables
const storeName = 'Gadget Haven';
let customerId = 78901;
const isLoggedIn = true;

// 2. Arrays Introduction & JavaScript Objects (availableProducts)
const availableProducts = [
  {
    id: 101,
    name: 'USB-C Hub',
    price: 34.5,
    stock: 30,
    category: 'Accessories',
  },
  {
    id: 102,
    name: 'Mechanical Keyboard',
    price: 89.99,
    stock: 15,
    category: 'Peripherals',
  },
  {
    id: 103,
    name: 'Wireless Mouse',
    price: 25.0,
    stock: 50,
    category: 'Peripherals',
  },
  {
    id: 104,
    name: 'Gaming Monitor',
    price: 299.99,
    stock: 10,
    category: 'Displays',
  },
  {
    id: 105,
    name: 'Webcam 1080p',
    price: 49.99,
    stock: 20,
    category: 'Peripherals',
  },
];

// 3. Arrays Introduction (shoppingCart)
let shoppingCart = [];

// 4. JavaScript Objects (customerProfile)
const customerProfile = {
  firstName: 'Maria',
  lastName: 'Santos',
  hasPremiumMembership: false,
  loyaltyPoints: 180, // Start with some loyalty points
};

console.log('--- Initial Setup ---');
console.log('Store Name:', storeName);
console.log('Available Products:', availableProducts);
console.log('Shopping Cart (initially empty):', shoppingCart);
console.log('Customer Profile:', customerProfile);

// --- Part 2: Managing the Cart & Calculating Totals ---

console.log('\n--- Cart Management ---');

// 1. Functions Basics (Function Declaration): addProductToCart
function addProductToCart(productId, quantity) {
  let foundProduct = null;
  // Find the product in availableProducts
  for (let i = 0; i < availableProducts.length; i++) {
    if (availableProducts[i].id === productId) {
      foundProduct = availableProducts[i];
      break; // Exit loop once product is found
    }
  }

  if (foundProduct) {
    // Add an object { productId: productId, quantity: quantity } to the shoppingCart array.
    shoppingCart.push({ productId: productId, quantity: quantity });
    console.log(`Added ${quantity} x ${foundProduct.name} to cart.`);
  } else {
    // If not found, print a message: "Product not found."
    console.log(`Product with ID ${productId} not found. Cannot add to cart.`);
  }
}

// Call addProductToCart multiple times to populate the cart
addProductToCart(101, 2); // 2 USB-C Hubs
addProductToCart(103, 1); // 1 Wireless Mouse
addProductToCart(102, 1); // 1 Mechanical Keyboard
addProductToCart(104, 1); // 1 Gaming Monitor
addProductToCart(999, 3); // Product that doesn't exist
addProductToCart(105, 10); // Webcam, high quantity to test stock later

console.log('\nCurrent Shopping Cart:', shoppingCart);

console.log('\n--- Calculating Cart Subtotal ---');

// 2. For Loop & Working with Numbers: Calculate cartSubtotal
let cartSubtotal = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  const cartItem = shoppingCart[i]; // Get the current item object from the cart

  let correspondingProduct = null;
  // Find the corresponding product object in availableProducts
  for (let j = 0; j < availableProducts.length; j++) {
    if (availableProducts[j].id === cartItem.productId) {
      correspondingProduct = availableProducts[j];
      break; // Found the product, no need to continue inner loop
    }
  }

  if (correspondingProduct) {
    const itemTotal = correspondingProduct.price * cartItem.quantity;
    cartSubtotal = cartSubtotal + itemTotal;
    console.log(
      `- ${correspondingProduct.name} (x${
        cartItem.quantity
      }): $${itemTotal.toFixed(2)}`
    );
  } else {
    console.warn(
      `- Warning: Item with Product ID ${cartItem.productId} in cart could not be found in available products. Skipping.`
    );
  }
}
console.log(`\nCart Subtotal: $${cartSubtotal.toFixed(2)}`);

console.log('\n--- Shipping & Discount Calculations ---');

// 3. Grasping Booleans & Comparison Operators: Free Shipping
const freeShippingThreshold = 75.0;
let isEligibleForFreeShipping = cartSubtotal >= freeShippingThreshold;
console.log(`Is Eligible for Free Shipping? ${isEligibleForFreeShipping}`);

// 4. Logical Operations & Conditional Statements: Discount Rate
let discountRate = 0;
// Example: Make customer premium for testing
// customerProfile.hasPremiumMembership = true;
// customerProfile.loyaltyPoints = 250;

if (customerProfile.hasPremiumMembership && cartSubtotal > 150.0) {
  discountRate = 0.2; // 20% discount for premium members with large orders
  console.log('Applied 20% discount (Premium + Large Order).');
} else if (customerProfile.hasPremiumMembership) {
  discountRate = 0.1; // 10% discount for premium members
  console.log('Applied 10% discount (Premium Membership).');
} else if (customerProfile.loyaltyPoints > 200) {
  discountRate = 0.05; // 5% discount for high loyalty points
  console.log('Applied 5% discount (High Loyalty Points).');
} else {
  console.log('No special discount applied.');
}
console.log(`Discount Rate: ${(discountRate * 100).toFixed(0)}%`);

// 5. Working with Numbers: Final Price Calculation
let finalPrice = cartSubtotal * (1 - discountRate);

if (!isEligibleForFreeShipping) {
  const shippingFee = 5.0;
  finalPrice += shippingFee; // Add shipping fee
  console.log(`Added shipping fee: $${shippingFee.toFixed(2)}`);
}
console.log(`Final Price: $${finalPrice.toFixed(2)}`);

// 6. Type Conversion (Implicit/Explicit)
console.log('\n--- Type Conversion Examples ---');
const customerIdString = String(customerId); // Explicit conversion Number to String
console.log(
  `Explicit: customerId (${typeof customerId}) to customerIdString (${typeof customerIdString}): "${customerIdString}"`
);

// Implicit conversion: Number to String when concatenating
console.log(
  `Implicit: "Customer ID: " + customerId = "Customer ID: ${customerId}"`
);

// --- Part 3: Checkout and Inventory Management ---

console.log('\n--- Checkout Process ---');

// 1. Switch Statements: Payment Method
let paymentMethod = 'credit_card'; // Try changing this to "paypal", "cash_on_delivery", or "bitcoin"
switch (paymentMethod) {
  case 'credit_card':
    console.log('Processing secure credit card payment.');
    break;
  case 'paypal':
    console.log('Redirecting to PayPal for payment.');
    break;
  case 'cash_on_delivery':
    console.log('Payment due upon delivery.');
    break;
  default:
    console.log('Unsupported payment method. Please choose another option.');
}

// 2. Do-While Loop & Object Methods (Simulating Stock Check & Update)

// Add a method to each product object for stock management
// (Note: In a real app, you'd define this method once as a class method or similar)
availableProducts.forEach((product) => {
  product.decreaseStock = function (amount) {
    if (this.stock >= amount) {
      this.stock -= amount;
      return true; // Stock successfully decreased
    } else {
      return false; // Not enough stock
    }
  };
});

let cartItemIndex = 0;
let outOfStockFound = false;

console.log('\n--- Performing Stock Check & Update ---');
do {
  const item = shoppingCart[cartItemIndex];
  if (item) {
    // Check if item exists (in case cart is empty or index goes out of bounds)
    let productInStock = null;
    // Find the actual product in availableProducts
    for (let i = 0; i < availableProducts.length; i++) {
      if (availableProducts[i].id === item.productId) {
        productInStock = availableProducts[i];
        break;
      }
    }

    if (productInStock) {
      if (!productInStock.decreaseStock(item.quantity)) {
        // Use the new object method
        outOfStockFound = true;
        console.warn(
          `! ALERT: Not enough stock for ${productInStock.name}. Available: ${productInStock.stock}, Requested: ${item.quantity}`
        );
      } else {
        console.log(
          `- Stock updated for ${productInStock.name}. New stock: ${productInStock.stock}`
        );
      }
    } else {
      console.error(
        `Error: Product with ID ${item.productId} in cart no longer exists in inventory.`
      );
      outOfStockFound = true; // Consider this an issue
    }
  }
  cartItemIndex++;
} while (cartItemIndex < shoppingCart.length && !outOfStockFound);

console.log(`\nOut of stock issue found: ${outOfStockFound}`);
console.log(
  'Updated Available Products (check stock levels):',
  availableProducts
);

console.log('\n--- Finalizing Order ---');

// 3. Functions Basics (Function Declaration): generateReportHeader
function generateReportHeader(reportTitle, date) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return `--- ${reportTitle} - Report for ${formattedDate} ---`;
}
console.log(generateReportHeader('Order Confirmation', '2025-06-06'));

// 4. Callback Functions & Function Types (Function Expression / Anonymous)
function processOrderAsync(orderSummary, onOrderFinalized) {
  // onOrderFinalized is the callback
  console.log('Processing order...');
  // Simulate an asynchronous operation (like payment gateway or database update)
  setTimeout(function () {
    // This anonymous function is a function expression and the callback for setTimeout
    console.log('Order processing complete!');
    onOrderFinalized(orderSummary); // Call the provided callback
  }, 1500); // Simulate a 1.5 second delay
}

// Prepare the order summary string
const orderSummaryString = `Order for ${customerProfile.firstName} ${
  customerProfile.lastName
}: Total $${finalPrice.toFixed(2)}. Free shipping: ${
  isEligibleForFreeShipping ? 'Yes' : 'No'
}.`;

// Call processOrderAsync with an anonymous function as the callback
processOrderAsync(orderSummaryString, function (summary) {
  // This is our anonymous callback function expression
  console.log('Order finalized:', summary);
  console.log('Thank you for your purchase!');
});
console.log('Initiated order finalization. Waiting for confirmation...'); // This will print immediately due to setTimeout

// 5. Variable Scope (Observing)
console.log('\n--- Variable Scope Check ---');

// Accessing a variable declared outside any function (global scope for this script)
console.log("Accessing 'storeName' (global scope):", storeName);

function illustrateLocalScope() {
  const tempMessage = 'This is a local message.'; // Declared inside illustrateLocalScope
  console.log(
    "Inside illustrateLocalScope, accessing 'tempMessage':",
    tempMessage
  );
}
illustrateLocalScope();
// Try to access tempMessage here:
// console.log("Outside illustrateLocalScope, trying to access 'tempMessage':", tempMessage);
// UNCOMMENT THE LINE ABOVE TO SEE A REFERENCE ERROR: 'tempMessage is not defined'
// Explanation: 'tempMessage' is local to 'illustrateLocalScope' and cannot be accessed from outside.

// Accessing 'customerId' (global scope) inside generateReportHeader (as we did for robotName in previous example)
// If you add console.log(customerId); inside generateReportHeader, it would work,
// because customerId is declared in the global scope of this script.
