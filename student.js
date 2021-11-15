var student = /** @class */ (function () {
    function student() {
        this.stdId = 101;
        this.stdName = "theja";
        this.stdClass = "A";
    }
    student.prototype.display = function () {
        console.log(this.stdId);
        console.log(this.stdName);
    };
    return student;
}());
var S1 = new student();
S1.display();
