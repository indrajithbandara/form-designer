<template lang='pug'>
field-base
  el-input(slot='label' type='text' v-model='schema.label')
  el-input(slot='placeholder' type='text' v-model='schema.placeholder')
  el-input(slot='default-value' type='text' v-model='model[schema.name]')
  el-input(slot='desc' type='textarea' v-model='schema.desc')

</template>
<script>
import FieldBase from './field-base';

export default {
  components: {
    FieldBase,
  },
  props: {
    schema: {
      type: Object,
      default: {},
    },
    model: {
      type: Object,
      default: {},
    },
  },
};
</script>
