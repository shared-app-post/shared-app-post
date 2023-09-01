import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentsComponent } from './coments.component';

describe('ComentsComponent', () => {
  let component: ComentsComponent;
  let fixture: ComponentFixture<ComentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComentsComponent]
    });
    fixture = TestBed.createComponent(ComentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
