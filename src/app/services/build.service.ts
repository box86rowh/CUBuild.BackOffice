import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(private http:HttpClient) { }

  Account: Account = {
    MemberNumber: 'XXXXXX1234',
    Shares: [
      {
        Description: 'Prime Share',
        Id: '0000',
        Balance: 100.00
      }
    ],
    Loans: [
      {
        Description: 'Auto Loan',
        Id: '0061',
        Balance: 42000.01
      },
      {
        Description: 'Home Loan',
        Id: '0062',
        Balance: 420000.01
      }
    ],
    Prime: {
      First: 'Joe',
      Last: 'Jones',
      HomePhone: '',
      Email: '',
      BirthDate: '01/01/2000'
    }
  }

  Transactions: Transaction[] = [
    {
      "Amount": 50.00,
      "Description": "Amatos Pizza",
      "IsFee": false,
      "Sequence": "123",
      "PostDate": new Date(),
      "PostTime": "1:00AM"
    },
    {
      "Amount": 12.25,
      "Description": "Movie Tickets",
      "IsFee": true,
      "Sequence": "456",
      "PostDate": new Date(),
      "PostTime": "6:30PM"
    },
    {
      "Amount": 35.60,
      "Description": "Gas Station",
      "IsFee": false,
      "Sequence": "789",
      "PostDate": new Date(),
      "PostTime": "11:15AM"
    },
    {
      "Amount": 18.99,
      "Description": "Bookstore",
      "IsFee": false,
      "Sequence": "101112",
      "PostDate": new Date(),
      "PostTime": "4:45PM"
    },
    {
      "Amount": 5.00,
      "Description": "Parking Fee",
      "IsFee": true,
      "Sequence": "131415",
      "PostDate": new Date(),
      "PostTime": "9:20AM"
    },
    {
      "Amount": 42.80,
      "Description": "Restaurant",
      "IsFee": false,
      "Sequence": "161718",
      "PostDate": new Date(),
      "PostTime": "7:00PM"
    },
    {
      "Amount": 15.50,
      "Description": "Concert Tickets",
      "IsFee": true,
      "Sequence": "192021",
      "PostDate": new Date(),
      "PostTime": "10:10PM"
    },
    {
      "Amount": 30.20,
      "Description": "Clothing Store",
      "IsFee": false,
      "Sequence": "222324",
      "PostDate": new Date(),
      "PostTime": "2:30PM"
    },
    {
      "Amount": 8.75,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "252627",
      "PostDate": new Date(),
      "PostTime": "8:40AM"
    },
    {
      "Amount": 60.00,
      "Description": "Electronics Store",
      "IsFee": true,
      "Sequence": "282930",
      "PostDate": new Date(),
      "PostTime": "3:55PM"
    },
    {
      "Amount": 22.35,
      "Description": "Grocery Store",
      "IsFee": false,
      "Sequence": "313233",
      "PostDate": new Date(),
      "PostTime": "9:10AM"
    },
    {
      "Amount": 75.50,
      "Description": "Amusement Park",
      "IsFee": true,
      "Sequence": "343536",
      "PostDate": new Date(),
      "PostTime": "5:20PM"
    },
    {
      "Amount": 14.80,
      "Description": "Cinema",
      "IsFee": false,
      "Sequence": "373839",
      "PostDate": new Date(),
      "PostTime": "11:30AM"
    },
    {
      "Amount": 27.95,
      "Description": "Bookstore",
      "IsFee": false,
      "Sequence": "404142",
      "PostDate": new Date(),
      "PostTime": "4:00PM"
    },
    {
      "Amount": 10.50,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "434445",
      "PostDate": new Date(),
      "PostTime": "8:00AM"
    },
    {
      "Amount": 48.25,
      "Description": "Restaurant",
      "IsFee": false,
      "Sequence": "464748",
      "PostDate": new Date(),
      "PostTime": "6:15PM"
    },
    {
      "Amount": 19.90,
      "Description": "Grocery Store",
      "IsFee": false,
      "Sequence": "495051",
      "PostDate": new Date(),
      "PostTime": "10:25AM"
    },
    {
      "Amount": 65.40,
      "Description": "Electronics Store",
      "IsFee": true,
      "Sequence": "525354",
      "PostDate": new Date(),
      "PostTime": "3:30PM"
    },
    {
      "Amount": 16.75,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "555657",
      "PostDate": new Date(),
      "PostTime": "9:50AM"
    },
    {
      "Amount": 55.00,
      "Description": "Movie Tickets",
      "IsFee": true,
      "Sequence": "585960",
      "PostDate": new Date(),
      "PostTime": "1:45PM"
    },
    {
      "Amount": 28.15,
      "Description": "Clothing Store",
      "IsFee": false,
      "Sequence": "616263",
      "PostDate": new Date(),
      "PostTime": "5:40PM"
    },
    {
      "Amount": 7.80,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "646566",
      "PostDate": new Date(),
      "PostTime": "8:15AM"
    },
    {
      "Amount": 70.00,
      "Description": "Amusement Park",
      "IsFee": true,
      "Sequence": "676869",
      "PostDate": new Date(),
      "PostTime": "4:20PM"
    },
    {
      "Amount": 13.90,
      "Description": "Cinema",
      "IsFee": false,
      "Sequence": "707172",
      "PostDate": new Date(),
      "PostTime": "10:45AM"
    },
    {
      "Amount": 32.80,
      "Description": "Gas Station",
      "IsFee": false,
      "Sequence": "737475",
      "PostDate": new Date(),
      "PostTime": "3:00PM"
    },
    {
      "Amount": 11.25,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "767778",
      "PostDate": new Date(),
      "PostTime": "9:00AM"
    },
    {
      "Amount": 45.50,
      "Description": "Restaurant",
      "IsFee": false,
      "Sequence": "798081",
      "PostDate": new Date(),
      "PostTime": "5:00PM"
    },
    {
      "Amount": 23.40,
      "Description": "Bookstore",
      "IsFee": false,
      "Sequence": "828384",
      "PostDate": new Date(),
      "PostTime": "11:15AM"
    },
    {
      "Amount": 80.20,
      "Description": "Electronics Store",
      "IsFee": true,
      "Sequence": "858687",
      "PostDate": new Date(),
      "PostTime": "3:40PM"
    },
    {
      "Amount": 20.75,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "888990",
      "PostDate": new Date(),
      "PostTime": "9:35AM"
    },
    {
      "Amount": 68.00,
      "Description": "Movie Tickets",
      "IsFee": true,
      "Sequence": "919293",
      "PostDate": new Date(),
      "PostTime": "2:15PM"
    },
    {
      "Amount": 26.65,
      "Description": "Clothing Store",
      "IsFee": false,
      "Sequence": "949596",
      "PostDate": new Date(),
      "PostTime": "6:00PM"
    },
    {
      "Amount": 6.90,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "979899",
      "PostDate": new Date(),
      "PostTime": "8:30AM"
    },
    {
      "Amount": 72.50,
      "Description": "Amusement Park",
      "IsFee": true,
      "Sequence": "100101",
      "PostDate": new Date(),
      "PostTime": "4:50PM"
    },
    {
      "Amount": 11.40,
      "Description": "Cinema",
      "IsFee": false,
      "Sequence": "102103",
      "PostDate": new Date(),
      "PostTime": "11:00AM"
    },
    {
      "Amount": 31.20,
      "Description": "Gas Station",
      "IsFee": false,
      "Sequence": "104105",
      "PostDate": new Date(),
      "PostTime": "2:45PM"
    },
    {
      "Amount": 9.75,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "106107",
      "PostDate": new Date(),
      "PostTime": "9:15AM"
    },
    {
      "Amount": 46.80,
      "Description": "Restaurant",
      "IsFee": false,
      "Sequence": "108109",
      "PostDate": new Date(),
      "PostTime": "5:30PM"
    },
    {
      "Amount": 24.10,
      "Description": "Bookstore",
      "IsFee": false,
      "Sequence": "110111",
      "PostDate": new Date(),
      "PostTime": "11:40AM"
    },
    {
      "Amount": 85.80,
      "Description": "Electronics Store",
      "IsFee": true,
      "Sequence": "112113",
      "PostDate": new Date(),
      "PostTime": "4:20PM"
    },
    {
      "Amount": 22.25,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "114115",
      "PostDate": new Date(),
      "PostTime": "10:00AM"
    },
    {
      "Amount": 75.00,
      "Description": "Movie Tickets",
      "IsFee": true,
      "Sequence": "116117",
      "PostDate": new Date(),
      "PostTime": "2:00PM"
    },
    {
      "Amount": 29.50,
      "Description": "Clothing Store",
      "IsFee": false,
      "Sequence": "118119",
      "PostDate": new Date(),
      "PostTime": "6:15PM"
    },
    {
      "Amount": 7.40,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "120121",
      "PostDate": new Date(),
      "PostTime": "8:20AM"
    },
    {
      "Amount": 77.50,
      "Description": "Amusement Park",
      "IsFee": true,
      "Sequence": "122123",
      "PostDate": new Date(),
      "PostTime": "4:35PM"
    },
    {
      "Amount": 10.60,
      "Description": "Cinema",
      "IsFee": false,
      "Sequence": "124125",
      "PostDate": new Date(),
      "PostTime": "11:20AM"
    },
    {
      "Amount": 28.00,
      "Description": "Gas Station",
      "IsFee": false,
      "Sequence": "126127",
      "PostDate": new Date(),
      "PostTime": "2:15PM"
    },
    {
      "Amount": 9.25,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "128129",
      "PostDate": new Date(),
      "PostTime": "9:40AM"
    },
    {
      "Amount": 49.20,
      "Description": "Restaurant",
      "IsFee": false,
      "Sequence": "130131",
      "PostDate": new Date(),
      "PostTime": "5:45PM"
    },
    {
      "Amount": 21.75,
      "Description": "Bookstore",
      "IsFee": false,
      "Sequence": "132133",
      "PostDate": new Date(),
      "PostTime": "11:50AM"
    },
    {
      "Amount": 90.20,
      "Description": "Electronics Store",
      "IsFee": true,
      "Sequence": "134135",
      "PostDate": new Date(),
      "PostTime": "4:40PM"
    },
    {
      "Amount": 23.75,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "136137",
      "PostDate": new Date(),
      "PostTime": "10:30AM"
    },
    {
      "Amount": 80.00,
      "Description": "Movie Tickets",
      "IsFee": true,
      "Sequence": "138139",
      "PostDate": new Date(),
      "PostTime": "2:30PM"
    },
    {
      "Amount": 27.20,
      "Description": "Clothing Store",
      "IsFee": false,
      "Sequence": "140141",
      "PostDate": new Date(),
      "PostTime": "6:30PM"
    },
    {
      "Amount": 8.10,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "142143",
      "PostDate": new Date(),
      "PostTime": "8:50AM"
    },
    {
      "Amount": 82.50,
      "Description": "Amusement Park",
      "IsFee": true,
      "Sequence": "144145",
      "PostDate": new Date(),
      "PostTime": "4:10PM"
    },
    {
      "Amount": 12.80,
      "Description": "Cinema",
      "IsFee": false,
      "Sequence": "146147",
      "PostDate": new Date(),
      "PostTime": "11:40AM"
    },
    {
      "Amount": 35.10,
      "Description": "Gas Station",
      "IsFee": false,
      "Sequence": "148149",
      "PostDate": new Date(),
      "PostTime": "2:00PM"
    },
    {
      "Amount": 9.90,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "150151",
      "PostDate": new Date(),
      "PostTime": "9:55AM"
    },
    {
      "Amount": 51.50,
      "Description": "Restaurant",
      "IsFee": false,
      "Sequence": "152153",
      "PostDate": new Date(),
      "PostTime": "6:00PM"
    },
    {
      "Amount": 25.50,
      "Description": "Bookstore",
      "IsFee": false,
      "Sequence": "154155",
      "PostDate": new Date(),
      "PostTime": "12:00PM"
    },
    {
      "Amount": 88.20,
      "Description": "Electronics Store",
      "IsFee": true,
      "Sequence": "156157",
      "PostDate": new Date(),
      "PostTime": "4:50PM"
    },
    {
      "Amount": 24.25,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "158159",
      "PostDate": new Date(),
      "PostTime": "10:50AM"
    },
    {
      "Amount": 90.00,
      "Description": "Movie Tickets",
      "IsFee": true,
      "Sequence": "160161",
      "PostDate": new Date(),
      "PostTime": "2:45PM"
    },
    {
      "Amount": 26.75,
      "Description": "Clothing Store",
      "IsFee": false,
      "Sequence": "162163",
      "PostDate": new Date(),
      "PostTime": "6:45PM"
    },
    {
      "Amount": 8.60,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "164165",
      "PostDate": new Date(),
      "PostTime": "8:40AM"
    },
    {
      "Amount": 85.00,
      "Description": "Amusement Park",
      "IsFee": true,
      "Sequence": "166167",
      "PostDate": new Date(),
      "PostTime": "4:30PM"
    },
    {
      "Amount": 13.20,
      "Description": "Cinema",
      "IsFee": false,
      "Sequence": "168169",
      "PostDate": new Date(),
      "PostTime": "12:15PM"
    },
    {
      "Amount": 37.40,
      "Description": "Gas Station",
      "IsFee": false,
      "Sequence": "170171",
      "PostDate": new Date(),
      "PostTime": "1:45PM"
    },
    {
      "Amount": 10.15,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "172173",
      "PostDate": new Date(),
      "PostTime": "10:20AM"
    },
    {
      "Amount": 54.80,
      "Description": "Restaurant",
      "IsFee": false,
      "Sequence": "174175",
      "PostDate": new Date(),
      "PostTime": "6:15PM"
    },
    {
      "Amount": 26.50,
      "Description": "Bookstore",
      "IsFee": false,
      "Sequence": "176177",
      "PostDate": new Date(),
      "PostTime": "12:30PM"
    },
    {
      "Amount": 89.80,
      "Description": "Electronics Store",
      "IsFee": true,
      "Sequence": "178179",
      "PostDate": new Date(),
      "PostTime": "5:20PM"
    },
    {
      "Amount": 28.25,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "180181",
      "PostDate": new Date(),
      "PostTime": "11:10AM"
    },
    {
      "Amount": 95.00,
      "Description": "Movie Tickets",
      "IsFee": true,
      "Sequence": "182183",
      "PostDate": new Date(),
      "PostTime": "3:30PM"
    },
    {
      "Amount": 27.65,
      "Description": "Clothing Store",
      "IsFee": false,
      "Sequence": "184185",
      "PostDate": new Date(),
      "PostTime": "7:00PM"
    },
    {
      "Amount": 9.00,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "186187",
      "PostDate": new Date(),
      "PostTime": "8:30AM"
    },
    {
      "Amount": 88.50,
      "Description": "Amusement Park",
      "IsFee": true,
      "Sequence": "188189",
      "PostDate": new Date(),
      "PostTime": "4:05PM"
    },
    {
      "Amount": 14.60,
      "Description": "Cinema",
      "IsFee": false,
      "Sequence": "190191",
      "PostDate": new Date(),
      "PostTime": "12:50PM"
    },
    {
      "Amount": 39.10,
      "Description": "Gas Station",
      "IsFee": false,
      "Sequence": "192193",
      "PostDate": new Date(),
      "PostTime": "1:30PM"
    },
    {
      "Amount": 10.40,
      "Description": "Coffee Shop",
      "IsFee": false,
      "Sequence": "194195",
      "PostDate": new Date(),
      "PostTime": "10:40AM"
    },
    {
      "Amount": 56.25,
      "Description": "Restaurant",
      "IsFee": false,
      "Sequence": "196197",
      "PostDate": new Date(),
      "PostTime": "6:30PM"
    },
    {
      "Amount": 27.75,
      "Description": "Bookstore",
      "IsFee": false,
      "Sequence": "198199",
      "PostDate": new Date(),
      "PostTime": "12:45PM"
    },
    {
      "Amount": 92.20,
      "Description": "Electronics Store",
      "IsFee": true,
      "Sequence": "200201",
      "PostDate": new Date(),
      "PostTime": "5:40PM"
    }]  
  ;

  Questions: Question[] = [
    {
      Text: 'How can I save money while accelerating my loan repayment?',
      Code: 'Loan1',
      Qualifier: 'Loan'
    },
    {
      Text: 'I am saving up for something big, can I have some money saving tips?',
      Code: 'Saving1'
    }
  ];

  GetAccount(memberNumber: string): Observable<Account> {
    return of(this.Account);
  }

  GetTransactions(memberNumber: string, slidType: number, slidId: string): Observable<Transaction[]>{
    return of(this.Transactions);
  }

  GetQuestionsForMember(memberNumber: string): Observable<Question[]>{
    return this.http.post<Question[]>('http://localhost:8502', { "accountNumber": memberNumber });
  }

}