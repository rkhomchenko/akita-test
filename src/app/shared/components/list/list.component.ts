import {AfterContentInit, Component, ContentChild, ElementRef, Inject, OnInit, TemplateRef} from '@angular/core';
import {EntityStore, QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {QUERY, STORE} from '../../utils/tokens';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterContentInit {
  @ContentChild('entityTemplate') entityTemplate!: TemplateRef<ElementRef>;

  public list$!: Observable<any[]>;
  public active$!: Observable<any>;
  public loading$!: Observable<boolean>;

  constructor(@Inject(STORE) private store: EntityStore,
              @Inject(QUERY) private query: QueryEntity<any>) {
  }

  public set active(id: any) {
    this.store.setActive(id);
  }

  ngOnInit(): void {
    this.list$ = this.query.selectAll();
    this.active$ = this.query.selectActive();
    this.loading$ = this.query.selectLoading();
  }

  ngAfterContentInit() {
    console.log(this.entityTemplate);
  }
}
