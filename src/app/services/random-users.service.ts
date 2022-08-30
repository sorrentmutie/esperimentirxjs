import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUserResponse } from '../models/randomUsers';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

   http = inject(HttpClient);

   getRandomUser(): Observable<RandomUserResponse> {
    return this.http.get<RandomUserResponse>("https://randomuser.me/api");
   }


}
