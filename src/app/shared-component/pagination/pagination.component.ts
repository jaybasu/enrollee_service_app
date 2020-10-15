import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

import {
  MyPagination
} from '../../models/pagination.model'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
  public pagesArray: Array < number > = [];
  public currentPage: number = 1;

  @Input() set setPagination(pagination: MyPagination) {
    if (pagination) {
      const pagesAmount = Math.ceil(
        pagination.itemsCount / pagination.pageSize
      );
      this.pagesArray = new Array(pagesAmount).fill(1);
    }
  }
  @Output() goToPage = new EventEmitter < number > ();
  public setPage(pageNumber: number): void {
    if (pageNumber === this.currentPage)
      return;
    this.currentPage = pageNumber;
    this.goToPage.emit(pageNumber);
  }
}
