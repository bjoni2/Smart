import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACK_END_API } from 'src/app/_infrastructure/contstants';
import { IList } from '../app-state/entity/abstract/i-list.model';

@Injectable()
export class ListService {
  constructor(protected http: HttpClient) {}

  getListItems(): Observable<IList> {
    let listID: number = 5363950;
    let receipt = 'undefined';
    let httpParams = new HttpParams({
      fromObject: { listID: listID, receipt: receipt },
    });
    return this.http.get<IList>(
      BACK_END_API + 'myapi/List/json/listItems.aspx',
      { params: httpParams }
    );
  }
}
