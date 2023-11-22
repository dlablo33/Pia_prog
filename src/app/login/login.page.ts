import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: any;
  public password: any;
  

  constructor(
    public router: Router,
    public fireService: FireserviceService
    
  ) { }

  ngOnInit() {
  }

  login(){
    this.fireService.login({email: this.email, password: this.password}).then(resp=>{
      console.log(resp);
      this.router.navigateByUrl('tabs');
      if(resp.user?.uid){
        this.fireService.getDetails({uid: resp.user.uid}).subscribe(resp=>{
          console.log(resp);
        }, err=>{
          console.log(err);
        });
      }
    }, err=>{
      alert(err.message);
    })
      this.email = '';
      this.password = '';
  }

  signup(){
    this.router.navigateByUrl('signup');
  }

}
