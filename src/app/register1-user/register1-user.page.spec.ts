import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register1UserPage } from './register1-user.page';

describe('Register1UserPage', () => {
  let component: Register1UserPage;
  let fixture: ComponentFixture<Register1UserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register1UserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register1UserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
