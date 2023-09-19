import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComformanceToFireCodeComponent } from './comformance-to-fire-code.component';

describe('ComformanceToFireCodeComponent', () => {
  let component: ComformanceToFireCodeComponent;
  let fixture: ComponentFixture<ComformanceToFireCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComformanceToFireCodeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComformanceToFireCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
