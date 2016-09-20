import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives : [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos : Array<Video>;
    
    constructor(){
        this.videos = [
            new Video(1, "Video 1", "PF0Haq0ftyw", "Video 1 description goes here"),
            new Video(1, "Video 2", "nOK3egx58CE", "Video 2 description goes here"),
        ];
    }
}
