<template>
<<<<<<< a0ca1daca63002de3c87b1ed2d9acc7c8f6d273c
    <div class="gr-header">
        <span class="left" @click="backHandler">返回</span>
        Header
        <span class="right" @click="optionHandler">分享</span>
    </div>
</template>
<script>
export default {
    name: 'grHeader',
    methods: {
        backHandler () {
            window.history.back();
        },
        optionHandler () {
            console.log('option');
        }
    }
=======
    <div class="gr-header">Header</div>
    <div>返回</div>
</template>
<script>
export default {
>>>>>>> views-ui
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
.gr-header span.left {
    position: absolute; left: 0; top: 0;
    display: block;
    width: 50px; height: 33px;
}
.gr-header span.right {
    position: absolute; right: 0; top: 0;
    display: block;
    width: 50px; height: 33px;
}
</style>
