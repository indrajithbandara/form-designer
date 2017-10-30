<template lang='pug'>
field-base(cls='field-setting-date')
  el-input(slot='label' type='text' v-model='schema.label')
  el-date-picker(slot='default-value' type="date" :value='model[schema.name]' :placeholder="schema.placeholder" :format='schema.format' style="width: 200px")
  el-input(slot='desc' type='textarea' v-model='schema.desc')
  el-input(slot='format' type='text' v-model='schema.format')

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
  methods: {
    dealOption(type) {
      this.$emit(type);
    },
  },
};
</script>
<style lang='less'>
.field-setting-date{
  .item{
    display:flex;
  }
  .item-left{
    width:24px;
  }
  .item-center{
    flex:1;
  }
  .item-right{
    width:90px;
    text-align:right;
  }
}
</style>
