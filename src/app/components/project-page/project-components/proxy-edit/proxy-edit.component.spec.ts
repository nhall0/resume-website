import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyEditComponent } from './proxy-edit.component';

describe('ProxyEditComponent', () => {
  let component: ProxyEditComponent;
  let fixture: ComponentFixture<ProxyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProxyEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProxyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
