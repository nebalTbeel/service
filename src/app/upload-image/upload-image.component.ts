import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
imageUrl :string = "assets/img/hello.jpg";
fileToUpload :File = null;
  constructor() { }

  ngOnInit() {
  }
  handleFileInput(File :FileList){
this.fileToUpload = File.item(0);
var reader = new FileReader();
reader.onload = (event :any) => {

  this.imageUrl = event.target.result;
}

reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit(caption,image){



  }
}
