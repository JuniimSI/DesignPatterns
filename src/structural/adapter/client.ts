import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('VALIDO');
  } else {
    console.log('INVALIDO');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('VALIDO');
  } else {
    console.log('INVALIDO');
  }
}

validaEmailClass(new EmailValidatorClassAdapter(), 'email@email.com');
validaEmailFn(emailValidatorFnAdapter, 'email@email.com');
