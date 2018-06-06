<template>
    <div class="container swiper">  
        <!-- <mt-swipe :auto="4000"> -->
          <!-- <mt-swipe-item v-for="item in slides"> -->
              <!-- <img :src="item.imgUrl"> -->
              <img :src="slides[1].imgUrl">
          <!-- </mt-swipe-item> -->
        <!-- </mt-swipe>  -->
        <!-- <h1>美岸医美在线预约</h1> -->
    <!--     <form>
            <fieldset class="input-group">
                <div class="input-box">
                    <label for="name">您的姓名</label>
                    <input id="name" type="text" v-model='name' placeholder="请输入姓名" required>
                </div>
                <div class="input-box">
                    <label for="phone">您的手机</label>
                    <input id="phone" type="tel" v-model='phone' placeholder="请输入手机" required>
                </div>
                <div class="input-box">
                    <label for="project">预约项目</label>
                    <input id="project" type="text" v-model='project' placeholder="请输入项目" required>
                </div>
                <div class="input-box">
                    <label for="number">预约人数</label>
                    <input id="number" type="number" v-model='number' placeholder="预约人数" required>
                </div>  
                <div class="btn bottom-submit" :class="{'btn-active':btnActive}" @click="Submit">提交</div>                                           
            </fieldset>
        </form> -->
        <div class="test">资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料
资料资料资料资料资料资料资料资料资料资料资料资<br/>料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料<br/>料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料<br/>资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料资料
        </div>
    </div>
</template>
<script>
    import S1 from '../assets/image/slide/s1.jpg'
    import S2 from '../assets/image/slide/s2.jpg'
    import S3 from '../assets/image/slide/s3.jpeg'
    import S4 from '../assets/image/slide/s4.jpg'
    import S5 from '../assets/image/slide/s5.jpg'
    import S6 from '../assets/image/slide/s6.jpg'
    export default{
        data() {
            return {
                name:'',
                phone: '',
                project:'',
                number:'',
                slides:[{'imgUrl':S1},{'imgUrl':S2},{'imgUrl':S3},{'imgUrl':S4},{'imgUrl':S5},{'imgUrl':S6}],
                flag:false              
            }
        },
        created() {
           console.log(S1)
        },
        methods:{
            Submit() {


            }
        },
        computed:{
            btnActive() {
                if(this.phone && this.name && this.project && this.number) {
                    this.flag = true
                }else {
                    this.flag = false
                }
                return this.flag
            },
            swiper() {
                console.log('swiper:'+this.$refs.mySwiper.swiper);
                return this.$refs.mySwiper.swiper
            },
        }
    }
</script>
<style type="text/css">
    .mint-swipe-item {
        height:100px;
    }
</style>
<style lang="scss" scoped>
.test {
    font-size:px2rem(30px);
    line-height: px2rem(80px);
    padding:0  px2rem(20px);
}
    h1 {
        text-align: center;
        margin:px2rem(30px);
    }
    img {
        height:px2rem(420px);
        width: 100%;
    }
    .container{
        height: 100%;
        position: relative;
        overflow: hidden;
        opacity:0;
        animation:fadeIn .6s forwards;
        background:#fff;
    }   

    .input-box {
        margin-left: px2rem(30px);
        margin-right: px2rem(20px);
        position: relative;

        label {
            color: #3c3c3c;
            font-size: px2rem(30px);
        }
        input {
            height: px2rem(70px);
            width: 100%;
            padding-left: px2rem(52px);
            font-size: px2rem(28px);
            color: #333;
            margin:px2rem(20px) 0;
            letter-spacing: px2rem(-0.78px);  
            border-radius: px2rem(6px);   
            background: #fff;   
        }
        input::-webkit-input-placeholder{
            font-size: px2rem(28px);
            color: #BBBBBB;
            letter-spacing: px2rem(-0.78px);
            line-height: px2rem(32px);
        }
    }


    .btn {
        height: px2rem(92px);
        line-height: px2rem(92px);
        margin: px2rem(80px) px2rem(30px) px2rem(40px);
        color: #999;
        background: #1f81c2;
        font-size: px2rem(32px);
        background:#ececec;
        border-radius: px2rem(50px); 
        text-align: center;      
    }
    .btn-active{
        color: #fff;
        background-image: linear-gradient(28deg, #FEDD8B 0%, #E3BA71 50%);
    }


    @keyframes fadeIn {
        0%{opacity:0;transform:translateY(4%);}
        100%{opacity:1;transform:translateY(0px);}
    }
    @keyframes rotateIn {
        0%{opacity:0;transform:translateX(px2rem(20px)) rotateZ(180deg);}
        100%{opacity:1;transform:translateX(0px) rotateZ(0deg);}
    }
</style>