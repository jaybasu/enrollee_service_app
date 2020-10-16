import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Enrollee } from '../../models/enrollee.model';

@Component({
  selector: 'app-enrollee-card',
  templateUrl: './enrollee-card.component.html',
  styleUrls: ['./enrollee-card.component.scss']
})
export class EnrolleeCardComponent implements OnInit {
  @Input() enrollee: Enrollee[];
  constructor() {
  }

  ngOnInit() {
  }

}
