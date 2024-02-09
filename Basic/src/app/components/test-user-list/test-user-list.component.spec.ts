import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserListComponent } from './test-user-list.component';

describe('TestUserListComponent', () => {
  let component: TestUserListComponent;
  let fixture: ComponentFixture<TestUserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestUserListComponent]
    });
    fixture = TestBed.createComponent(TestUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
