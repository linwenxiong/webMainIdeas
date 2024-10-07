var bbq = /** @class */ (function () {
    function bbq() {
        this.canvas = null; // 私有
        this.hooksEntity = {};
        this.contextMenu = null;
        this.adc = 1;
    }
    bbq.prototype.init = function () {
        console.log(this.canvas);
    };
    bbq.prototype.use = function () {
        return this;
    };
    return bbq;
}());
var c = new bbq();
c.contextMenu = 'a';
c.adc = '2';
c.hooksEntity = {};
var a = c.use();
console.log('a', a);
