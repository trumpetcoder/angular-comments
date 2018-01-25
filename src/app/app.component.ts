import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = [
  	{	
      author: 'Bob',
      comment: 'first comment!'
    },
    {
      author: 'Bill',
      comment: 'nice work!'
    }, 
    {
      author: 'Jim',
      comment: 'I would also like to congratulate you!'
    }
  ];

  newComment (auth : string, comm : string) {
	this.comments.push (
		{
			author: auth,
			comment: comm

		
		}
	)
	
	}
}



