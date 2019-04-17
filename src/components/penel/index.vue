<!-- crated：2019/4/17  author：Monster  -->
<template>
    <div class="we-panel">
        <div class="we-panel-hd">
            <div class="we-panel-hd-l">
                <slot name="titles"></slot>
            </div>
            <div class="we-panel-hd-r">
                <slot name="options"></slot>
            </div>
        </div>
        <div class="we-panel-bd">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'we-panel'
  };
</script>
<style rel="stylesheet/less" lang="less">
    .we-panel {
        display: flex;
        flex-direction: column;
        width: 400px;
        border: 1px solid lightgray;
        .we-panel-hd {
            height: 35px;
            display: flex;
            border-bottom: 1px solid lightgray;
            .we-panel-hd-l {
                flex: 1;
                padding-left: 15px;
                display: flex;
                align-items: center;
                font-size: 18px;
                background-color: paleturquoise;
            }
            .we-panel-hd-r {
                min-width: 100px;
                background-color: pink;
                display: flex;
                padding-right: 15px;
                font-size: 14px;
                align-items: center;
                justify-content: flex-end;
            }
        }
        .we-panel-bd {
            padding: 15px;
        }
    }
</style>
