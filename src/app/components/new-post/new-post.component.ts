import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages.service'

@Component({
	selector: 'app-new-post',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.css']
})

export class NewPostComponent {
	tweetMessage: string = ""
	tweetMaxLength: number = 240
	tweetRemain: number = this.tweetMaxLength

	constructor(private service: MessagesService) {

	}

	sendTweet() {
		this.service.addMessage(this.tweetMessage)
		this.tweetMessage = ""
		this.tweetRemain = this.tweetMaxLength
	}

	changeTweet() {
		this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length
	}

}
