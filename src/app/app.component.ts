import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from '@angular/router';
import {
  Subscription
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  pageHeading: string;
  homeLink: string;
  constructor(
    private router: Router, private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pageHeading = this.route.snapshot.firstChild.data.heading;
        this.homeLink = this.route.snapshot.firstChild.data.link;
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
