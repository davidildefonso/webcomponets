import { html, render } from './lint-html/lit-html/lit-html.js';
import { fetchDuke } from './dukeFetcher.js';



class GiftsComponent extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		const template = html`
			<h2>DEFEAT THE DUKE AND WIN A GIFT!!!</h2>
			<button @click=${_ => this.onButtonClicked()} >View gifts</button>
		`;
		render(template, this);
		window.addEventListener('gifts',e => this.onDukeArrived(e));

	}

	onButtonClicked(){
		fetchDuke("gifts");
		console.log("click")
	}

	onDukeArrived({detail}){
		const gifts = detail.payload
		console.log(`there are ${gifts.length} gifts waiting for the winner
		. Try your luck and defeat the duke `)
	}

}


customElements.define("gifts-component", GiftsComponent);