import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListPageComponent } from './my-list-page.component';

describe('MyListPageComponent', () => {
  let component: MyListPageComponent;
  let fixture: ComponentFixture<MyListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
