<template lang='pug'>
field-base
  el-input(slot='label' type='text' v-model='schema.label')
  el-input(slot='placeholder' type='text' v-model='schema.placeholder')
  el-input(slot='default-value' type='text' v-model='defaultValue')
  el-input(slot='desc' type='textarea' v-model='schema.desc')

</template>
<script>
import FieldBase from './field-base';

export default {
  components: {
    FieldBase,
  },
  props: {
    label: {
      type: String,
      default: '未命名',
    },
    defaultValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请输入...',
    },
    desc: {
      type: String,
      default: '',
    },
  },
};
</script>
