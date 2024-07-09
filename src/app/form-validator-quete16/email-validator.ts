import { AbstractControl, ValidationErrors} from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    const domain = '@wilder.school';
    if (email && !email.endsWith(domain)) {
      return { emailDomain: true };
    }
    return null;
  }