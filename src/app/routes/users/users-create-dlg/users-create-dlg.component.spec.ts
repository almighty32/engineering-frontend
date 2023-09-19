import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCreateDlgComponent } from './users-create-dlg.component';

describe('UsersCreateDlgComponent', () => {
  let component: UsersCreateDlgComponent;
  let fixture: ComponentFixture<UsersCreateDlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersCreateDlgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersCreateDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
