import { html, render } from 'lit-html';
import { Header, Button } from '../../components';
import jsImage from '../../../assets/js-logo.png';
import './home.scss';

export default class Home {
  constructor(selector) {
    this.homeEl = document.querySelector(selector);
    this.title = 'Home';
  }

  template() {
    return html`
      <div>
        <app-header id="header1" data-title=${this.title}></app-header>
        <img src=${jsImage}/>
        <app-button id="button1" data-href="/contacts">
          Contacts
        </app-button>
        <app-button id="button2" data-href="/exam">
          Exam
        </app-button>
      </div>
    `;
  }

  load() {
    render(this.template(), this.homeEl);
    new Header('#header1').load();
    new Button('#button1').load();
    new Button('#button2').load();
  }
}
