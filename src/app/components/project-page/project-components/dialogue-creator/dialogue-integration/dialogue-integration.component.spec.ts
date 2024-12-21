import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueIntegrationComponent } from './dialogue-integration.component';

describe('DialogueFixtureComponent', () => {
  let component: DialogueIntegrationComponent;
  let fixture: ComponentFixture<DialogueIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogueIntegrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogueIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
