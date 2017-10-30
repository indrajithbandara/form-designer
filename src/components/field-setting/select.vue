<template lang='pug'>
field-base(cls='field-setting-select')
  el-input(slot='label' type='text' v-model='schema.label')
  el-input(slot='placeholder' type='text' v-model='schema.placeholder')
  el-radio-group(slot='default-value' v-model="model[schema.name]")
    .item(v-for='(item, key) in schema.options' :key='key')
      multiple-setting(@click='dealOption')
        el-radio(slot='left' label=" ")
        el-input(slot='center' type='text' v-model='schema.options[key]')
  el-input(slot='desc' type='textarea' v-model='schema.desc')

</template>
<script>
import FieldBase from './field-base';
import MultipleSetting from './multiple-setting';

export default {
  components: {
    FieldBase,
    MultipleSetting,
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
  methods: {
    dealOption(type) {
      this.$emit(type);
    },
  },
};
</script>
