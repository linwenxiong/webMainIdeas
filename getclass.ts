<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
<textarea id="textarea" style="width: 300px; height: 500px;"></textarea>
<textarea id="cssbox" style="width: 300px; height: 500px;"></textarea>
<button onclick="getLevel1Class()">一级获取</button>
<button onclick="gethtml()">获取html</button>
<div id="content"></div>
<script>
 const templateStr = `
    <div class="material-box">
        <div class="column-gruop-list">
            <div class="column-gruop-list-title">任务列表</div>
            <div class="column-gruop-list-search">搜索框</div>
            <div class="column-gruop-list-content">
                <div class="column-gruop-list-item">
                    <div class="column-gruop-list-item-header">
                        2024/10/158 19:38
                        <el-button type="primary" size="mini">开始</el-button>
                    </div>
                    <div class="column-gruop-list-item-footer">
                        文件名
                    </div>
                </div>
            </div>
        </div>
        <div class="column-gruop-table">
            table
        </div>
    </div>
 
`;

class GetClassName {
    // template = '';
    constructor(template) {
        // this.template = template;
        // this.formatDom()
    }

    formatDom(template) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        return doc.querySelectorAll('*');
    }

    getClass(_eleStr) {
        this.elementsWithClass = this.formatDom(_eleStr)
        console.log(this.elementsWithClass);
        // 创建一个 Set 来存储唯一的类名
        const classSet = new Set();
        var  temp = []
        for(let element of this.elementsWithClass) {
            if(element.localName === 'template') {
                temp =  this.getClass(element.innerHTML)
                break
            } 
            const classes = element.classList; 
            classes.forEach(className => classSet.add(className));
            temp = Array.from(classSet);
        }
        return temp
    }

    formatCss() {
        const classList = this.getClass(document.getElementById('textarea').value)
        const row = classList.map(item => `.${item}{}`).join('\n')
        return row
    }

    formatlavercss() {
        // const _eleStr = document.getElementById('textarea').value
        const _eleStr = templateStr
        this.elementsWithClass = this.formatDom(_eleStr) 
        for(let element of this.elementsWithClass) {
            console.log(element.localName, element.children);
            element.children.forEach(item => {
               console.log(item.className, 9988);
            })
        }
    }


}

const doms = new GetClassName(templateStr);

function gethtml() {
    document.getElementById('cssbox').value = doms.formatCss();
}

function getLevel1Class() {
    doms.formatlavercss();
}


  </script>
</body>

</html>