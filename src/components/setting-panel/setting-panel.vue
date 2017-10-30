<template lang='pug'>
.setting-panel
  panel(title='工具面板' cls='field-tools')
    .item(v-for='(item, key) in fieldTools' :key='item.type')
      el-button(type='ghost' size='mini' @click='onAdd(item.type)' long) {{item.text}}
  panel(title='属性面板' cls='field-setting')
    field-setting(:schema='curSchema' :model='model' @on-save='onSave')

  panel(title='JSON' cls='field-formated' default-status='min')
    el-input(type='textarea' v-model='formatedSchema' :readonly='true')
  .field-content
    slot
</template>
<script>
import clone from 'clone';
import FieldSetting from '../field-setting';
import defaultSchema from './schema-default';
import Panel from './panel';

export default {
  components: {
    FieldSetting,
    Panel,
  },
  props: {
    curSchema: {
      type: Object,
      default: {},
    },
    model: {
      type: Object,
      default: {},
    },
    schema: {
      type: Object,
      default: {
        fields: [],
        form: {},
        position: [],
      },
    },
  },
  data() {
    return {
      fieldTools: [
        { type: 'input', text: '单行文本' },
        { type: 'textarea', text: '多行文本' },
        { type: 'radio', text: '单选' },
        { type: 'checkbox', text: '多选' },
        { type: 'select', text: '下拉框' },
        { type: 'date', text: '日期' },
        { type: 'datetime', text: '日期时间' },
        { type: 'desc', text: '描述' },
        { type: 'upload', text: '上传' },
        { type: 'rate', text: '评分' },
      ],
    };
  },
  computed: {
    formatedSchema() {
      return JSON.stringify(this.schema, null, 4);
    },
  },
  methods: {
    onAdd(type) {
      const newDefaultSchema = clone(defaultSchema[type]);
      const { position = [] } = this.schema;
      const lastPosition = position[position.length - 1];
      const defaultPosition = {
        x: 0,
        y: lastPosition + 3,
        w: 12,
        h: 3,
        i: new Date().valueOf().toString(),
      };
      this.$emit('on-add', newDefaultSchema, defaultPosition);
    },
    onSave() {
      this.$emit('on-save');
    },
  },
};
</script>
<style lang='less'>
.setting-panel{
  position: relative;
  .field-tools{
    position: absolute;
    left: 0;
    top:0;
    width: 80px;
    .item{
      margin-bottom:5px;
      button{
        width: 100%;
        padding: 7px;
      }
    }
  }
  .field-content{
    margin: 0 290px 0 90px;
    background-color: #fff;
    padding: 10px;
  }
  .field-setting{
    position: absolute;
    width: 280px;
    right: 0;
    top: 0;
  }
  .field-formated{
    .panel-body, .ivu-input-wrapper{
      height: 100%;
    }
    textarea{
      height: 90%;
    }
  }
}
</style>
