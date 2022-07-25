import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Bar, Plot } from '@antv/g2plot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { static: true })
  container!: ElementRef<HTMLDivElement>;
  lineChart: Plot<any> = Plot.getDefaultOptions();
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    setTimeout(() => {
      this.lineChart = Plot.getDefaultOptions();
      this.updateNewChart();
    }, 3000);
  }
  title = 'charts';
  updateNewChart() {
    if (this.lineChart) {
      console.log(this.container.nativeElement);
      const data = [
        { year: '1951 年', value: 38 },
        { year: '1952 年', value: 52 },
        { year: '1956 年', value: 61 },
        { year: '1957 年', value: 145 },
        { year: '1958 年', value: 48 },
      ];
      this.lineChart = new Bar(this.container.nativeElement, {
        data,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left',
        },
      });

      this.lineChart.render();
    }
  }
  update() {
    if (this.lineChart) {
      console.log(this.lineChart);
      const data = [
        { year: '1951 年', value: 24234535325 },
        { year: '1952 年', value: 54654664 },
        { year: '1956 年', value: 9985698 },
        { year: '1957 年', value: 213421424 },
        { year: '1958 年', value: 24234535325 },
      ];
      this.lineChart.update({ data: data });
      this.lineChart.render();
    }
  }
}
