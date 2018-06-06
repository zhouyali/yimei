<template>
    <div class="container">
      <header>您好！</header>
      <p class="title">欢迎来到美岸医美登录</p>
      <form>
        <fieldset class="input-group">
          <div class="input-box">
            <i class="user-icon"></i>
            <input type="tel" v-model='phone' placeholder="请输入手机号" maxlength="11" required>
            <i class="instant-delete" v-show="phone" @click="instantDel(0)"></i>
          </div>
          <div class="input-box">
            <i class="psd-icon"></i>
            <input type="password" v-model='password' placeholder="请输入登录密码" required>
            <i class="instant-delete" v-show="password" @click="instantDel(1)"></i>
          </div>
          <div class="btn bottom-submit" :class="{'btn-active':btnActive && flag}" @click="signIn">{{btnMessage}}</div>                     
        </fieldset>
      </form>
      <div class="test" v-show="test">
          <span @click="goData">已有资料</span>
          <span @click="goForm">暂无资料</span>
      </div>
    </div>
</template>
<script>
    export default{
        data() {
          return {
            phone: '',
            password:'',
            flag: false,
            btnMessage:"登录",
            test:false
          }
        },
        created() {


        },
        methods:{
          onCheckPhone() {
                this.phone = this.phone.replace(/[^0-9]+/,'');
          },
          onCheckPsd () {
                this.password = this.password.replace(/[^a-zA-Z0-9_]/,'')
          },
          signIn() {
                if(this.phone == '' || !/^0?1[2|3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.phone)) {
                   $toast.showMsg('请输入正确手机号');
                   return false
                }
                if(this.password == '') {
                    $toast.showMsg("密码不能为空");
                    return false
                } else if(!(/(?![0-9]+$)(?![A-Za-z_]+$)[a-zA-Z0-9_]{8,16}/.test(this.password))){
                    $toast.showMsg("密码格式不正确");
                    return false
                }  
                if(!this.flag) {
                    return false
                }
                this.test = true

          },
          instantDel(n) {
              if(n == 0) {
                  this.phone = ''
              }else {
                  this.password = ''
              }
          },
          goForm() {
              this.$router.push({'path':'/suborder'})
          },
          goData() {
              this.$router.push({'path':'/listDetail'})
          }
        },
        computed: {
            btnActive() {
                if(!this.phone || !this.password) {
                    this.flag = false
                }else {
                    this.flag = true
                }
                return this.phone && this.password
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container{
        height: 100%;
        position: relative;
        overflow: hidden;
        opacity:0;
        background-color: #fff;
        animation:fadeIn .6s forwards;
    }
    header {
        font-size: px2rem(56px);
        color: #333333;
        letter-spacing: 0;
        line-height: px2rem(50px); 
        padding: px2rem(71.1px) 0 px2rem(36px) px2rem(30px);

    }
    .title {
        font-size: px2rem(32px);
        color: #999999;
        letter-spacing: 0;
        line-height: px2rem(32px);  
        margin-left: px2rem(30px); 
        margin-bottom: px2rem(113px);
    }
    .input-box {
        /*width: 100%;*/
        margin-left: px2rem(30px);
        margin-right: px2rem(20px);
        position: relative;
        input {
            height: px2rem(110px);
            /*width: px2rem(690px);*/
            width: 100%;
            @include borders(border-bottom,#E9E9E9);
            padding-left: px2rem(52px);
            font-size: px2rem(28px);
            color: #333;
            letter-spacing: px2rem(-0.78px);          
        }
        input::-webkit-input-placeholder{
            font-size: px2rem(28px);
            color: #BBBBBB;
            line-height: px2rem(32px);
        }
        .user-icon,.psd-icon {
            display: block;
            position: absolute;
            left:0;
            bottom:px2rem(35px);
            width: px2rem(40px);
            height: px2rem(42px);
            &.user-icon {
                background: url('../assets/image/login/phone.png') no-repeat center center;
                background-size: 100%;
            }
            &.psd-icon {
                background: url('../assets/image/login/psd.png') no-repeat center center;
                background-size: 100%;
            }            
        }     
    }
    .btn,.remark {
        text-align: center;
        margin: 0 px2rem(30px);
        /*width: px2rem(690px);*/
    }
    .remark {
        span {
            padding-top: px2rem(40px);
            font-size: px2rem(28px);
            color: #4CA8E0;
            letter-spacing: px2rem(-0.78px);
            line-height: px2rem(28px);        
        }
    }
    .btn {
        /*width: px2rem(690px);*/
        height: px2rem(92px);
        line-height: px2rem(92px);
        margin: px2rem(80px) px2rem(30px) 0;
        color: #999;
        font-size: px2rem(32px);
        background: #ececec;
        border-radius: px2rem(50px);       
    }
    .btn-active{
        color: #fff;
        background-image: linear-gradient(28deg, #FEDD8B 0%, #E3BA71 50%);
    }
    .instant-delete {
        position: absolute;
        right: 0px;
        top: 50%;
        margin-top: px2rem(-15px);
        display: block;
        background:#ccc;
        width: px2rem(40px);
        height: px2rem(40px);
        border-radius: 50%;
        /*background:url('../assets/image/delete.png') no-repeat center center;*/
        background-size: 100%;
        opacity:0;
        transform-origin: 50% 50%;
        animation:rotateIn .4s .2s forwards;
    }
    .test {
        margin:px2rem(100px);
        span {
            display:inline-block;
            width: 45%;
            border-radius: px2rem(10px);
            border: 1px solid pink;
            font-size: px2rem(30px);
            height:px2rem(60px);
            line-height:px2rem(60px);
            text-align: center;
        }
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