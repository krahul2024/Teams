import { Component } from '@angular/core';
import { users as Users } from '../../../assets/data'; // @ts-ignore 
import { User } from 'src/app/interfaces/user.ts';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent {
  showModal: boolean = true;
  enableShare: boolean = false;
  cancelSharing: boolean = false;
  includeAttachments: boolean = false;
  // attachments: string[] = [
  //   'Document1.pdf',
  //   'Image.jpg',
  //   'Presentation.pptx',
  //   'Spreadsheet.xlsx',
  //   'Video.mp4',
  //   'LongFileNameThatExceedsFiftyCharactersAndShouldBeTruncated.pdf',
  //   'AnotherLongFileNameThatExceedsFiftyCharactersAndShouldBeTruncated.pptx',
  //   'Report.docx',
  //   'AudioFileWithAVeryLongNameThatExceedsFiftyCharacters.mp3',
  //   'ImportantDocumentWithAVeryLongNameThatExceedsFiftyCharacters.doc'
  // ];

  attachments: string[] = [];

  searchTerm: string = "";
  usersConcatenatedList: string = "";

  users: User[] = Users.slice(0, 20); // hard-coded list of users

  filteredUsers: User[] = [];
  selectedUsers: User[] = this.users.slice(0,7); 
  isTextareaFocused: boolean = false;


  /*
    Users are filtered on the following basis 
    - if the search value is included in name : displayName
  */

  filterUser(): void {
    this.filteredUsers = this.users.filter((user: User) => {
      const isValidTerm = this.searchTerm.length > 0;
      const userContainsTerm = user.displayName?.toLocaleLowerCase().includes(this.searchTerm);
      const alreadySelected = this.selectedUsers.some(selUser => selUser.displayName === user.displayName); 
      return isValidTerm && userContainsTerm && !alreadySelected; 
    });

    // this.filteredUsers.map(user => console.log(user.displayName))
  }

  //--------Add the bottom border on focus 
  onTextareaFocus() {
    this.isTextareaFocused = true;
  }

  onTextareaBlur() {
    this.isTextareaFocused = false;
  }

  //---------------Modal operations 
  toggleModal() {
    console.log(this.showModal ? 'Modal closed' : 'Modal opened');
    this.showModal = !this.showModal;
    this.cancelSharing = true;
    this.attachments = [];
    this.includeAttachments = false;
    this.searchTerm = "";
    this.usersConcatenatedList = "";
    this.filteredUsers = []; 
    this.selectedUsers = []; 
  }

  getSelectedUser(user: User) {
    if (user) {
      console.log(user);
      this.selectedUsers.push(user);
      this.usersConcatenatedList += (user.displayName + ", ");
    }
    // console.log(this.selectedUsers)
    console.log(this.usersConcatenatedList)
    this.filteredUsers = [];
    this.searchTerm = "";
  }


  //------------Remove the selected user 
  removeSelectedUser(user : User) {
    this.selectedUsers = this.selectedUsers.filter((selUser : User) => {
      return user.displayName !== selUser.displayName; 
    })
  }

  // ----------------Attachment operations 

  toggleIncludeAttachments(): void {
    // if(this.attachments.length > 0 && this.includeAttachments === false) this.attachments = []; 
    this.includeAttachments = !this.includeAttachments;
  }

  attachFile(): void {
    console.log('File attached')
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    Array.from(files).forEach((file: File) => {
      this.attachments.push(file.name);
    })
    console.log(this.attachments)
  }

  removeAttachment(filename: string) {
    this.attachments = this.attachments.filter((attachment: string) => {
      return attachment !== filename;
    })
  }

  truncateFilename(filename: string, param : string) {
    const names = filename.split(param);
    if(param == '.') return names[0].slice(0, 13) + '...' + names[names.length - 1];
    else return names[0] + (names.length > 1 ? ', ' + names[names.length-1] : '').slice(0, 20); 
  }

  isValidUser(user: User): boolean {
    console.log(user)
    if (!user) return false;
    return !!user.id && !!user.displayName;
  }

  selectUser(user: User) {
    console.log(user); 
  }

  removeUser(user : User){
    this.selectedUsers = this.selectedUsers.filter((selUser : User) => {
      selUser.displayName !== user.displayName; 
    })
  }

  getUserImageFromName(user: User): string {
    if (user && user.givenName && user.surname) {
      return (user.givenName[0] + user.surname[0]).toUpperCase();
    } else {
      return "";
    }
  }


  getUserShortName(user: User): string {
    if (user && user.userPrincipalName) return user.userPrincipalName.split('@')[0].toUpperCase();
    return "";
  }
}
