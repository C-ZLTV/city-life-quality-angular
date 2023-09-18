import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchComponent } from './city-search.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'

import { CityDetailComponent } from '../city-detail/city-detail.component';

import { ApiService } from 'src/app/services/api.service';


describe('CitySearchComponent', () => {
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitySearchComponent, CityDetailComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [ApiService]
    });
    fixture = TestBed.createComponent(CitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
