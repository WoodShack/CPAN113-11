class ProductProperties{
    
    constructor(name,price,qty){
        this.name = name;
        this.price = price;
        this.qty = qty;
    }

    getTotalValue(){
        return this.price*this.qty;
    }

    toString(){
        return "Product: "+this.name+", Price: "+this.price+",  Quantity: "+this.qty;
    }
}