import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserService]
})
export class AppComponent implements OnInit {
  title = 'project';

constructor(private http:HttpClient,private us:UserService){

}

users :any[] = [];


  ngOnInit():void {
    this.us.getUsers().subscribe((data:any) => {
      if(data && Array.isArray(data.users)){
        this.users = data.users;
      } else{
        console.error('Invalid response format');
      }
    },
      (error)=>{
        console.error('Error fetching users:', error);
      });
  }
  
}
