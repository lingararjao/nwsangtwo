import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LftsdbarComponent } from './lftsdbar.component';

describe('LftsdbarComponent', () => {
  let component: LftsdbarComponent;
  let fixture: ComponentFixture<LftsdbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LftsdbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LftsdbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
