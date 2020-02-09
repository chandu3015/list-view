import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-list',
  templateUrl: './num-list.component.html',
  styleUrls: ['./num-list.component.css']
})
export class NumListComponent implements OnInit {

  nums: number [] = [];
  input: any = '' ;

  constructor() {
  }

  ngOnInit() {
  }

  public  addNumber() {
   if (this.input.length === 0 || isNaN(this.input)) {
      alert('Please Enter valid number');
    } else {
      this.nums.push(this.input);
    }
   this.input = '';
  }


  public  getColor(ind)
  {
    if ((ind + 1) % 3 === 0) {
    return 'red';
    } else {
      return 'black';
    }
  }



}
