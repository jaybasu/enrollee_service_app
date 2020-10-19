import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-enrollee-card',
  templateUrl: './enrollee-card.component.html',
  styleUrls: ['./enrollee-card.component.scss']
})
export class EnrolleeCardComponent {
  @Input() enrollee: any;
}
