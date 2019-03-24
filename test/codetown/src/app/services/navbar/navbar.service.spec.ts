import { TestBed } from '@angular/core/testing';

import { NavbarService } from './navbar.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/models/Material';

describe('NavbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[],
      imports:[MaterialModule, RouterTestingModule],
    providers:[NavbarService]
  }));

  it('should be created', () => {
    const service: NavbarService = TestBed.get(NavbarService);
    expect(service).toBeTruthy();
  });
});
