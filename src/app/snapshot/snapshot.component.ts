import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Account } from '../models/account';
import { BuildService } from '../services/build.service';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.scss']
})
export class SnapshotComponent implements OnInit {
  constructor(private buildService: BuildService) { }
  ngOnInit(): void {
    this.loadAccount();
  }

  Result: string = '';
  
  Account?: Account;

  async loadAccount() {
    const account$ = this.buildService.GetAccount('0000013454');
    this.Account = await firstValueFrom(account$);
  }
}
