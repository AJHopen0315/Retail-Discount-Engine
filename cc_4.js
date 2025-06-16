// Product inventory array
const products = [
  { name: "Laptop", category: "electronics", price: 1000, inventory: 10 },
  { name: "T-Shirt", category: "apparel", price: 25, inventory: 30 },
  { name: "Apples", category: "groceries", price: 3, inventory: 50 },
  { name: "Detergent", category: "household", price: 10, inventory: 20 },
  { name: "Book", category: "stationery", price: 15, inventory: 40 }
];

// Category-based discounts
for (const product of products) {
  switch (product.category) {
    case "electronics":
      product.price *= 0.8; // 20% off
      break;
    case "apparel":
      product.price *= 0.85; // 15% off
      break;
    case "groceries":
    case "household":
      product.price *= 0.9; // 10% off
      break;
    default:
      // No discount
      break;
  }
}

// Customer type logic
function getExtraDiscountRate(customerType) {
  if (customerType === "student") {
    return 0.05;
  } else if (customerType === "senior") {
    return 0.07;
  } else {
    return 0;
  }
}

// Checkout for 3 customers
const customerTypes = ["regular", "student", "senior"];

for (let i = 0; i < 3; i++) {
  const customer = `Customer ${i + 1}`;
  const type = customerTypes[i];
  const extraDiscount = getExtraDiscountRate(type);
  let totalCost = 0;

  console.log(`\n--- ${customer} (${type}) Checkout ---`);

  // Assume each customer buys one of each item
  for (const product of products) {
    if (product.inventory > 0) {
      let priceAfterDiscount = product.price * (1 - extraDiscount);
      totalCost += priceAfterDiscount;

      product.inventory -= 1; // Reduce inventory
    }
  }

  console.log(`${customer} Total Cost: $${totalCost.toFixed(2)}`);
}

// for...in to log key/value pairs of one product
console.log("\n--- Product Details (After Discount) ---");
const sampleProduct = products[0];
for (const key in sampleProduct) {
  console.log(`${key}: ${sampleProduct[key]}`);
}

// Object.entries and destructuring to log updated products
console.log("\n--- Updated Inventory ---");
for (const product of products) {
  const entries = Object.entries(product);
  let output = "";
  for (const [key, value] of entries) {
    output += `${key}: ${value}, `;
  }
  console.log(output.slice(0, -2)); // Remove trailing comma
}