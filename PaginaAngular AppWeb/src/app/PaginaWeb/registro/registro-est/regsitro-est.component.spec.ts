import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsitroEstComponent } from './regsitro-est.component';

describe('RegsitroEstComponent', () => {
  let component: RegsitroEstComponent;
  let fixture: ComponentFixture<RegsitroEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegsitroEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsitroEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
