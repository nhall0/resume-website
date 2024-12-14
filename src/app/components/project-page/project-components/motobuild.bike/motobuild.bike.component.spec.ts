import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotobuildBikeComponent } from './motobuild.bike.component';

describe('MotobuildBikeComponent', () => {
  let component: MotobuildBikeComponent;
  let fixture: ComponentFixture<MotobuildBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotobuildBikeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotobuildBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
