import { Component, OnInit } from '@angular/core';
import { UseCase } from '@bank-app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'BankApp';

  constructor(private useCase: UseCase) {}

  ngOnInit(): void {
    this.useCase.execute().then((x) => (this.title = x));
  }
}
