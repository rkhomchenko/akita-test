import {Component, OnInit} from '@angular/core';
import {UsersQuery} from '../../services/users.query';
import {HttpClient} from '@angular/common/http';
import {withTransaction} from '@datorama/akita';
import {UsersStore} from '../../services/users.store';
import {delay, filter, switchMap} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: any = this.usersQuery.selectAll();
  loading$ = this.usersQuery.selectLoading();
  currentUser$ = this.usersQuery.selectActive();

  filter$ = this.usersQuery.select(({filter}) => filter)
    .pipe(filter(Boolean));

  constructor(private usersStore: UsersStore,
              private usersQuery: UsersQuery,
              private httpClient: HttpClient) {
  }

  public set activeUser(id: any) {
    this.usersStore.setActive(id);
  }

  ngOnInit(): void {
    this.load().subscribe();
    this.filterObserver();
  }

  setFilter() {
    this.usersStore.setLoading(true);
    this.usersStore.update({filter: {id: 1}});
  }

  private filterObserver() {
    this.filter$
      .pipe(
        switchMap((params) => this.load(params))
      )
      .subscribe()
  }

  private load(params = {}): any {
    this.activeUser = null;

    return this.httpClient.get('https://jsonplaceholder.typicode.com/users', {params})
      .pipe(
        delay(2000),
        withTransaction((users: any) => this.usersStore.set(users))
      );
  }
}
