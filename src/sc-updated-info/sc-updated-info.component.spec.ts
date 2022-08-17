import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScUpdatedInfoComponent } from './sc-updated-info.component';

describe('ScUpdatedInfoComponent', () => {
  let component: ScUpdatedInfoComponent;
  let fixture: ComponentFixture<ScUpdatedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScUpdatedInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScUpdatedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
