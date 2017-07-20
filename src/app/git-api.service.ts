import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class GitApiService {

  constructor(private _http: Http) { }

  retrieveUser(gituser) {
    if (gituser) {
      return this._http.get(`https://api.github.com/users/${gituser}`).map( data => data.json()).toPromise();
    }
  }
}
