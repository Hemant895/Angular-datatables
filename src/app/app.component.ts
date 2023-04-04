import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-data-table';
  data:any ;
  constructor(private http: HttpClient){
   
}

ngOnInit(){
  this.http.get('https://qaapi.jahernotice.com/api/Epp/0').subscribe((res:any) => {
    this.data = res.data;
  setTimeout(()=>{   
    $('#datatableexample').DataTable( {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      lengthMenu : [5, 10, 25]
  } );
  }, 1);
        }, error => console.error(error));
}

  

}
