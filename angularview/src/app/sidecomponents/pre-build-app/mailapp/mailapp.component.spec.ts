import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailappComponent } from './mailapp.component';

describe('MailappComponent', () => {
  let component: MailappComponent;
  let fixture: ComponentFixture<MailappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
