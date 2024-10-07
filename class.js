var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bbq = /** @class */ (function () {
    function Bbq() {
        this.str = '我是str';
    }
    Bbq.prototype.getData = function () {
        console.log('234243243242', this.str);
    };
    return Bbq;
}());
var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
    function Editor() {
        var _this = _super.call(this) || this;
        _this.canvas = 'null';
        _this.canvas = '大家好';
        return _this;
    }
    Editor.prototype.init = function () {
        console.log('canvas', this.canvas);
    };
    return Editor;
}(Bbq));
var a = new Editor();
a.getData();
