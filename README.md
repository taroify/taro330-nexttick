## nextTick 在微信小程序 usePageScroll 不执行

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

### weapp 中的效果
