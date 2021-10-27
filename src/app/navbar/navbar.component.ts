import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewsletterComponent } from '../dialog-newsletter/dialog-newsletter.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isNewletterChecked = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog) {}

  /* openDialogNewsletter() {
    console.log("Newsletter clicked");
  } */

  openDialogNewsletter() {
    const dialogRef = this.dialog.open(DialogNewsletterComponent);

    dialogRef.afterClosed().subscribe(result => {
      //this.isNewletterChecked = false;
      console.log(`Dialog result: ${result}`);
    });
  }

  /* onChange($event){
    console.log($event);
    $event.source.toggle();
    //MatCheckboxChange {checked,MatCheckbox}
   } */
}
