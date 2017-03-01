import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyBVHpYAIV5ASc78BU3zeE-l-YkpVeQ8b8Y",
    authDomain: "myplaylist-77426.firebaseapp.com",
    databaseURL: "https://myplaylist-77426.firebaseio.com",
    storageBucket: "myplaylist-77426.appspot.com",
    messagingSenderId: "327927864215"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
