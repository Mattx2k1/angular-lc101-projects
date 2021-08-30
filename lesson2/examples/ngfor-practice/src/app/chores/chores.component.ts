import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Complete LaunchCode prep work', 'CLEAN BATHROOM UGH'];
   todoTitles = ["Today's Chores", "Everyday Chores"];

   constructor() { }

   ngOnInit() {
   }

}
