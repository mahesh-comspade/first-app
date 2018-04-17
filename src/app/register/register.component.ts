import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  status;
  status1;
  count = 0;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(record) {
    let retrievedData = JSON.parse(localStorage.getItem('record'));

    if (retrievedData == null) {
      let records_list = [];
      records_list.push(record);
      localStorage.setItem("record", JSON.stringify(records_list));
    }
    else{
    for(let i = 0; i < retrievedData.length; i++) {
      if(record.username == retrievedData[i].username){
       this.status = "User already registered!!";
       this.count = 1;
        return;
      }
    }
    retrievedData.push(record);
    localStorage.setItem("record", JSON.stringify(retrievedData));
    if(this.count == 0){
      this.status1 = "Register Successfully";
    }

  }

    let user = JSON.parse(localStorage.getItem('record'));
    console.log(user);
    user.forEach(element => {
      console.log("UserName: " + element.username);
    });
  }
}
