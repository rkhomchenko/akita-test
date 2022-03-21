import {Component, OnInit} from '@angular/core';
import {PostsQuery} from '../../services/posts.query';
import {HttpClient} from '@angular/common/http';
import {withTransaction} from '@datorama/akita';
import {PostsStore} from '../../services/posts.store';
import {delay, filter, switchMap} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: any = this.postsQuery.selectAll();
  loading$ = this.postsQuery.selectLoading();
  currentUser$ = this.postsQuery.selectActive();

  filter$ = this.postsQuery.select(({filter}) => filter)
    .pipe(filter(Boolean));

  constructor(private postsStore: PostsStore,
              private postsQuery: PostsQuery,
              private httpClient: HttpClient) {
  }

  public set activeUser(id: any) {
    this.postsStore.setActive(id);
  }

  ngOnInit(): void {
    this.load().subscribe();
    this.filterObserver();
  }

  setFilter() {
    this.postsStore.setLoading(true);
    this.postsStore.update({filter: {id: 1}});
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

    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts', {params})
      .pipe(
        delay(2000),
        withTransaction((posts: any) => this.postsStore.set(posts))
      );
  }
}
