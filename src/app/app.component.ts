import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  posts = [
    {
      title : 'premier post',
      content : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      loveIts : 0,
      created_at : new Date
    },
    {
      title : 'deuxième post',
      content : 'Il n’y a personne qui n’aime la souffrance pour elle-même, qui ne la recherche et qui ne la veuille pour elle-même…',
      loveIts : -2,
      created_at : new Date
    },
    {
      title : 'troisième post',
      content : 'Abusus enim multitudine hominum, quam tranquillis in rebus diutius rexit...',
      loveIts : 0,
      created_at : new Date
    }
  ];

}
