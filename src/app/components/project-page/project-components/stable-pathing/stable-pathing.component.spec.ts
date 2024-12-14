import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StablePathingComponent } from './stable-pathing.component';

describe('StablePathingComponent', () => {
  let component: StablePathingComponent;
  let fixture: ComponentFixture<StablePathingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StablePathingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StablePathingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
