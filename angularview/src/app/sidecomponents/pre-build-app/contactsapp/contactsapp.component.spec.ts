import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsappComponent } from './contactsapp.component';

describe('ContactsappComponent', () => {
  let component: ContactsappComponent;
  let fixture: ComponentFixture<ContactsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
