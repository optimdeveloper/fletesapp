import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViajeLocalPage } from './viaje-local.page';

describe('ViajeLocalPage', () => {
  let component: ViajeLocalPage;
  let fixture: ComponentFixture<ViajeLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViajeLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
