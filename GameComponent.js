import { html, render } from './lint-html/lit-html/lit-html.js';
import { fetchDuke } from './dukeFetcher.js';



class GameComponent extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		const template = html`
			<h2>ULTIMATE CHESS GAME!!!</h2>
			<button @click=${_ => this.onButtonClicked()} >Play</button>
		`;
		render(template, this);
		window.addEventListener('game',e => this.onDukeArrived(e));

	}

	onButtonClicked(){
		fetchDuke("game");
		console.log("click")
	}

	onDukeArrived({detail}){
		const { name, levels, lives } = detail.payload
		console.log(`Are you ready for the ultimate 
			${name} game with ${levels} leves and 
			only ${lives} lives ?  `)
	}

}


customElements.define("game-component", GameComponent);