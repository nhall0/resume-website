import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatMapComponent } from './cat-map.component';

describe('CatMapComponent', () => {
  let component: CatMapComponent;
  let fixture: ComponentFixture<CatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
