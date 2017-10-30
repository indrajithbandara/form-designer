<template lang='pug'>
field-base
  el-input(type='title' v-model='schema.title')
  el-input(slot='content' type='textarea' v-model='schema.content')

</template>
<script>
export default {
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
