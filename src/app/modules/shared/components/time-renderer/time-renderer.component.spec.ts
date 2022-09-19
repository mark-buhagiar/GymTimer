import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRendererComponent } from './time-renderer.component';

describe('TimeRendererComponent', () => {
  let component: TimeRendererComponent;
  let fixture: ComponentFixture<TimeRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
