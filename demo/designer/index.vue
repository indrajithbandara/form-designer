<template lang='pug'>
.form-designer
  form-designer(
    :options='options' 
    :model='model' 
    :schema='schema' 
    @success='handleSuccess' 
    @error='handleError'
  )
</template>
<script>
import FormDesigner from '@/components/form-designer';
import schema from './schema';

export default {
  components: {
    FormDesigner,
  },
  data() {
    return {
      options: [],
      model: {
        name: 'Tim',
        skills: ['Javascript', 'CSS'],
        sex: '男',
        city: '上海',
        desc: '这是一段描述信息',
        startDate: '2016-12-12',
        startTime: '2016-12-12 12:43:32',
        image: 'http://www.baidu.com',
      },
      schema,
    };
  },
  methods: {
    handleSuccess(msg) {
      this.$Message.success(msg);
    },
    handleError() {
      // console.log(msg);
      // this.$Message.error(msg)
    },
  },
};
</script>
