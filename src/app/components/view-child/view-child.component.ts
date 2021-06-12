import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {
  chosenFEDChairman: number = 0;
  fedChairmans: string[] = [
    'https://static01.nyt.com/images/2018/10/26/obituaries/00VOLCKER1/00VOLCKER1-mobileMasterAt3x-v2.jpg',
    'https://www.thenation.com/wp-content/uploads/2016/11/madrick-greenspan_ap_img.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ben_Bernanke.jpg/1200px-Ben_Bernanke.jpg',
    'https://storage.googleapis.com/afs-prod/media/e1eb1f0937a946559f4c1685d17ddba3/800.jpeg',
    'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_25/2902141/190619-jerome-powell-ew-1048a-2902141.jpg'
  ]

  nextFEDChairman(): void {
    if (this.chosenFEDChairman === this.fedChairmans.length - 1) {
      this.chosenFEDChairman = 0;
    } else {
      this.chosenFEDChairman++;
    }
  }
}
