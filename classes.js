var PointClass = /** @class */ (function () {
    function PointClass() {
    }
    PointClass.prototype.draw = function () {
        console.log('x:' + this.x + ' - y:' + this.y);
    };
    PointClass.prototype.getDistance = function (another) { };
    return PointClass;
}());
//test
var point1 = new PointClass();
point1.x = 20;
point1.y = 30;
point1.draw();
