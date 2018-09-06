import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

const config = {
	apiKey: 'AIzaSyBuZOgrUd1YUIOMc7BDilnG5KZU4FnO_nM',
	authDomain: 'chat-93afe.firebaseapp.com',
	databaseURL: 'https://chat-93afe.firebaseio.com',
	projectId: 'chat-93afe',
	storageBucket: 'chat-93afe.appspot.com',
	messagingSenderId: '606754463683'
};

@NgModule({
	declarations: [ AppComponent, ChatComponent, MessageComponent, InputComponent ],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(config),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		AngularFireAuthModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
