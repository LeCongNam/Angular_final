import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './newServices/file-upload.service';
import { FileUpload } from './Model/fileupload.model';
import { finalize, map, Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ProductService } from '../service/product.service'
import { url } from 'inspector';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

  fileUploads?: any[];
  // constructor(private uploadService: FileUploadService,) { }

  ngOnInit(): void {

  }




  title = "cloudsSorage";
  selectedFile: File | undefined;
  fb: any;
  downloadURL: Observable<string> | undefined;

  constructor(private storage: AngularFireStorage) { }


  currentFile: any
  fileUpload(event: any) {
    this.currentFile = event.target.files[0];
  }

  onFileSelected() {
    var n = Date.now();
    const file = this.currentFile;
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL()
            .subscribe(url => {
              if (url) {
                this.fb = url
                this.showdata(this.fb)
              }
            })

        })
      )
      .subscribe()

  }

  showdata(fb: any) {
    return this.fb
  }

  
}
