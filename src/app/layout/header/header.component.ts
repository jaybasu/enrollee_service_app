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
export class HeaderComponent implements OnDestroy {
  @Input() heading = '';

  private _subscription: Subscription = new Subscription();

  private enrolleeId: string;
  public enrollee: Enrollee;

  searchForm = this.fb.group({
    search: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9-]*')]]
  });

  constructor(
    private enrolleeService: EnrolleeService,
    private fb: FormBuilder,
    private router: Router) {}

  getEnrolleeDetail() {
    if (this.searchForm.valid) {
      this.enrolleeId = this.searchForm.controls['search'].value;
      this.enrolleeService.getEnrolleeDetail(this.enrolleeId)
        // .subscribe(enrolleeDetail => {
        //   this.enrollee = enrolleeDetail;
        //   console.log(this.enrollee);
        // });
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
