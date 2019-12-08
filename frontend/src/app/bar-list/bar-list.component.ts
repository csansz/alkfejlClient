import { Component, OnInit } from '@angular/core';
import { Bar } from '../models/bar';
import { BarService } from '../services/bar.service';

@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.css']
})
export class BarListComponent implements OnInit {
  public bars: Bar[];
  public selectedBar: Bar;

  private allBars: Bar[] = [];

  constructor(
    private barService: BarService
  ) { }

  async ngOnInit(): Promise<void> {
    this.allBars = await this.barService.getBars();
    this.filter();
  }

  onSelectBar(bar: Bar): void{
    this.selectedBar = bar;
  }

  onDeleteClick(id: number) {
    this.barService.deleteBar(id)
    .then(async () => {
      this.selectedBar = null;
      this.allBars = await this.barService.getBars();
      this.filter();
    })
  }

  onNewClick(): void {
    this.selectedBar = new Bar();
  }

  async onFormSubmit(bar: Bar): Promise<void> {
    if (bar.id > 0) {
      await this.barService.updateBar(bar)
      this.selectedBar.name = bar.name;
      this.selectedBar.zipCode = bar.zipCode;
      this.selectedBar.city = bar.city;
      this.selectedBar.street = bar.street;
      this.selectedBar.houseNumber = bar.houseNumber;
    } else {
      this.selectedBar.id = Math.floor(Math.random()*184597);
      this.selectedBar.name = bar.name;
      this.selectedBar.zipCode = bar.zipCode;
      this.selectedBar.city = bar.city;
      this.selectedBar.street = bar.street;
      this.selectedBar.houseNumber = bar.houseNumber;
      this.barService.createBar(bar)
                        .then(createdBar => {
                          this.allBars.push(createdBar);
                        });
    }
    this.selectedBar = null;
  }

  private filter(): void{
    this.bars = this.allBars;
  }
}
