<template lang='pug'>
.field-rules 根据不同表单类型处理不同的规则
  .field-rules-required
    el-checkbox(v-model='schema.required') 是否必填
  .field-rules-disbled
    el-checkbox(v-model='schema.disbled') 是否禁用
  .field-rules-readonly
    el-checkbox(v-model='schema.readonly') 是否只读
  .field-rules-visible
    el-checkbox(v-model='schema.visible') 是否可见
  template(v-if='schema.type === "input"')
    .field-rules-visible
      .sub-title 最小长度
      el-input(v-model='schema.min' placeholder='最小长度')
      .sub-title 最大长度
      el-input(v-model='schema.max' placeholder='最大长度')
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    schema: {
      type: Object,
      required: true,
    },
  },
};
</script>
