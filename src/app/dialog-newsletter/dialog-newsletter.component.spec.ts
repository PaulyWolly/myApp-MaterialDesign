import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewsletterComponent } from './dialog-newsletter.component';

describe('DialogNewsletterComponent', () => {
  let component: DialogNewsletterComponent;
  let fixture: ComponentFixture<DialogNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
