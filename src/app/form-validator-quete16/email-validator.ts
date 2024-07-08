import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator():ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const email = control.value;
        if (email && !email.endsWith('@wilder.school')) {
          return { wilderSchoolEmail: true };
        }
        return null;
      };
}