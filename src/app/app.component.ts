import { Component } from '@angular/core';
import { GitApiService } from './git-api.service';
import "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hubUser = null;
  score = null;
  gituser = null;
  promise;

  constructor(private _gitApi: GitApiService) {}

  calScore() {
    this.promise = this._gitApi.retrieveUser(this.hubUser)
    if (this.promise) {
      this.promise.then( (user) => {
        if (user.id) {
          this.hubUser = true;
          this.score = user.public_repos + user.followers;
        } else {
          this.hubUser = false;
          this.score = null;
        }
        this.gituser = null;
        console.log(this.gituser)
      })
      .catch( (err) => {
        this.hubUser = false;
      });
    } else {
      this.hubUser = false;
    }
  }

}
