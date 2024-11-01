
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


class Audios {
  private audio: string;
  public name: string;
  constructor() {
    this.audio = '我是audio'
  }
  getData() {
    console.log('audio', this.audio)
  }
}

class Music extends Audios {
  private music: string;
  constructor() {
    super()
    this.music = '我是music'
  }
  
  init() {
    console.log('music', this.music)
  }
}