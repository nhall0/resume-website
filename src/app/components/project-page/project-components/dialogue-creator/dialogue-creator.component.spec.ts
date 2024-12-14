import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueCreatorComponent } from './dialogue-creator.component';

describe('DialogueCreatorComponent', () => {
  let component: DialogueCreatorComponent;
  let fixture: ComponentFixture<DialogueCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogueCreatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogueCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
