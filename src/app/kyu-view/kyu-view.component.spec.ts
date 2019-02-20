import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyuViewComponent } from './kyu-view.component';

describe('KyuViewComponent', () => {
  let component: KyuViewComponent;
  let fixture: ComponentFixture<KyuViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyuViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
