import { Component, Input, OnInit } from '@angular/core';
import { ScoreCategory } from 'src/app/interfaces/score-categories';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent {
  
  @Input() cityScore!: number
  @Input() citySummary!: string
  @Input() cityScoreCategories!: ScoreCategory[]
  @Input() error!: Error | null
}
