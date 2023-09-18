import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ScoreCategory } from 'src/app/interfaces/score-categories';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent {

  apiService = inject(ApiService)

  cityUrl!: string
  cityScoresUrl!: string

  cityScore!: number
  citySummary!: string
  cityScoreCategories!: ScoreCategory[]

  error: Error | null = null
  
  searchCity(city:string){
    this.apiService.searchCity(city).pipe(
      tap((data) => {
        this.cityUrl = data._embedded["city:search-results"][0]._links["city:item"].href

        this.getCity()
      })
    )
    .subscribe()
  }

  getCity(){
    this.apiService.getCity(this.cityUrl).pipe(
      tap((data) => {
        this.cityScoresUrl = data._links['city:urban_area'].href
       this.getCityScores()
      })
    )
    .subscribe()
  }

  getCityScores() {
    this.apiService.getCityScores(this.cityScoresUrl).pipe(
      tap((data) => {
        this.cityScore = Math.round(data.teleport_city_score)
        this.cityScoreCategories = data.categories
        this.citySummary = data.summary
      }),
      tap({error: (error: Error) => this.error = error}),
    )
    .subscribe()
  }
}
