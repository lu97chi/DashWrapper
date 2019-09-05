export const formConfiguration = [
  {
    label: 'Email',
    placeHolder: 'lu97is@gmail.com',
    initialValue: '',
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
    label: 'Email2',
    placeHolder: 'lu97is@gmail.com',
    initialValue: '',
    cols: 6,
    required: true,
    type: 'string',
    extraValidations: [
      {
        type: 'min',
        validation: 5,
        errorMessage: 'No cumple',
      },
    ],
  },
  {
    label: 'Contraseña2',
    placeHolder: '',
    initialValue: '',
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
    placeHolder: 'lu97is@gmail.com',
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
    placeHolder: '',
    initialValue: 12,
    cols: 19,
    required: false,
    type: 'number',
    extraValidations: [
      {
        type: 'validator',
        errorMessage: 'No se que pedo',
        validation: (rule, value, callBack) => {
          console.log(rule, value, callBack);
          callBack();
        },
      },
    ],
  },
  {
    label: 'Month',
    placeHolder: '',
    initialValue: '',
    cols: 6,
    required: true,
    type: 'month',
  },
  {
    label: 'Date Pikcer',
    placeHolder: '',
    initialValue: '',
    cols: 6,
    required: true,
    type: 'date',
  },
  {
    label: 'Range Picker',
    placeHolder: '',
    initialValue: '',
    cols: 6,
    required: true,
    type: 'range',
  },
  {
    label: 'Time Picker',
    place: '',
    initialValue: '',
    cols: 6,
    required: false,
    type: 'time',
  },
];
