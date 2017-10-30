<template lang='pug'>
.panel-container(:class='panelCls')
  h3.panel-title {{title}}
    .panel-icon-wrapper
    //-
      Icon.panel-icon.panel-icon-reset(type='record' @click.native='onPanelIconClick("reset")' title='重置')
      Icon.panel-icon.panel-icon-min(type='minus-round' @click.native='onPanelIconClick("min")'  title='最小化')
      Icon.panel-icon.panel-icon-max(type='arrow-resize' @click.native='onPanelIconClick("max")'  title='最大化')
  .panel-body
    slot
</template>
<script>
export default {
  props: {
    title: {
      require: true,
    },
    cls: {
      required: false,
      default: '',
    },
    defaultStatus: {
      required: false,
    },
  },
  data() {
    return {
      status: '',
    };
  },
  computed: {
    panelCls() {
      let result = this.cls || '';
      if (this.status) {
        result += ` panel-${this.status}`;
      } else if (this.defaultStatus) {
        result += ` panel-${this.defaultStatus}`;
      }
      return result;
    },
    minPanelCount() {
      let count = 0;
      if (this.$parent && this.$parent.$el) {
        const panelMin = this.$parent.$el.querySelector('.panel-min');
        if (panelMin) {
          count = panelMin.length;
        }
      }
      return count;
    },
  },
  methods: {
    onPanelIconClick(status) {
      this.status = status;
    },
  },
};
</script>
<style lang='less'>
.panel-container{
    background-color:#fafafa;
    border-radius: 3px;
    border:1px solid #ddd;
    transition: .2s ease all;
    &:hover{
      .panel-icon-wrapper{
        display:block;
      }
    }
    &.panel-min{
      position: fixed;
      right: 20px;
      width: 280px;
      bottom: 0;
      .panel-body{
        height: 0;
        padding: 0;
        overflow: hidden;
      }
    }
    &.panel-max{
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top:0;
      z-index: 100;
      .panel-body{
        overflow:auto;
      }
    }
    .panel-title{
      font-size: 12px;
      font-weight: bold;
      padding: 4px 6px;
      border-bottom: 1px solid #ddd;
      background-color:#ddd;
      position: relative;
    }
    .panel-icon-wrapper{
      display:none;
      position: absolute;
      right: 4px;
      top: 6px;
      color:transparent;
      &:hover{
        color: rgba(0, 0, 0, .4);
      }
      .panel-icon{
        cursor: pointer;
        font-size: 12px;
        width: 16px;
        height: 16px;
        line-height: 15px;
        text-align: center;
        border-radius: 50%;
        border-width:1px;
        border-style: solid;
        transform: scale(0.8);
        margin-right: 4px;
        &.panel-icon-reset{
          border-color: darken(#fc635e, 10%);
          background-color:#fc635e;
        }
        &.panel-icon-min{
          border-color: darken(#fdbe41, 10%);
          background-color:#fdbe41;
        }
        &.panel-icon-max{
          border-color: darken(#35cb4b, 10%);
          background-color:#35cb4b;
        }
      }
    }
    .panel-body{
      padding: 8px;
      &:after{
        content: '';
        display: block;
        height:0;
        visibility: hidden;
        clear: both;
      }
    }
  }
</style>
