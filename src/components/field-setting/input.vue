<template lang='pug'>
field-base
  el-input(slot='label' type='text' size='small' v-model='schema.label')
  el-input(slot='placeholder' type='text' size='small' v-model='schema.placeholder')
  el-input(slot='default-value' type='text' size='small' v-model='model[schema.name]')
  el-input(slot='desc' type='textarea' size='small' v-model='schema.desc')

  rules(slot='rules', type='text', :schema='schema')
</div>
</template>
<script>
import FieldBase from './field-base';
import Rules from './rules';

export default {
  components: {
    FieldBase,
    Rules,
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
