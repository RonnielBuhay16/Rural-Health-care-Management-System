import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router'
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular'
import { AccessProviders} from '../../providers/access-provider';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   
  username: any = "";
  password: any = "";
  a_id : any
  a_type : any
  constructor(
    public router : Router,
  public toastCtrl : ToastController,
  public loadCtrl : LoadingController,
  public AlertCtrl : AlertController,
  private access : AccessProviders,
  private navCtrl : NavController
  ) { }

  ngOnInit() {
    
  }
  async openRegistrationForm(){
      this.router.navigate(['/register']);
  }
  openForgot(){
    this.router.navigate(['/forgot']);
  }
  async login(){
   
    if(this.username == ""){
      this.presentToast("Username is Required");
    }
    else if(this.password == ''){
        this.presentToast("Password is Required");
      }else{
      const load = await this.loadCtrl.create({
       message : "Proccessing....",
      });
      load.present();
      return new Promise(resolve => {
        let data = {
          aski : 'login',
          user : this.username,
          pass : this.password,
          
        }
  
  
        this.access.postData(data,'register.php').subscribe((res:any)=>{
           if(res.success==true){
            load.dismiss();
            this.presentToast(res.msg);
            this.router.navigate(['/user-acc']);
           }else{
            load.dismiss();
            this.presentToast(res.msg);
            
           }
        },(err)=>{
          load.dismiss();
          
          this.presentToast("Request Timeout"); 
         })// end of subscribe
      
      
        });
      
      
    }//end of else
    }// end of function
    async presentToast(a){
      const toast = await this.toastCtrl.create({
        message : a,
        duration : 1500,
        position : 'top'
      });
      toast.present();
    }
  


}
