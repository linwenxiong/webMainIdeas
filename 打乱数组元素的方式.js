var arr = [1, 2, 3, 5, 4, 8, 7]
for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
console.log(arr)