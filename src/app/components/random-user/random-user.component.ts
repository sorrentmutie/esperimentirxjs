import { Component, inject, OnInit } from '@angular/core';
import { RandomUsersService } from 'src/app/services/random-users.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {

  private service = inject(RandomUsersService);

  ngOnInit(): void {
    this.service.getRandomUser().subscribe(x => console.log(x));
  }

}
