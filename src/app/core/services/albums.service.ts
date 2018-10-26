import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlbumsModel} from '../models/albumModel';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) {
  }

  public getAlbume(): Observable<Array<AlbumsModel>> {
    return this.http.get <Array<AlbumsModel>>(`${environment.serverName}albums`);
  }
}
