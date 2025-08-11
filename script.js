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

class PerishableProductProperties extends ProductProperties{
    constructor(name,price,qty,exp){
        super(name,price,qty);
        this.exp = exp;
    }

    toString(){
        return "Product: "+this.name+
               ", Price: "+this.price+
               ", Quantity: "+this.qty+
               ", Expiration: "+this.exp;
    }
}