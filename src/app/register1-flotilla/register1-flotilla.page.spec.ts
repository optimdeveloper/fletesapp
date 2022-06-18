import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register1FlotillaPage } from './register1-flotilla.page';

describe('Register1FlotillaPage', () => {
  let component: Register1FlotillaPage;
  let fixture: ComponentFixture<Register1FlotillaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register1FlotillaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register1FlotillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
