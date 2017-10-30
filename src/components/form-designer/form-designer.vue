<template lang='pug'>
setting-panel(:curSchema='curSchema' :model='model' :schema='schema' @on-add='addField' @on-save='onSave')
  .form-desinger
    el-form(
      :model='model'
      :label-width='schema.form.labelWidth'
      :rules='rules'
      ref='formRef'
    )
      grid-layout(
        :layout="schema.position"
        :col-num="12"
        :row-height="20"
        :is-draggable="isDraggable"
        :is-resizable="isResizable"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
      )
        grid-item(
          v-for="(curSchema, index) in schema.list"
          :key='index'
          :x="schema.position[index].x"
          :y="schema.position[index].y"
          :w="schema.position[index].w"
          :h="schema.position[index].h"
          :i="schema.position[index].i"
          class='form-item-container'
          :class='{draggable: isDraggable, "form-item-active": activeIndex === index}'
          @click.native='fieldClick(curSchema, index)'
        )
          //- draggable(v-model="schema.list" :options="{group:'people'}" @start="drag=true" @end="drag=false")
            //- div(v-for="(curSchema,index) in schema.list")
          //- .form-item-container(:class='{"form-item-active": activeIndex === index}' @click='fieldClick(curSchema, index)')

          //- input
          el-form-item(v-if='curSchema.type === "input"' :label='curSchema.label' :prop='curSchema.name')
            el-input(
              v-model='model[curSchema.name]'
              :placeholder='curSchema.placeholder'
              :disabled='curSchema.disabled'
              :readonly='curSchema.readonly'
            )
            .field-desc {{curSchema.desc}}

          //- textarea
          el-form-item(v-if='curSchema.type === "textarea"' :label='curSchema.label' :prop='curSchema.name')
            el-input(
              type='textarea'
              v-model='model[curSchema.name]'
              :placeholder='curSchema.placeholder'
              :disabled='curSchema.disabled'
              :readonly='curSchema.readonly'
            )
            .field-desc {{curSchema.desc}}

          //- checkbox -->
          el-form-item(v-if='curSchema.type === "checkbox"' :label='curSchema.label' :prop='curSchema.name')
            el-checkbox-group(v-model='model[curSchema.name]')
              el-checkbox(v-for='option in curSchema.options' :key='option' :label='option')
            .field-desc {{curSchema.desc}}

          //- radio
          el-form-item(v-if='curSchema.type === "radio"' :label='curSchema.label' :prop='curSchema.name')
            el-radio-group(v-model='model[curSchema.name]')
              el-radio(v-for='option in curSchema.options' :key='option' :label='option')
            .field-desc {{curSchema.desc}}

          //- select
          el-form-item(v-if='curSchema.type === "select"' :label='curSchema.label' :prop='curSchema.name')
            el-select(v-model='model[curSchema.name]' :transfer='true')
              el-option(v-for='option in curSchema.options' :key='option' :value='option')
            .field-desc {{curSchema.desc}}

          //- date
          el-form-item(v-if='curSchema.type === "date"' :label='curSchema.label' :prop='curSchema.name')
            el-date-picker(type="date" :placeholder="curSchema.placeholder" :value='model[curSchema.name]' :format='curSchema.format' :transfer='true')
            .field-desc {{curSchema.desc}}

          //- upload
          el-form-item(v-if='curSchema.type === "upload"' :label='curSchema.label' :prop='curSchema.name')
            el-upload(
              multiple
              :show-upload-list='curSchema.showUploadlIST'
              :action="curSchema.action"
              :max-size="curSchema.size"
            )
              el-button(type="ghost" icon="ios-cloud-upload-outline") {{curSchema.btnText}}
            .field-desc {{curSchema.desc}}

          //- rate
          el-form-item(v-if='curSchema.type === "rate"' :label='curSchema.label' :prop='curSchema.name')
            el-rate(allow-half show-text v-model="model[curSchema.name]")
              span(style="color: #f5a623") {{ model[curSchema.name] }}
            .field-desc {{curSchema.desc}}

          //- desc
          el-form-item(label='' v-if='curSchema.type === "desc"')
            h3 {{curSchema.title}}
            div {{curSchema.content}}
          
      //- btns
      el-form-item
        el-button(type="primary" @click="handleSubmit('formRef')") 提交

      slot
      //- Col(span='6' class="user-ctrl-form")
      
</template>
<script>
import VueGridLayout from 'vue-grid-layout';
import draggable from 'vuedraggable';
import SettingPanel from '../setting-panel';

const { GridLayout, GridItem } = VueGridLayout;
export default {
  components: {
    SettingPanel,
    GridLayout,
    GridItem,
    draggable,
  },
  props: {
    options: {
      type: Array,
      default: [],
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
    isDraggable: {
      type: Boolean,
      default: true,
    },
    isResizable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      rules: this.getRules(),
      activeIndex: -1,
      curSchema: {},
    };
  },
  methods: {
    getRules() {
      const { schema } = this;
      const rules = {};
      schema.list.forEach((item) => {
        rules[item.name] = item.rules;
      });
      return rules;
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$emit('success', 'submit success!');
        } else {
          this.$emit('error', 'submit error!');
        }
      });
    },
    fieldClick(curSchema, index) {
      if (this.isDraggable) {
        this.activeIndex = index;
        this.curSchema = curSchema;
      }
    },
    addField(curSchema, position) {
      this.schema.list.push(curSchema);
      this.schema.position.push(position);
    },
    onSave() {
      // console.log(this.model, this.schema);
    },
  },
};
</script>
<style lang='less'>
@orange: #fc9153;
.form-desinger{
  .form-item-container{
    /*padding:10px 10px 10px 0;*/
    transition:.5s ease all;
    border:1px dashed transparent;
    outline-color: transparent;
    // margin-bottom:10px;
    &.form-item-active, &.draggable:hover{
      cursor: move;
      outline: 1px dashed @orange;
      box-shadow: 1px 1px 10px rgba(0,0,0,.1)
    }
  }
}
</style>
