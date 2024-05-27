## 为什么要做虚拟滚动

如果后端一次性返回了10000条数据，前端如果不加处理，一次性渲染10000条数据，浏览器会非常卡，甚至会崩溃。
针对这种巨量数据渲染的优化方案，就可以用虚拟滚动。

# 原理

虚拟滚动就是将数据分批渲染，当滚动到可视区域时再渲染。
比如：用户屏幕只能容纳10条数据，那么理论上只能看到10条数据，其它数据都是隐藏的。当滚动到第11条时，再渲染第11条，第12条，第13条，直到滚动到第20条。

# 实现思路

1. 最外层容器监听滚动事件，同时获取窗口的高度；
2. 内层容器设置总高度（所有数据的高度），只有这样才能触发滚动事件，否则高度不够无法触发；
3. 再内层容器设置绝对定位，滚动的scrollTop的值就是这个容器的top值；

# 代码层面

```html
<!-- 最外层显示区域，只需要用户窗口的高度，设置 overflow-y: auto; 限制在窗口高度下滚动 -->
    <div class="virtual-scroller" @scroll="onScroll" :style="{height: wrappyHeight + 'px'}">
      <!-- 内层区域，需要获取所有数据显示所需要的高度，这样才能触发滚动事件 -->
      <div class="virtual-scroller_inner" :style="{ height:countHeight+'px'}">
        <ul ref="ul" class="ul" :style="{top: scrollTop+'px'}"> <!-- 最内层的这个元素使用绝对定位，滚动的scrollTop就是这个容器的top值，这样就可以实时的上下移动，给人感觉就像是页面滚动的效果 -->
          <li v-for="item,index in visibleList" :key="index" :style="{height: itemHeight + 'px'}"
            style="background-color:rosybrown; border-top: 1px solid #cfcfcf;">
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
```
