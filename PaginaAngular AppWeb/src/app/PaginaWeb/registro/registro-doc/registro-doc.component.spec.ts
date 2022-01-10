import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDocComponent } from './registro-doc.component';

describe('RegistroDocComponent', () => {
  let component: RegistroDocComponent;
  let fixture: ComponentFixture<RegistroDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
