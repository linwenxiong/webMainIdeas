// class Bbq {
//   public str: string;
//   constructor() {
//     this.str = '我是str'
//   }
//   getData() {
//     console.log('234243243242',this.str)
//   }
// }
// class Editor extends Bbq {
//   private canvas = 'null';
//   constructor() {
//     super()
//     this.canvas = '大家好'
//   }
//   init() {
//     console.log('canvas', this.canvas)
//   }
// }
// var a = new Editor()
// a.getData()
var Audios = /** @class */ (function () {
    function Audios() {
        this.audio = '我是audio';
    }
    Audios.prototype.getData = function () {
        console.log('audio', this.audio);
    };
    return Audios;
}());
