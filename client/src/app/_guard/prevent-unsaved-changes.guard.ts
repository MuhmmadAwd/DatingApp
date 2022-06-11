import { Injectable } from '@angular/core';
import {
  CanDeactivate,
} from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root',
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(component: MemberEditComponent): boolean {
    if(component.editForm){
      console.log(component.editForm);
      return confirm("Are you sure? there are unsaved changes")
    }
    return true;
  }
}
