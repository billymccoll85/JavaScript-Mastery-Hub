const products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5},
    {"id": 4, "title": "Samsung Galaxy S20", "price": 799.99, "inventory": 8},
    {"id": 5, "title": "Nike Air Max Shoes", "price": 129.99, "inventory": 15},
    {"id": 6, "title": "Apple AirPods Pro", "price": 249.99, "inventory": 7},
    {"id": 7, "title": "Sony PlayStation 5", "price": 499.99, "inventory": 3},
    {"id": 8, "title": "Fujifilm Instax Mini 11", "price": 69.99, "inventory": 12},
    {"id": 9, "title": "Amazon Echo Dot", "price": 39.99, "inventory": 20},
    {"id": 10, "title": "Fitbit Versa 3", "price": 229.95, "inventory": 6},
    {"id": 11, "title": "Lego Star Wars Millennium Falcon", "price": 159.99, "inventory": 4},
    {"id": 12, "title": "Canon EOS Rebel T7 DSLR Camera", "price": 449.99, "inventory": 9},
    {"id": 13, "title": "Adidas Originals Superstar Sneakers", "price": 79.99, "inventory": 11},
    {"id": 14, "title": "Nintendo Switch", "price": 299.99, "inventory": 5},
    {"id": 15, "title": "Microsoft Surface Pro 7", "price": 899.99, "inventory": 2},
    {"id": 16, "title": "Bose QuietComfort 35 II Headphones", "price": 299.99, "inventory": 8},
    {"id": 17, "title": "Dyson V11 Torque Drive Cordless Vacuum", "price": 599.99, "inventory": 3},
    {"id": 18, "title": "Tom Ford Black Orchid Perfume", "price": 120.00, "inventory": 14},
    {"id": 19, "title": "Samsung 55-inch 4K Smart TV", "price": 999.99, "inventory": 6},
    {"id": 20, "title": "Razer BlackWidow Elite Mechanical Gaming Keyboard", "price": 169.99, "inventory": 10},
    {"id": 21, "title": "LG UltraGear 27-inch Gaming Monitor", "price": 349.99, "inventory": 7},
    {"id": 22, "title": "Nike Epic React Flyknit 2 Running Shoes", "price": 149.99, "inventory": 9},
    {"id": 23, "title": "KitchenAid Stand Mixer", "price": 299.99, "inventory": 4},
    {"id": 24, "title": "Samsung Galaxy Watch 4", "price": 249.99, "inventory": 11},
    {"id": 25, "title": "Instant Pot Duo Evo Plus Pressure Cooker", "price": 129.95, "inventory": 8},
    {"id": 26, "title": "Canon EF 50mm f/1.8 STM Lens", "price": 125.00, "inventory": 6},
    {"id": 27, "title": "Bose SoundLink Color Bluetooth Speaker II", "price": 129.00, "inventory": 13},
    {"id": 28, "title": "Michael Kors Jet Set Travel Tote", "price": 198.00, "inventory": 3},
    {"id": 29, "title": "Garmin Forerunner 945 GPS Running Watch", "price": 599.99, "inventory": 5},
    {"id": 30, "title": "LEGO Architecture Statue of Liberty", "price": 119.99, "inventory": 10}
  ];
  

  export default {
    getProducts() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(products), 100);
      });
    }
  };