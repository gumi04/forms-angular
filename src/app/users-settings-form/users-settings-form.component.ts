import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user.settings';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-users-settings-form',
  templateUrl: './users-settings-form.component.html',
  styleUrls: ['./users-settings-form.component.css']
})
export class UsersSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: 'Gumaro',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'heres some text'
  }


  startDate: Date = new Date();
  startTime: Date = new Date();
  userRating = 0;
  maxRating = 10;
  isReadonly = false;
  userSettings : UserSettings = {...this.originalUserSettings}
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]> = of(['']);

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }


  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
    console.log("in submit")
    if(form.valid){
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('succes', result),
      error => this.onHttpError(error)
      );
    } else{
        this.postError = true;
        this.postErrorMessage = "Please fix the above errors"
    }
  }


  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }

}
