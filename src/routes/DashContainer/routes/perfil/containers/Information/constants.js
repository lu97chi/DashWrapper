export const formConfiguration = [
  {
    label: 'Email',
    placeholder: 'lu97is@gmail.com',
    selector: 'email',
    initialValue: '2342',
    cols: 6,
    required: true,
    type: 'string',
    extraValidations: [
      {
        type: 'pattern',
        validation: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        errorMessage: 'No cumple',
      },
    ],
  },
  {
    label: 'Emaifdsal2',
    placeholder: 'lu97is@gmail.com',
    selector: 'email2',
    initialValue: '',
    cols: 6,
    type: 'string',
    extraValidations: [
      {
        type: 'required',
        validation: true,
        errorMessage: 'Campo requerido',
      },
      {
        type: 'min',
        validation: 5,
        errorMessage: 'No cumple',
      },
    ],
  },
  {
    label: 'Contraseña2',
    placeholder: '',
    initialValue: '',
    selector: 'password',
    cols: 6,
    required: true,
    type: 'password',
    extraValidations: [
      {
        type: 'min',
        validation: 5,
        errorMessage: 'Muy corta',
      },
    ],
  },
  {
    label: 'Email3',
    placeholder: 'lu97is@gmail.com',
    selector: 'email3',
    initialValue: '',
    cols: 6,
    required: true,
    type: 'string',
    extraValidations: [
      {
        type: 'max',
        validation: 10,
        errorMessage: 'No cumple',
      },
      {
        type: 'min',
        validation: 2,
        errorMessage: 'No cumple',
      },
      {
        type: 'pattern',
        validation: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        errorMessage: 'No cumple',
      },
    ],
  },
  {
    label: 'Custom',
    placeholder: '',
    initialValue: 12,
    selector: 'custom',
    cols: 19,
    required: false,
    type: 'number',
    extraValidations: [
      {
        type: 'validator',
        errorMessage: 'No se que pedo',
        validation: (rule, value, callBack) => {
          callBack();
        },
      },
    ],
  },
  // date inputs
  {
    label: 'Month',
    placeholder: '',
    initialValue: '',
    selector: 'month',
    cols: 6,
    required: true,
    type: 'month',
  },
  {
    label: 'Fecha nacimiento',
    placeholder: '',
    initialValue: '',
    selector: 'birthDate',
    cols: 6,
    required: true,
    type: 'date',
  },
  {
    label: 'Rango de seleccion',
    placeholder: '',
    initialValue: '',
    selector: 'selectionRange',
    cols: 6,
    required: true,
    type: 'range',
  },
  {
    label: 'Hora de seleccion',
    initialValue: '',
    placeholder: 'este es un placeholder',
    selector: 'selectionTime',
    cols: 6,
    required: false,
    type: 'time',
  },
  // selector inputs
  {
    label: 'Texto plano',
    initialValue: 'China rules!',
    placeholder: 'este es un placeholder',
    hint: 'china',
    selector: 'plain',
    cols: 24,
    type: 'plain',
  },
  {
    label: 'select',
    initialValue: '',
    placeholder: 'select',
    selector: 'select',
    cols: 24,
    type: 'select',
    // required on select
    options: [
      {
        label: 'red',
        value: 'rojo',
      },
      {
        label: 'azul',
        value: 'blue',
      },
    ],
  },
  {
    label: 'multiple',
    initialValue: undefined,
    placeholder: 'multiple',
    selector: 'multipleSelect',
    cols: 12,
    type: 'multiple',
    // required on multiple
    options: [
      {
        label: 'red',
        value: 'rojo',
      },
      {
        label: 'azul',
        value: 'blue',
      },
    ],
  },
  {
    label: 'switch',
    initialValue: '',
    placeholder: 'switch',
    selector: 'switch',
    cols: 24,
    type: 'switch',
    // required on swtich, empty orientation for hide
    hintHorientation: 'right',
    hint: 'Este el hint del switch',
  },
  {
    label: 'slider',
    initialValue: '',
    placeholder: 'es un slider',
    selector: 'slider',
    cols: 24,
    type: 'slider',
    // required on slider
    options: {
      0: 'A',
      20: 'B',
      40: 'C',
      60: 'D',
      80: 'E',
      100: 'F',
    },
  },
  {
    label: 'radio',
    initialValue: '',
    placeholder: 'es un radio',
    selector: 'radio',
    cols: 12,
    type: 'radio',
    // required on radio
    options: [
      {
        label: '1',
        value: 1,
      },
      {
        label: '2',
        value: 2,
      },
    ],
  },
  {
    label: 'radioButton',
    initialValue: '',
    placeholder: 'es un button',
    selector: 'radioButton',
    cols: 12,
    type: 'radioButton',
    // rqeuired on radiobutton
    options: [
      {
        label: '1',
        value: 1,
      },
      {
        label: '2',
        value: 2,
      },
    ],
  },
  {
    label: 'checkBox',
    initialValue: ['B', 'C'],
    placeholder: 'es checkbox',
    selector: 'checkBox',
    cols: 24,
    type: 'checkBox',
    // required on checkbox
    options: [
      {
        label: 'C',
        value: 'C',
        cols: 6,
      },
      {
        label: 'B',
        value: 'B',
        cols: 6,
      },
      {
        label: 'A',
        value: 'A',
        cols: 6,
      },
    ],
  },
  {
    label: 'rate',
    initialValue: 3.5,
    placeholder: 'rate',
    selector: 'rate',
    cols: 12,
    type: 'rate',
  },
  {
    label: 'upload',
    initialValue: '',
    placeholder: '',
    selector: 'upload',
    cols: 24,
    type: 'upload',
  },
  {
    label: 'draggable',
    initialValue: '',
    placeholder: '',
    selector: 'draggable',
    cols: 24,
    type: 'draggable',
  },
];
