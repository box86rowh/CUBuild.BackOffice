import { Component, Input, OnInit } from '@angular/core';
import { Share } from '../models/share';

@Component({
  selector: 'app-share-view',
  templateUrl: './share-view.component.html',
  styleUrls: ['./share-view.component.scss']
})
export class ShareViewComponent implements OnInit {
  
  @Input()
  public Share!: Share;

  ngOnInit(): void {
  }

}
