import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSettingsFormComponent } from './users-settings-form.component';

describe('UsersSettingsFormComponent', () => {
  let component: UsersSettingsFormComponent;
  let fixture: ComponentFixture<UsersSettingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersSettingsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
