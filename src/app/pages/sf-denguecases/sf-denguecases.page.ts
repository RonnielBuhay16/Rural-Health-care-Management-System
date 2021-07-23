import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router'
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular'
import { AccessProviders} from '../../providers/access-provider';
@Component({
  selector: 'app-sf-denguecases',
  templateUrl: './sf-denguecases.page.html',
  styleUrls: ['./sf-denguecases.page.scss'],
})
export class SfDenguecasesPage implements OnInit {

  gender : any = "";
  fname : any;
  mname : any;
  lname : any;
  age : any;

  hospital : any;
  bhw_id : any = 22;
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

  
  
  async Insert(){
   console.log(this.hospital);
  if(this.gender == ''){
    this.presentToast("Gender is Required");
  }
  else if(this.fname == ''){
      this.presentToast("Firstname is Required");
    }else if(this.mname == ''){
      this.presentToast("Middlename is Required");
    }else if(this.lname == ''){
      this.presentToast("Lastname is Required");
    }else if(this.age == ''){
      this.presentToast("Age is Required");
    }else if(this.hospital == ''){
      this.presentToast("Hospital field is required");
    }else{
    const load = await this.loadCtrl.create({
     message : "Proccessing....",
    });
    load.present();
    return new Promise(resolve => {
      let data = {
        aski : 'DENGUE',
        gender : this.gender,
        firstname : this.fname,
        middlename : this.mname,
        lastname : this.lname,
        age : this.age,
        bhw_id : this.bhw_id,
        host : this.hospital,
        
      }


      this.access.postData(data,'record.php').subscribe((res:any)=>{
         if(res.success==true){
           load.dismiss();
           
           this.presentToast(res.msg);
  
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
