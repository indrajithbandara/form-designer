<template lang="pug">
.multiple-setting
  .item-left
    slot(name='left')
  .item-center
    slot(name='center')
  .item-right
    span(@click='onClick("add")')
      i.el-icon-plus(title='添加一项')
    span(@click='onClick("remove")')
      i.el-icon-minus(title='删除一项')
    span(@click='onClick("down")')
      i.el-icon-arrow-down(title='向下移动')
    span(@click='onClick("up")')
      i.el-icon-arrow-up(title='向上移动')
</template>
<script>
export default {
  methods: {
    onClick(type) {
      return this.$emit('click', type);
    },
  },
};
</script>
<style lang="less">
.multiple-setting{
  display: flex;
  .item-left{
    width: 24px;
  }
  .item-center{
    flex:1;
  }
  .item-right{
    width: 80px;
    text-align: right;
    i{
      font-size: 12px;
      display: inline-block;
      border-radius:100%;
      cursor: pointer;
      padding: 1px;
      border: 1px solid #333;
      margin-right: 2px;
    }
  }
}
</style>

