import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargaOnePage } from './carga-one.page';

describe('CargaOnePage', () => {
  let component: CargaOnePage;
  let fixture: ComponentFixture<CargaOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargaOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
