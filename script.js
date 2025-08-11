//Classes
class ProductProperties{
    constructor(name,price,qty){
        this.name = name;
        this.price = price;
        this.qty = qty;
    }

    //Returns the total value
    getTotalValue(){
        return this.price*this.qty;
    }

    //Product to string
    toString(){
        return "Product: "+this.name+
               ", Price: "+this.price+
               ", Quantity: "+this.qty;
    }

    //Apply discount to an array of products
    static applyDiscount(products, discount){
        for (const product of products){
            product.price = product.price * (1.0 - discount)
        }
    }
}

class PerishableProductProperties extends ProductProperties{
    constructor(name,price,qty,exp){
        super(name,price,qty);
        this.exp = exp;
    }

    //Perishable product to string
    toString(){
        return "Product: "+this.name+
               ", Price: "+this.price+
               ", Quantity: "+this.qty+
               ", Expiration: "+this.exp;
    }
}

class Store{
    constructor(){
        //Initialize inventory array
        this.inventory = [];
    }

    //Add a product to the inventory array
    addProduct(product){
        this.inventory.push(product);
    }

    //Returns the total value of the inventory
    getInventoryValue(){
        let value = 0;

        for (const product of this.inventory){
            value += product.getTotalValue();
        }

        return value;
    }

    //Find a product using it's name
    findProductByName(name){
        for (const product of this.inventory){
            if(product.name === name){
                return product;
            }
        }

        return null;
    }
}

//Part 2 Task
let milk = new PerishableProductProperties("Milk",5,3,"Aug 17, 2025");
let cheese = new PerishableProductProperties("Cheese",3,5,"Aug 16, 2025");

console.log(milk.toString()+" Total Value: $"+milk.getTotalValue());
console.log(cheese.toString()+" Total Value: $"+cheese.getTotalValue());

// Part 5
let myStore = new Store();
let canOfBeans = new ProductProperties("Can Of Beans",1,10);
let mrNoodles = new ProductProperties("Mr.Noodles",2,7);
let tuna = new ProductProperties("Tuna",3,3);
let skimMilk = new PerishableProductProperties("Skim Milk",6,2,"Aug 19, 2025");
let cottageCheese = new PerishableProductProperties("Cottage Cheese",7,5,"Aug 20, 2025");

myStore.addProduct(canOfBeans);
myStore.addProduct(mrNoodles);
myStore.addProduct(tuna);
myStore.addProduct(skimMilk);
myStore.addProduct(cottageCheese);

console.log("myStore value before discount: $"+myStore.getInventoryValue());
ProductProperties.applyDiscount(myStore.inventory,0.15);
console.log("myStore value after discount: $"+myStore.getInventoryValue());
console.log("Find tuna: "+myStore.findProductByName("Tuna"))