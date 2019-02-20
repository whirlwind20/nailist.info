import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  answers: any = [
    'answer 1',
    'answer 2',
    'answer 3',
    'answer 4'
  ];
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db
    .collection('2kyu')
    .valueChanges()
    .subscribe(result => {
      console.log(result);
    });
  }
}
