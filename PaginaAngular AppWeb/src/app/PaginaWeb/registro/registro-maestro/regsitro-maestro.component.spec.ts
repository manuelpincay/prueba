import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsitroMaestroComponent } from './regsitro-maestro.component';

describe('RegsitroMaestroComponent', () => {
  let component: RegsitroMaestroComponent;
  let fixture: ComponentFixture<RegsitroMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegsitroMaestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsitroMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
