import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesEngineComponent } from './rules-engine.component';

describe('RulesEngineComponent', () => {
  let component: RulesEngineComponent;
  let fixture: ComponentFixture<RulesEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesEngineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
