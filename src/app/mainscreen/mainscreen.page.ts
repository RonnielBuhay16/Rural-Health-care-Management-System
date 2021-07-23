import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.page.html',
  styleUrls: ['./mainscreen.page.scss'],
})
export class MainscreenPage implements OnInit {
  
  constructor(private router : Router) { }
  
  ngOnInit() {
  }
  async openRegistrationForm(){
    this.router.navigate(['/register']);
}
async login(){
  this.router.navigate(['/login']);
}

}
