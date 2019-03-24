import { TestBed } from '@angular/core/testing';

import { LoginServiceService } from './login-service.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule,  HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: LoginServiceService = TestBed.get(LoginServiceService);
    expect(service).toBeTruthy();
  });
});
