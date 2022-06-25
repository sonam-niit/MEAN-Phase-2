import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataintComponent } from './dataint.component';

describe('DataintComponent', () => {
  let component: DataintComponent;
  let fixture: ComponentFixture<DataintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
