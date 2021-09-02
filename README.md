## nextTick 在微信小程序 usePageScroll 内不执行

```tsx
function NextTick() {

  usePageScroll(() => {
    console.log("usePageScroll")
    nextTick(() => console.log("usePageScroll nextTick"))
  })

  return (
    <View style={{height: "200vh"}}/>
  );
}
```

### H5 中的效果
![h5](https://raw.githubusercontent.com/taroify/taro330-nexttick/main/images/h5.gif)

### weapp 中的效果
![weapp](https://raw.githubusercontent.com/taroify/taro330-nexttick/main/images/weapp.gif)


期望的结果是 weapp 和 h5 一样。
