import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailComponent } from './city-detail.component';

import { HttpClientModule } from '@angular/common/http';

describe('CityDetailComponent', () => {
  let component: CityDetailComponent;
  let fixture: ComponentFixture<CityDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityDetailComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(CityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
