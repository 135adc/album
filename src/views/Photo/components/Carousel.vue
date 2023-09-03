<template>
  <div class="img-box">
    <img src="https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2F%E5%8A%A8%E6%BC%AB%2Fdongman%20(32).jpeg" alt="">
    <div class="box-info">
        <text>CaoAI图库</text>

        <div class="inputbox">
            <img src="../../../assets/image/搜索.png" alt="">
            <input type="text" placeholder="搜索图片">
        </div>
      
        <div class="text-box">
            图片来自网络,侵权即删.
        </div>
    </div>
   
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.img-box{
    position: relative;
    height: 450px;
    overflow: hidden;
    border-radius: 10px;
    img{
        width: 100%;
    }

    .box-info{
        position: absolute;
        z-index: 99;
        top: 30%;
        left: 50%; // 关键点！！
        transform: translateX(-50%);  // 关键点！！

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    text{
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 20px;
        color: white;
        }
    .inputbox{
        display: flex;
        align-items: center;
        width: 500px;
        height: 40px;
        padding: 0 5px;
        border: 1px solid rgb(193, 193, 193);
        background-color: rgba(255, 255, 255,0.3);
        border-radius: 5px;

        img{
            width: 25px;
            height: 25px;
        }
        input{
            background: none;
            margin-left: 10px;
            font-size: 16px;
            outline:none;
            border: none;
            width: 90%;
            height: 30px;
        }
    }
   
    .text-box{
        color: white;
        margin-top: 100px;
        font-size: large;
    }

    }
   
    
}
</style>