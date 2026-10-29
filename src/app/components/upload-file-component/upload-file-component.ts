import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceArchivos } from '../../services/service.archivos';

@Component({
  selector: 'app-upload-file-component',
  standalone: false,
  styleUrl: './upload-file-component.css',
  templateUrl: './upload-file-component.html',
})
export class UploadFileComponent {
  @ViewChild("nombreArchivo") nombreArchivo!: ElementRef
  @ViewChild("archivo") archivo!: ElementRef

  constructor(´
    private _cdr: ChangeDetectorRef,
    private _service: ServiceArchivos
  ){}

  async subirArchivo(): Promise<void> {
    console.log(this.archivo)
    this._cdr.detectChanges()
  }
}
