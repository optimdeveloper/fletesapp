import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartUserPage } from './start-user.page';

describe('StarUserPage', () => {
  let component: StartUserPage;
  let fixture: ComponentFixture<StartUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
