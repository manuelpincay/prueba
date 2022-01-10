import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoLogComponent } from './contacto-log.component';

describe('ContactoLogComponent', () => {
  let component: ContactoLogComponent;
  let fixture: ComponentFixture<ContactoLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
