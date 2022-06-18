import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargaThreePage } from './carga-three.page';

describe('CargaThreePage', () => {
  let component: CargaThreePage;
  let fixture: ComponentFixture<CargaThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargaThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
