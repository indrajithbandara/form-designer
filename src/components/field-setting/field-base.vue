<template lang='pug'>
.field-base(:class='cls')
  .label(v-if='$slots.label')
    .sub-title 标题
    slot(name='label')

  .placeholder(v-if='$slots.placeholder')
    .sub-title 提示
    slot(name='placeholder')

  .default-value(v-if='$slots["default-value"]')
    .sub-title 默认值
    slot(name='default-value')

  //- upload
  .btn-text(v-if='$slots["btn-text"]')
    .sub-title 默认值
    slot(name='btn-text')

  //- date or datetime
  .format(v-if='$slots.format')
    .sub-title 格式
    slot(name='format')

  .desc(v-if='$slots.desc')
    .sub-title 描述
    slot(name='desc')

  //- desc
  .title(v-if='$slots.title')
    .sub-title 标题
    slot(name='title')

  //- desc
  .content(v-if='$slots.content')
    .sub-title 内容
    slot(name='content')

  .rules(v-if='$slots.rules')
    .sub-title 规则
    slot(name='rules')

  slot

</template>
<script>
export default {
  props: {
    cls: {
      default: '',
      required: false,
    },
  },
};
</script>
<style lang='less'>
.field-base{
  .label, .placeholder, .default-value, .btn-text, .format, .desc{
    margin-bottom: 10px;
  }
  .sub-title{
    font-size: 12px;
  }
}
</style>
