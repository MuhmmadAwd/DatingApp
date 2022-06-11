import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Member } from 'src/app/_models/member.model';
import { LoaderService } from 'src/app/_services/loader.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  members$: Observable<Member[]>;
  isLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private memberService: MembersService,public loader:LoaderService) {}

  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
  }
}
