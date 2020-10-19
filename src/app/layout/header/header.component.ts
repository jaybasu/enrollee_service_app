import {
  Component,
  Input,
  OnDestroy
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  Subscription
} from 'rxjs';
import {
  Enrollee
} from 'src/app/models/enrollee.model';
import {
  EnrolleeService
} from 'src/app/services/enrollee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() heading = '';
  @Input() homeLink = '';

  private subscription: Subscription = new Subscription();
  public enrollee: Enrollee;

  constructor(
    public router: Router) {}
}
