<template>
    <div class="header">
        <h1>{{message}}</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: 'Hello header!'
        };
    }
};
</script>

<style>
.header{
	color:#f00;
	background:#ccc;
	position:absolute;
	top:0px;
	left:0px;
}
</style>
