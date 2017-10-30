export default {
  form: {
    action: '/api/user',
    method: 'GET',
    layout: 'vertical', // ['horizontal']
    labelWidth: '80px',
    callback: (formData) => {
      console.log(formData)
    }
  },
  // position: [
  //   {x: 0, y: 0, w: 12, h: 3, i: '0'},
  //   {x: 0, y: 3, w: 12, h: 3, i: '1'},
  //   {x: 0, y: 6, w: 12, h: 3, i: '2'},
  //   {x: 0, y: 9, w: 12, h: 3, i: '3'},
  //   {x: 0, y: 12, w: 12, h: 3, i: '4'},
  //   {x: 0, y: 15, w: 12, h: 3, i: '5'},
  //   {x: 0, y: 18, w: 12, h: 3, i: '6'},
  //   {x: 0, y: 21, w: 12, h: 3, i: '7'}
  // ],
  position: [
    {
      'x': 0,
      'y': 0,
      'w': 4,
      'h': 3,
      'i': '0',
      'moved': false
    },
    {
      'x': 4,
      'y': 0,
      'w': 4,
      'h': 3,
      'i': '1',
      'moved': false
    },
    {
      'x': 8,
      'y': 0,
      'w': 4,
      'h': 3,
      'i': '2',
      'moved': false
    },
    {
      'x': 0,
      'y': 3,
      'w': 12,
      'h': 3,
      'i': '3',
      'moved': false
    },
    {
      'x': 0,
      'y': 6,
      'w': 12,
      'h': 3,
      'i': '4',
      'moved': false
    },
    {
      'x': 0,
      'y': 9,
      'w': 12,
      'h': 3,
      'i': '5',
      'moved': false
    },
    {
      'x': 0,
      'y': 12,
      'w': 12,
      'h': 3,
      'i': '6',
      'moved': false
    },
    {
      'x': 0,
      'y': 15,
      'w': 12,
      'h': 3,
      'i': '7',
      'moved': false
    }
  ],
  list: [{
    type: 'input',
    label: '昵称',
    name: 'name',
    placeholder: '请输入昵称',
    required: false,
    readyonly: false,
    disabled: false,
    visible: true,
    desc: '提示信息',
    rules: [
      {
        required: false,
        message: '姓名不能为空',
        trigger: 'blur'
      }
    ]
  }, {
    type: 'textarea',
    label: '描述',
    name: 'desc',
    placeholder: '请输入描述',
    required: false,
    readyonly: false,
    disabled: false,
    visible: true,
    desc: '提示信息',
    rules: [
      {
        required: false,
        message: '姓名不能为空',
        trigger: 'blur'
      }
    ]
  }, {
    type: 'checkbox',
    label: '技能',
    name: 'skills',
    required: false,
    readyonly: false,
    disabled: false,
    visible: true,
    options: ['Javascript', 'CSS', 'PHP', 'JAVA', 'GO'],
    desc: '提示信息',
    rules: [
      {
        required: false,
        message: '至少选择一个技能'
      }
    ]
  }, {
    type: 'radio',
    label: '性别',
    name: 'sex',
    required: false,
    readyonly: false,
    disabled: false,
    visible: true,
    options: ['男', '女'],
    desc: '提示信息',
    rules: [
      {
        required: false,
        message: '请选择性别'
      }
    ]
  }, {
    type: 'select',
    label: '城市',
    name: 'city',
    required: false,
    readyonly: false,
    disabled: false,
    visible: true,
    options: ['北京', '上海', '南京', '广州'],
    desc: '提示信息',
    rules: [
      {
        required: false,
        message: '请选择城市'
      }
    ]
  }, {
    type: 'date',
    label: '开始日期',
    name: 'startDate',
    required: false,
    readyonly: false,
    disabled: false,
    visible: true,
    desc: '提示信息',
    showTime: false,
    format: 'yyyy-MM-dd',
    rules: [
      {
        required: false,
        message: '请选择开始时间'
      }
    ]
  }, {
    type: 'date',
    label: '开始时间',
    name: 'startTime',
    required: false,
    readyonly: false,
    disabled: false,
    visible: true,
    desc: '提示信息',
    showTime: true,
    format: 'yyyy-MM-dd HH:mm',
    rules: [
      {
        required: false,
        message: '请选择开始时间'
      }
    ]
  }, {
    type: 'upload',
    label: '上传文件',
    name: 'image',
    required: false,
    readyonly: false,
    disabled: false,
    visible: true,
    fileType: 'image', // 'file'
    btnText: '上传文件',
    action: 'http://www.baidu.com',
    desc: '提示信息',
    rules: [
      {
        required: false,
        message: '请上传文件'
      }
    ]
  }]
}
