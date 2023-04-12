import { Component } from '@angular/core';

@Component({
	selector: 'app-new-post',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.css']
})

export class NewPostComponent {
	tweetMessage: string = ""
	tweetMaxLength: number = 240
	tweetRemain: number = this.tweetMaxLength

	sendTweet() {
		alert(this.tweetMessage)
	}

	changeTweet() {
		this.tweetRemain = 240 - this.tweetMessage.length
	}

}
