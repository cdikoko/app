import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './models/Material';
import { RouterOutlet } from '@angular/router';
import { NavbarService } from './services/navbar/navbar.service';
import { HomeComponent } from './home/home.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule, RouterTestingModule],
      declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        HomeComponent
      ],
      providers:[NavbarService]
    }).compileComponents(
    );
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'codetown'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('codetown');
  });
});
