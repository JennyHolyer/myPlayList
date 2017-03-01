import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {
  NavController,
  AlertController,
  ActionSheetController } from 'ionic-angular';

// import {LyricsPage} from '../lyrics/lyrics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // lyricsPage = LyricsPage
  songs: FirebaseListObservable<any>;
      constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire, public actionSheetCtrl: ActionSheetController) {
      this.songs = af.database.list('/songs');
      }

    addSong(){
      let prompt = this.alertCtrl.create({
        title: 'Song Name',
        message: "Enter a name for this new song you're so keen on adding",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title'
          },
          {
            name: 'artist',
            placeholder: 'Artist'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              this.songs.push({
                title: data.title,
                artist: data.artist
              });
            }
          }
        ]
      });
      prompt.present();
  } //end of addSong()


    updateSong(songId, songTitle, songArtist){
      let prompt = this.alertCtrl.create({
        title: 'Song Name',
        message: "Update the name for this song",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title',
            value: songTitle
          },
          {
            name: 'artist',
            placeholder: 'Artist',
            value: songArtist
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              this.songs.update(songId, {
                title: data.title,
                artist: data.artist
              });
            }
          }
        ]
      });
      prompt.present();
    } //end of updateSong


    showOptions(songId, songTitle, songArtist) {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'What do you want to do?',
        buttons: [
          {
            text: 'Delete Song',
            role: 'destructive',
            handler: () => {
              this.removeSong(songId);
            }
          },{
            text: 'Update',
            handler: () => {
            this.updateSong(songId, songTitle, songArtist);
            }
          },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    } //end of show option


// function calls
  removeSong(songId: string){
    this.songs.remove(songId);
  };




} //end of class HomePage
