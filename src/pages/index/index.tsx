import {View} from "@tarojs/components";
import {nextTick, usePageScroll, useReady} from "@tarojs/taro";
import {useEffect} from "react";

function NextTick() {

  nextTick(() => console.log("nextTick"))

  useReady(() => {
    nextTick(() => console.log("useReady nextTick"))
  })

  useEffect(() => {
    console.log("useEffect")
    nextTick(() => console.log("useEffect nextTick"))
  })

  usePageScroll(() => {
    console.log("usePageScroll")
    nextTick(() => console.log("usePageScroll nextTick"))
  })

  return (
    <View style={{height: "200vh"}} />
  );
}

export default NextTick;
