import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeServiceService } from '../../services/home-service.service';
import { ManagestationService } from '../../services/managestation.service';

@Component({
  selector: 'app-createhomepage',
  templateUrl: './createhomepage.component.html',
  styleUrls: ['./createhomepage.component.css']
})
export class CreatehomepageComponent {
constructor(public homepageservice:HomeServiceService,public managestationsservice :ManagestationService){}
createHomepage: FormGroup = new FormGroup({
  logoimage: new FormControl(Validators.required),
  websitetitle: new FormControl('', Validators.required),
  toptext: new FormControl('', Validators.required),
  formimage: new FormControl(Validators.required),
  titileabouttext: new FormControl('', Validators.required),
  abouttext1: new FormControl('', Validators.required),
  abouttext2: new FormControl('', Validators.required),
  trainlogo: new FormControl( Validators.required),
  pointabouttext1: new FormControl('', Validators.required),
  pointabouttext2: new FormControl('', Validators.required),
  desttitle: new FormControl('', Validators.required),
  desttext: new FormControl('', Validators.required),

});
onFileSelected(event: Event, controlName: string) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    this.createHomepage.patchValue({ [controlName]: file });
  }
}

save() {
  this.homepageservice.createHomepage(this.createHomepage.value)
}
uploadimage(file: any) {
  if (file.length == 0)
    return;
  let filetoupload = <File>file[0];
  const formdata = new FormData;
  formdata.append('file', filetoupload, filetoupload.name);
  this.homepageservice.uploadAtachment(formdata)

}
}
