<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;

  height: 49px;
  background-color: #f2f2f2;

  box-shadow: 0 -3px 1px rgba(100, 100, 100, .1);
}
</style>