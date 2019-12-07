<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
html,body {
  background-color: #fff;
  font-family: sans-serif;
  height: 100%;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}
img {
  vertical-align: middle;
}
.out {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.little{
  transform: scale(0.8)
}
.upDown{
  position: absolute;
  top: 50%;
  transform: translateY(-50%)
}
.leftRight{
  position: absolute;
  left: 50%;
  transform: translateX(-50%)
}
</style>
