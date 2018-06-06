import Vue from 'vue'
import toastOkImg from '@/assets/image/toastIconOk.png';
import toastErrorImg from '@/assets/image/toastIconError.png';

const template = '<transition name="toast">\
                      <div v-if="showToast" class="toast-div">\
                            <img :src="toastOkImg" class=\'toast-icon-ok\' alt="" v-if="type.toLowerCase()==\'ok\'">\
                            <img v-if="type.toLowerCase()==\'error\'" class=\'toast-icon-error\' :src="toastErrorImg" alt="">{{toastMsg}}\
                      </div>\
                   </transition>';
var element = document.createElement('div');
element.id = 'vue-toast'
element.innerHTML = template
document.body.appendChild(element)
var $toast = new Vue({
    el: '#vue-toast',
    data: {
        toastOkImg:toastOkImg,
        toastErrorImg:toastErrorImg,
        showToast: false,
        toastMsg: '',
        // error 哭脸图标  ok 对勾图标
        type:'',
    },
    methods: {
        showMsg:function (msg,type='') {

            var $this = this;
            if($this.showToast === false){                
                $this.type = type;
                $this.toastMsg = msg;
                $this.showToast = true;
                setTimeout(function () {
                    $this.showToast = false;
                },1800)
            }
        }
    }
})
window.$toast = $toast;