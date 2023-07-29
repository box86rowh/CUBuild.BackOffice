import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { BuildService } from '../services/build.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit{
  constructor(private buildService: BuildService){

  }
  ngOnInit(): void {
    this.loadTransactions();
  }

  async loadTransactions() {
    const trans$ = this.buildService.GetTransactions(this.MemberNumber, this.SLIDType, this.SLIDId);
    this.Transactions = await firstValueFrom(trans$);
  }

  displayedColumns: string[] = ['Description', 'Amount', 'IsFee'];
  
  @Input()
  public MemberNumber!: string;

  @Input()
  public SLIDType!: number;

  @Input()
  public SLIDId!: string;

  Transactions: Transaction[] = [];
}
