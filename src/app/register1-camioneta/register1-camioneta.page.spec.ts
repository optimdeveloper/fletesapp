import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register1CamionetaPage } from './register1-camioneta.page';

describe('Register1CamionetaPage', () => {
  let component: Register1CamionetaPage;
  let fixture: ComponentFixture<Register1CamionetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register1CamionetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register1CamionetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
