import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeArray', 'received', '') +
  '\n\n' +
  'Expected value to not be an array received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeArray', 'received', '') +
  '\n\n' +
  'Expected value to be an array received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeArray(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
