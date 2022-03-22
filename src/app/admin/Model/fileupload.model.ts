export class FileUpload {
    static file(filePath: string, file: any) {
      throw new Error('Method not implemented.');
    }
    key: string='';
    name: string='';
    url: string='';
    file: File;
    constructor(file: File) {
        this.file = file;
    }
}
