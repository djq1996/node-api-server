import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { UtilService } from '../service/util.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  notes = [];
  constructor(private http: HttpService, private util: UtilService) {}

  ngOnInit() {
    this.http.listPost().subscribe((res: any) => {
      if (res.success) {
        this.notes = res.data;
      }
      console.log(res);
    });
  }
}
