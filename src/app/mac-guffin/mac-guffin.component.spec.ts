import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacGuffinComponent } from './mac-guffin.component';

describe('MacGuffinComponent', () => {
  let component: MacGuffinComponent;
  let fixture: ComponentFixture<MacGuffinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacGuffinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacGuffinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
