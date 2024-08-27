<template>
    <div class="preview-item">

        <img :src="img"></img>

        <div class="add-to-cart">Add to cart</div>

        
    </div>
    <div>
        <h4>{{ category }}</h4>
            <h3> {{ name }}</h3>
           
            <h5> {{ price }}</h5>
        </div>

</template>
<script setup>
const props = defineProps({
    name: {
            type:String,
            default: 'NoName'
        },
        category: {
            type:String,
            default: 'NoCategory'
        },
        price: {
            type:String,
            default: 'NoPrice'
        },
        img: {
            type:String,
            default: 'NoImg'
        }
})
</script>

<style scoped>
.preview-item {
position: relative;
}
.preview-item img{
width: 200px;
height: 200px;
border-radius: 30px;
}
.add-to-cart{
    position: absolute;
    bottom:0;
    left:0;
    background: white;
    border-radius: 30px;
    padding: 20px;
    border: 1px solid orchid;
    left: 50%;
    transform: translate(-50%);
}
</style>