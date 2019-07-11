import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

const componentCSS = require('./app.component.scss');

/**
 * Modern button
 * @event clicked - Dispatches when button is clicked.
 * @slot - Default content.
 * @cssprop --bg-color - Background color
 * @cssprop --bg-color-focus - Background color when focused
 * @cssprop --bg-color-hover - Background color when hovered
 * @cssprop --bg-color-focus-hover - Background color when focused and hovered
 * @cssprop --border-radius - Border radius
 * @cssprop --button-color-shadow - Shadow color when not focused
 * @cssprop --button-color-shadow-focus - Shadow color when focused
 * @cssprop --color - text color
 * @cssprop --color-focus-hover - text color when focused and hovered
 * @cssprop --height - Height of button
 * @cssprop --margin - Margin of button
 * @cssprop --min-width - Width of button
 * @cssprop --primary-color - Change primary color easily
 * @cssprop --primary-color-hover - Hover background color
 *
 */
@customElement('bronco-button')
export class BroncoButton extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  /**
   *
   * Makes the button outlined
   * @type {boolean}
   * @memberof BroncoButton
   */
  @property({ type: Boolean, reflect: false }) outline: boolean = false;

  /**
   * Enables the outline effect after clicking
   * @type {boolean}
   * @memberof BroncoButton
   */
  @property({ type: Boolean, reflect: false }) outlineEffect: boolean = false;

  emit() {
    this.dispatchEvent(
      new CustomEvent('clicked', {
        bubbles: true
      })
    );
  }

  render() {
    return html`
          <button class='
            ${this.outline ? ' outline' : ''}
            ${this.outlineEffect ? 'outlineEffect' : ''}' @click=${() => this.emit()}>
              <span>
                <slot></slot>
              </span>
            </button>
`;
  }

}
