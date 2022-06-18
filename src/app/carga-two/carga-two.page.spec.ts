import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargaTwoPage } from './carga-two.page';

describe('CargaTwoPage', () => {
  let component: CargaTwoPage;
  let fixture: ComponentFixture<CargaTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargaTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
