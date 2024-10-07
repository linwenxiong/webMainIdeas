class bbq {
    private canvas: string | null = null;  // 私有
    public hooksEntity: {
        [propName: string]: any;
      } = {};
    contextMenu: string | null = null;
    adc: number | string = 1;
    init() {
        console.log(this.canvas)
    }
    use() {
        return this;
      }
}

var c = new bbq()
c.contextMenu = 'a'
c.adc = '2'
c.hooksEntity = {}
var a = c.use()
console.log('a', a)