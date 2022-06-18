import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register4CamionetaPage } from './register4-camioneta.page';

describe('Register4CamionetaPage', () => {
  let component: Register4CamionetaPage;
  let fixture: ComponentFixture<Register4CamionetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register4CamionetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register4CamionetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
