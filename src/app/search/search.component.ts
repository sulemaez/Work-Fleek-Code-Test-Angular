import { Component, Input, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @Input() searchKey : string;
  @Input() searchKeyName : string;
  @Input() searchCallBack : (args: any) => void;
  @Output() searchKeyChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  keyChanged() {
    this.searchKeyChanged .emit(this.searchKey);
  }

}
