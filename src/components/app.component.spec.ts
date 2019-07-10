import { LitElement } from 'lit-element';
import { BroncoButton } from './app.component';
import './app.component';
import { emit } from 'cluster';

describe('bronco-button', () => {
  let element: BroncoButton;

  beforeEach(async () => {
    element = document.createElement('bronco-button') as BroncoButton;
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => { element.remove(); });

  it('should render bronco-button', async () => {
    document.body.appendChild(element);
    await element.updateComplete;
    expect(element.textContent).toBe('');
  });

  it('should emit click event', async () => {
    document.body.appendChild(element);
    await element.updateComplete;
    element.emit();
    let bool = false;
    element.addEventListener('click', () => {
      bool = true;
    });
    element.click();
    expect(bool).toBe(true);
  });


});
