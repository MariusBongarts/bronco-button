import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

const componentCSS = require('./app.component.scss');

/**
 * Allow users to take actions, and make choices, with a single tap.
 * @slot - Default content.
 * @cssprop --bg-color - Background color
 * @cssprop --bg-color-hover - Background color when hovered
 * @cssprop --primary-color-shadow - Shadow color when focused
 * @cssprop --button-letter-spacing - Letter spacing
 * @cssprop --button-letter-spacing - Letter spacing
 * @cssprop --button-letter-spacing - Letter spacing
 * @cssprop --button-letter-spacing - Letter spacing
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
   * Enabled the outline effect after clicking   *
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
                    ${this.outline ? ' outline' : '' } ${this.outlineEffect ? 'outlineEffect' : '' }
            ' @click=${() => this.emit()}>
                      <span>
                        <slot></slot>
                      </span>
                    </button>
`;
  }

}
