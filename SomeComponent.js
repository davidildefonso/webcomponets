import { html, render } from './lint-html/lit-html/lit-html.js';
import { fetchDuke } from './dukeFetcher.js';



class SomeComponent extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		const template = html`
			<h2>  HAPPY NEW YEAR!!! ${this.location.params.id} </h2>
			<button @click=${_ => this.onButtonClicked()} >Receive Gift!!</button>
		`;
		render(template, this);
		window.addEventListener('duke',e => this.onDukeArrived(e));

	}

	onButtonClicked(){
		fetchDuke();
		console.log("click")
	}

	onDukeArrived({detail}){
		const { name, age } = detail.payload
		console.log(`${name} has arrive at the age of ${age} `)
	}

}


customElements.define("some-component", SomeComponent);