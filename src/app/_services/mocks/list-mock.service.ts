import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IList } from 'src/app/app-state/entity/abstract/i-list.model';
import { ListService } from '../list.service';

@Injectable()
export default class ListMockService extends ListService {
  override getListItems(): Observable<IList> {
    return this.http.get<IList>('/assets/data/list.json');
  }
}
