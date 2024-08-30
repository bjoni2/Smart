import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MapService } from './_services/map.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private mapService: MapService) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {}
  title = 'Smart-Bjoni';
}
