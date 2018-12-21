/* global HTMLElement */
class FlippingCard extends HTMLElement {
  constructor (obj) {
    super()
    this.front = obj.front
    this.back = obj.back
    this.innerText = this.front
    this.onmouseover = () => this.flip()
    this.onmouseleave = () => this.restore()
  }
  flip () {
    this.innerText = this.back
    this.style.transform = 'rotateY(180deg)'
  }
  restore () {
    this.innerText = this.front
    this.style.transform = ''
  }
}
window.customElements.define('flipping-card', FlippingCard)
// export default FlippingCard
