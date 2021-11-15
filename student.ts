class student {
    stdId:number=101;
    stdName:string="theja";
    stdClass:string="A";
    display(){
       console.log( this.stdId);
        console.log(this.stdName);
        
    }
}
var S1=new student();
S1.display();