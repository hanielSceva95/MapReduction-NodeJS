import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapreduceComponentComponent } from './mapreduce-component.component';

describe('MapreduceComponentComponent', () => {
  let component: MapreduceComponentComponent;
  let fixture: ComponentFixture<MapreduceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapreduceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapreduceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
