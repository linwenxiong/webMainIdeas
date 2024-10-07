# apply的使用
```javascript 
function _apply_help(arg1,arg2) {
    console.log(arg1, arg2, this) // 当函数体有this的时候，那么就可以用apply来改变this的指向
}
_apply_help.apply(null, [1,2]) // 传null，那么this将指向window
_apply_help.apply( { name: 'lin' },  [1,2]) // 传对象，那么this指向这个对象
```
.apply() 接受两个参数，第一个参数是this的指向，第二个参数是数组，数组中的元素作为参数传递给函数。
