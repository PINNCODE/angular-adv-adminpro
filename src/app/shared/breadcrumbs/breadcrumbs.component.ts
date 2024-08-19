import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent implements OnDestroy{

  public title: string = 'Blank Page'
  private titulo$!: Subscription;

  constructor( private router: Router, private route: ActivatedRoute) {
    this.titulo$ = this.getArgumentosRuta().subscribe( ({ title }) => {
      this.title = title;
    })
  }

  ngOnDestroy(): void {
    this.titulo$.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd),
      filter( (event: any) => event.snapshot?.firstChild === null),
      map( event => event.snapshot.data)
    )

  }

}
