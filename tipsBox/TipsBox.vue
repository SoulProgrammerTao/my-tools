<template>
  <el-dialog v-cloak :visible="visible" width="400px" top="300px" :append-to-body="true" :modal-append-to-body="true" custom-class="status-modal" :modal="false" :close-on-click-modal="false"
  @close="cancel">
    <div slot="title" class="status-modal_title">提示</div>
    <div class="status-modal__content">
      <div class="status-modal__box">
        <div class="success-icon" v-if="icon === 'success'"></div>
        <div class="error-icon" v-if="icon === 'error'"></div>
        <p>{{ message }}</p>
        <div class="countdown-text" v-if="autoHide"><span>{{ time }}</span> 秒</div>
      </div>
      <el-button type="primary" class="status-modal__btn" @click="confirm">{{ btnText }}</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      time: 3,
      icon: '', // 图标
      message: '', // 提示内容
      btnText: '', // 提示按钮文本
      visible: false, // 是否显示
      autoHide: false, // 自动隐藏
      callback: () => {} // 回调函数
    }
  },
  methods: {
    cancel () {
      this.visible = false
    },
    confirm () {
      this.visible = false
      this.callback()
    }
  }
}
</script>
<style lang="less">
.status-modal {
    .el-dialog__header {
        padding: 0;
    }
    .el-dialog__headerbtn {
        top: 9px;
        .el-dialog__close.el-icon.el-icon-close {
            color: #ffffff;
        }
    }
    .el-dialog__body {
        padding: 0;
        height: 201px;
    }
}
.status-modal_title {
    text-align: center;
    color: #ffffff;
    background: #f38901;
    height: 35px;
    line-height: 35px;
}
.status-modal__content {
    padding: 16px 10px;
    background-color: #fff8e8;
    text-align: center;
}
.status-modal__box {
    width: 380px;
    height: 120px;
    background: #ffffff;
    border: 1px solid #cccccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        margin-top: 15px;
    }
    .countdown-text {
      margin-top: 10px;
      span {
        font-size: 18px;
        font-weight: bold;
        color: #f00;
      }
    }
}
.error-icon {
    width: 31px;
    height: 31px;
    background: url("../../assets/images/error.png") center no-repeat;
    background-size: 31px 31px;
}
.success-icon {
    width: 31px;
    height: 31px;
    background: url("../../assets/images/success.png") center no-repeat;
    background-size: 31px 31px;
}
.status-modal__btn {
    margin-top: 17px !important;
    width: 70px !important;
    height: 30px !important;
    line-height: 30px !important;
    padding: 0 !important;
}
</style>
