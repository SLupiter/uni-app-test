<template>
   <view class="" style="margin-top: 100upx;margin-left: 70upx;"><text style="text-align: center;">请使用武汉大学图书馆账号密码登录</text></view>
</template>

<script>
    
    import mInput from '../../../components/m-input.vue';

    export default {
        components: {
            mInput
        },
        data() {
            return {
                email: ''
            }
        },
        methods: {
            findPassword() {
                /**
                 * 仅做示例
                 */
                if (this.email.length < 3 || !~this.email.indexOf('@')) {
                    uni.showToast({
                        icon: 'none',
                        title: '邮箱地址不合法',
                    });
                    return;
                }
                uni.showToast({
                    icon: 'none',
                    title: '已发送重置邮件至注册邮箱，请注意查收。',
                    duration: 3000
                });
            }
        }
    }
</script>

<style>
body,
    page {
        min-height: 100%;
        display: flex;
    }

    /* #ifdef MP-BAIDU */
    page {
        width: 100%;
        height: 100%;
        display: block;
    }

    swan-template {
        width: 100%;
        min-height: 100%;
        display: flex;
    }

    /* #endif */

    .content {
        display: flex;
        flex: 1;
        flex-direction: column;
        background-color: #efeff4;
        padding: 20upx;
    }

    .input-group {
        background-color: #ffffff;
        margin-top: 40upx;
        position: relative;
    }

    .input-group::before {
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        height: 1upx;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .input-group::after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1upx;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .input-row {
        display: flex;
        flex-direction: row;
        position: relative;
    }

    .input-row .title {
        width: 20%;
        height: 50upx;
        min-height: 50upx;
        padding: 15upx 0;
        padding-left: 30upx;
        line-height: 50upx;
    }

    .input-row.border::after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 15upx;
        height: 1upx;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .btn-row {
        margin-top: 50upx;
        padding: 20upx;
    }

    button.primary {
        background-color: #0faeff;
    }
</style>
