import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register3CamionetaPage } from './register3-camioneta.page';

describe('Register3CamionetaPage', () => {
  let component: Register3CamionetaPage;
  let fixture: ComponentFixture<Register3CamionetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register3CamionetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register3CamionetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
