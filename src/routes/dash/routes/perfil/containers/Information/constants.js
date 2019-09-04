export const formConfiguration = [
  {
    label: 'Email',
    placeHolder: 'lu97is@gmail.com',
    defaultValue: '',
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
    defaultValue: '',
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
    label: 'Email3',
    placeHolder: 'lu97is@gmail.com',
    defaultValue: '',
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
    defaultValue: 12,
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
];
