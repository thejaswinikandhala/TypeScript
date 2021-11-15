class product{
    proId:number;
    proName:string;
    proPrice:number;
    proGst:number;
    constructor(id:number,name:string,price:number,gst:number){
        this.proId=id;
        this.proName=name;
        this.proPrice=price;
        this.proGst=gst;
    }
    display(){
        console.log( this.proId)
        console.log( this.proName)
        console.log( this.proGst+this.proPrice)
        
        
    }
}
var p=new product(101,"teena",300,100);
p.display();
