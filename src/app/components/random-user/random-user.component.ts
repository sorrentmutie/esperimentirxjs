import { Component, inject, OnInit } from '@angular/core';
import { Result } from 'src/app/models/randomUsers';
import { RandomUsersService } from 'src/app/services/random-users.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {

  users: Result[] = [];
  private service = inject(RandomUsersService);

  ngOnInit(): void {
    this.service.getRandomUser().subscribe(x => this.users = x.results);
  }

}
