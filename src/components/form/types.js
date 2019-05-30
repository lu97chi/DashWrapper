export type fieldConfig = {
  name: string,
  type?: string,
  style?: CSSProperties,
  component?: React.Component,
};

export type Config = {
  joiValidation?: object,
  fields: Array<fieldConfig>,
  bind?: boolean,
};
