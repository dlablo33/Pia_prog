import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email: any;
  public password: any;
  public name: any;

  constructor(
    public fireService: FireserviceService
  ) { }

  ngOnInit() {
  }

  signup(){
    this.fireService.signup({email: this.email, password: this.password}).then(resp=>{
      if(resp.user?.uid){
        let data = {
          email: this.email,
          password: this.password,
          name: this.name,
          uid: resp.user.uid
        }
        this.fireService.saveDetails(data).then(resp=>{
          alert('Cuenta creada!');
        }, err=>{
          console.log(err);
        })
      }
    }, err=>{
      alert(err.message);
    })
  }

}
