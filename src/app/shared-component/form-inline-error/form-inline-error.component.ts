import {
  Component,
  Input
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-form-inline-error',
  templateUrl: './form-inline-error.component.html',
  styleUrls: ['./form-inline-error.component.scss']
})
export class FormInlineErrorComponent {

  @Input() errorControlName: FormControl;
  @Input() isSubmitted: boolean;
  @Input() messageConfig: {
    required: string;
    pattern: string;
  }

  // constructor() { }

  // ngOnInit() {
  // }

}
