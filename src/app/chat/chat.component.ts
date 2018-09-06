import { Component, OnInit, Input, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Message } from '../message.model';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: [ './chat.component.css' ]
})
export class ChatComponent implements OnInit {
	@Input() userAuth: string;
	@ViewChild('msgContainer') private messagesContainer: ElementRef;
	messages: Observable<any[]>;
	private msgRef: AngularFirestoreCollection<Message>;

	constructor(private db: AngularFirestore) {
		this.msgRef = db.collection<Message>('messages', (ref) => ref.orderBy('timestamp'));
	}

	scrollToBottom(): void {
		try {
			this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
		} catch (err) {}
	}

	ngOnInit() {
		this.messages = this.msgRef.valueChanges();
		this.messages.subscribe((res) => console.log(res));
		this.scrollToBottom();
	}

	ngAfterViewChecked() {
		this.scrollToBottom();
	}
}
