<template lang='pug'>
  .form-editing
    .title
      span *
      font 选择左侧字段进行配置

    //- input
    field-setting-input(v-if='schema.type === "input"' :schema='schema' :model='model')
    //- 
    //- textarea
    field-setting-textarea(v-else-if='schema.type === "textarea"' :schema='schema' :model='model')

    //- radio
    field-setting-radio(v-else-if='schema.type === "radio"' :schema='schema' :model='model')
    //-
    //- checkbox
    field-setting-checkbox(v-else-if='schema.type === "checkbox"' :schema='schema' :model='model')

    //- select
    field-setting-select(v-else-if='schema.type === "select"' :schema='schema' :model='model')

    //- date
    field-setting-date(v-else-if='schema.type === "date"' :schema='schema' :model='model')

    //- upload
    field-setting-upload(v-else-if='schema.type === "upload"' :schema='schema' :model='model')

    //- desc
    field-setting-desc(v-else-if='schema.type === "desc"' :schema='schema' :model='model')
    
    .operation-container
      el-button(@click='onSave' type='primary') 保存表单
</template>
<script>
import FieldSettingInput from './input';
import FieldSettingTextarea from './textarea';
import FieldSettingRadio from './radio';
import FieldSettingCheckbox from './checkbox';
import FieldSettingSelect from './select';
import FieldSettingDesc from './desc';
// import FieldSettingRate from './rate';
import FieldSettingUpload from './upload';
import FieldSettingDate from './date';

export default {
  components: {
    FieldSettingInput,
    FieldSettingTextarea,
    FieldSettingRadio,
    FieldSettingCheckbox,
    FieldSettingSelect,
    FieldSettingDesc,
    // FieldSettingRate,
    FieldSettingUpload,
    FieldSettingDate,
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
    onSave() {
      this.$emit('on-save');
    },
  },
};
</script>
<style lang='less'>
.form-editing{
  line-height: 22px;
  .operation-container{
    margin:10px;
    text-align: center;
  }
  .title{
    color: #9ea7b4;
    font-size: 12px;
    span{
      color: #ff9900;
    }
  }
}
</style>
