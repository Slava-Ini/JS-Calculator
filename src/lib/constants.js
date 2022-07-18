// TODO: think about simplification by using two dimensional array
// TODO: or probably map each type and value using separate array for them
export const BUTTON_TYPE = {
  INPUT: 'input',
  BITWISE: 'bitwise',
  PRIMITIVE: 'primitive',
  OPERATOR: 'operator',
  CLEAR: 'clear',
  ERASE: 'erase',
  RESULT: 'result',
}

export const INPUT_VALUES = {
  NUMBER: 'Number',
  BIGINT: 'BigInt',
  STRING: 'String',
  SYMBOL: 'Symbol',
  ARRAY: 'Array',
  OBJECT: 'Object',
}

export const BUTTONS = [
  { type: BUTTON_TYPE.INPUT, value: INPUT_VALUES.NUMBER },
  { type: BUTTON_TYPE.INPUT, value: INPUT_VALUES.BIGINT },
  { type: BUTTON_TYPE.INPUT, value: INPUT_VALUES.STRING },
  { type: BUTTON_TYPE.INPUT, value: INPUT_VALUES.SYMBOL },
  { type: BUTTON_TYPE.INPUT, value: INPUT_VALUES.ARRAY },
  { type: BUTTON_TYPE.INPUT, value: INPUT_VALUES.OBJECT },
  { type: BUTTON_TYPE.BITWISE, value: '&' },
  { type: BUTTON_TYPE.BITWISE, value: '|' },
  { type: BUTTON_TYPE.BITWISE, value: '^' },
  { type: BUTTON_TYPE.BITWISE, value: '~' },
  { type: BUTTON_TYPE.BITWISE, value: '<<' },
  { type: BUTTON_TYPE.BITWISE, value: '>>' },
  { type: BUTTON_TYPE.BITWISE, value: '>>>' },
  { type: BUTTON_TYPE.PRIMITIVE, value: 'null' },
  { type: BUTTON_TYPE.OPERATOR, value: '&&' },
  { type: BUTTON_TYPE.OPERATOR, value: '||' },
  { type: BUTTON_TYPE.OPERATOR, value: '+' },
  { type: BUTTON_TYPE.OPERATOR, value: '-' },
  { type: BUTTON_TYPE.PRIMITIVE, value: 'true' },
  { type: BUTTON_TYPE.PRIMITIVE, value: 'NaN' },
  { type: BUTTON_TYPE.OPERATOR, value: '!' },
  { type: BUTTON_TYPE.OPERATOR, value: '??' },
  { type: BUTTON_TYPE.CLEAR, value: 'C' },
  { type: BUTTON_TYPE.ERASE, value: '<-' },
  { type: BUTTON_TYPE.PRIMITIVE, value: 'false' },
  { type: BUTTON_TYPE.PRIMITIVE, value: 'undefined' },
  { type: BUTTON_TYPE.OPERATOR, value: '==' },
  { type: BUTTON_TYPE.OPERATOR, value: '===' },
  { type: BUTTON_TYPE.RESULT, value: '=' },
];

export const WIDTH = {
  NORMAL: '90',
  DOUBLE: '182',
};

export const BUTTON_STYLES = {
  [BUTTON_TYPE.INPUT]: {
    background: 'cyan',
    fontSize: '20',
    width: WIDTH.NORMAL,
  },
  [BUTTON_TYPE.BITWISE]: {
    background: 'purple',
    fontSize: '26',
    width: WIDTH.NORMAL,
  },
  [BUTTON_TYPE.PRIMITIVE]: {
    background: 'pink',
    fontSize: '18',
    width: WIDTH.NORMAL,
  },
  [BUTTON_TYPE.OPERATOR]: {
    background: 'yellow',
    fontSize: '26',
    width: WIDTH.NORMAL,
  },
  [BUTTON_TYPE.ERASE]: {
    background: 'blue',
    fontSize: '28',
    width: WIDTH.NORMAL,
  },
  [BUTTON_TYPE.CLEAR]: {
    background: 'blue',
    fontSize: '28',
    width: WIDTH.NORMAL,
  },
  [BUTTON_TYPE.RESULT]: {
    background: 'blue',
    fontSize: '28',
    width: WIDTH.DOUBLE,
  },
};
