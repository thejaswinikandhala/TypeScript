var product = /** @class */ (function () {
    function product(id, name, price, gst) {
        this.proId = id;
        this.proName = name;
        this.proPrice = price;
        this.proGst = gst;
    }
    product.prototype.display = function () {
        console.log(this.proId);
        console.log(this.proName);
        console.log(this.proGst + this.proPrice);
    };
    return product;
}());
var p = new product(101, "teena", 300, 100);
p.display();
