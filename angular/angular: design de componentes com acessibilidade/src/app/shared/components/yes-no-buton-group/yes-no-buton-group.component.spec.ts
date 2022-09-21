import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoButonGroupComponent } from './yes-no-buton-group.component';

describe('YesNoButonGroupComponent', () => {
  let component: YesNoButonGroupComponent;
  let fixture: ComponentFixture<YesNoButonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesNoButonGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoButonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
