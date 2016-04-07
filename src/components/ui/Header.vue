<template>
    <div class="gr-header">
        <span @click="back">返回</span>Header
    </div>
</template>
<script>
export default {
    methods: {
        back: function () {
            console.log('back...........');
        }
    }
};
</script>
<style>
.gr-header {
    position: absolute; top: 0; left: 0;
    width: 100%; height: 33px;
    line-height: 33px;
    text-align: center;
    background: #ff6600; color: #fff;
}
.gr-header span {
    position: absolute; left: 0; top: 0;
    display: block;
    width: 50px; height: 33px;
}
</style>
