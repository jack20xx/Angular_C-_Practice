import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { AccountService } from '../_services/account.service';
import { HttpClientModule } from '@angular/common/http';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let accountServiceSpy: jasmine.SpyObj<AccountService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AccountService', ['login', 'logout']);

    TestBed.configureTestingModule({
      declarations: [NavComponent],
      providers: [{ provide: AccountService, useValue: spy }],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    accountServiceSpy = TestBed.inject(AccountService) as jasmine.SpyObj<AccountService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login method on login()', () => {
    // Arrange
    component.model = { /* mock data */ };

    // Act
    component.login();

    // Assert
    expect(accountServiceSpy.login).toHaveBeenCalledWith(component.model);
  });

  it('should call logout method on logout()', () => {
    // Act
    component.logout();

    // Assert
    expect(accountServiceSpy.logout).toHaveBeenCalled();
  });
});
