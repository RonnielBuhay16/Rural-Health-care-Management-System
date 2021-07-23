import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router'
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular'
import { AccessProviders} from '../../providers/access-provider';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  gender : any = "";
  fname : any
   mname : any
   lname : any
   number : any
   brgy: any = "";
   username: any
   password: any
   vpass : any
 
   disabledbutton : any
   
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

  
  ionViewDidEnter(){
  this.disabledbutton = false;
  }
  async tryRegister(){
   
  if(this.gender == ''){
    this.presentToast("Gender is Required");
  }
  else if(this.fname == ''){
      this.presentToast("Firstname is Required");
    }else if(this.mname == ''){
      this.presentToast("Middlename is Required");
    }else if(this.lname == ''){
      this.presentToast("Lastname is Required");
    }else if(this.number == ''){
      this.presentToast("Mobile Number is Required");
    }else if(this.brgy == ''){
      this.presentToast("Barangay is Required");
    }else if(this.username == ''){
      this.presentToast("Username is Required");
    }else if(this.password == ''){
      this.presentToast("Password is Required");
    }else if(this.password.length < 8){
      this.presentToast("Password must atleast 8 characters");
    }else if(this.vpass == ''){
      this.presentToast("Re Enter your Password");
    }else if(this.password != this.vpass){
      this.presentToast("Password did not match");
    }else{
    this.disabledbutton = true;
    const load = await this.loadCtrl.create({
     message : "Proccessing....",
    });
    load.present();
    return new Promise(resolve => {
      let data = {
        aski : 'process_regis',
        user : this.username,
        pass : this.password,
        u_gender : this.gender,
        firstname : this.fname,
        middlename : this.mname,
        lastname : this.lname,
        num : this.number,
        barangay : this.brgy,
        
      }


      this.access.postData(data,'register.php').subscribe((res:any)=>{
         if(res.success==true){
           load.dismiss();
           this.disabledbutton = false;
           this.presentToast(res.msg);
           this.router.navigate(['/login']);
         }else{
          load.dismiss();
          this.disabledbutton = false;
          this.presentToast(res.msg);
         }
      },(err)=>{
        load.dismiss();
        this.disabledbutton = false;
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
