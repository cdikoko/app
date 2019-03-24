import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar/navbar.service';
import { MaterialModule } from '../models/Material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private nav: NavbarService) { }

  ngOnInit() {
  }

}
