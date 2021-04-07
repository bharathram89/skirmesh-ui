import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  p: number = 1;
  
  userSvc: UserServiceService;
  tokenSvc: TokenStorageService;

  devices: BehaviorSubject<any>;

  captureEnable:boolean;
  bombEnable:boolean; 


  constructor(
    userService: UserServiceService,
    tokenService: TokenStorageService,
    private router: Router) {
    this.userSvc  = userService;
    this.tokenSvc = tokenService;
    this.devices  = new BehaviorSubject({});
  }

  
  ngOnInit(): void {
    this.userSvc.getUserData().subscribe(userData => {

      this.devices.next(userData.fieldProfiles[0].devices);
    })
  }

  pointScale(index,value){

    var int_map = [0x0f,0x14,0x1e,0x28,0x30,0x3c,
                   0x4b,0x50,0x64,0x78,0x96,0xf0].reverse()

    this.devices.subscribe(data=>{
      data[index].point_scale = int_map[value];
    })
  }
  convertPointScale(value) {

    var new_val

    new_val = 60/value + " x"

    return new_val

  }

  medicTime(index,value) {

    var int_map = [1,2,3,4,5,6,7,8,9,10,11,12,          // Use discrete values to convert
                   15,18,21,24,27,30,                   // to simple times used for gameplay
                   36,42,48,54,60,66,72,78,84,90,
                   120,150,180,210,240]                 // TODO: convert text based on range

    this.devices.subscribe(data=>{
      data[index].med_time = int_map[value];
    })
  }

  convertTime(value) {

    var new_val

    if (value < 12){
      new_val = value*10 + " sec"
    }
    else {
      new_val = value*10/60 + " min"
    }

    return new_val

  }

  enableMedic(num) {
    this.devices.subscribe(data=>{
      if(data[num].allow_medic){
        data[num].allow_medic = false;
      }else{
        data[num].allow_medic = true;
      }
    })

  }

  enableBomb(num){

      this.devices.subscribe(data=>{
        if (!this.isBombEnabled(num)) {
          data[num].config = 0xBB;
        }
      })
  }
  isBombEnabled(num){
    var configured = false;
    this.devices.subscribe(data=>{
      configured = data[num].config == 0xBB;
    })
    return configured
  }

  enableCapture(num){

    this.devices.subscribe(data=>{
      if (!this.isCaptureEnabled(num)) {
        data[num].config = 0x0A;
      }
    })
  }
  isCaptureEnabled(num) {
    var configured = false;
    this.devices.subscribe(data=>{
      configured = data[num].config == 0x0A;
    })

    return configured
  }

  armTime(index,value){

    var int_map = [1,2,3,4,5,6,7,8,9,10,11,12]

    this.devices.subscribe(data=>{
      data[index].arm_time = int_map[value];
    })
  }
  capTime(index,value){

    var int_map = [1,2,3,4,5,6,7,8,9,10,11,12,
                   15,18,21,24,27,30,
                   36,42,48,54,60,66,72,78,84,90,
                   120,150,180,210,240]

    this.devices.subscribe(data=>{
      data[index].cap_time = int_map[value];
    })
  }
  bombTime(index,value){

    var int_map = [1,2,3,4,5,6,7,8,9,10,11,12,
                   15,18,21,24,27,30,
                   36,42,48,54,60,66,72,78,84,90,
                   120,150,180,210,240]

    this.devices.subscribe(data=>{
      data[index].bomb_time = int_map[value];
    })
  }
  difuseTime(index,value){

    var int_map = [1,2,3,4,5,6,7,8,9,10,11,12]

    this.devices.subscribe(data=>{
      data[index].diff_time = int_map[value];
    })
  }
  capasst(index,value){

    var int_map = [0x64,0x32,0x19,0x14,0x0a,
                   0x05,0x04,0x02,0x01]

    this.devices.subscribe(data=>{
      data[index].cap_asst = int_map[value];
    })
  }

  convertPerc (value) {

    var new_val

    return 100 / value

  }
}

// <!--
// //below are constants
// address: "0013A20041A66B3F"
// id: 7

// //below change per game
// location: null
// deactivated: null
// gameActions: []
// gameID: null


// //below can change anytime during game


// point_scale: 60 -range


// allow_medic: true - switch
// med_time: 3 -range


// arm_time: 1 - range
// bomb_status: 189 ???
// bomb_time: 18 - range
// diff_time: 12 - range


// cap_asst: 20 -range
// cap_time: 1 - range


// config: 10 ?
// stable: 1 -range

// fieldProfileID: 1
// lastChange: "Sun, 04 Apr 2021 17:40:43 GMT"
// creationDate: "Sat, 27 Mar 2021 00:35:08 GMT"


// team: "3333cc"
// teamID: null -->