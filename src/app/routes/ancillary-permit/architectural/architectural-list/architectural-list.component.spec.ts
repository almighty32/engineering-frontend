import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturalListComponent } from './architectural-list.component';

describe('ArchitecturalListComponent', () => {
  let component: ArchitecturalListComponent;
  let fixture: ComponentFixture<ArchitecturalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitecturalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitecturalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
