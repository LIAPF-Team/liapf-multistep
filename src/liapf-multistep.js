import { Okalit, defineElement, html } from "@okalit/core";

import styles from "./liapf-multistep.css?inline";

@defineElement({
  tag: "liapf-multistep",
  styles: [styles],
  props: [{ currentStep: { type: Number, value: 1 } }],
})
export class LiapfMultistep extends Okalit {
  _returnToStep = null;

  onFirstRender() {
    this._syncSteps();
  }

  onChange() {
    this._syncSteps();
  }

  _getSteps() {
    return Array.from(this.children).filter((el) => el.tagName === 'LIAPF-STEP-ITEM');
  }

  _syncSteps() {
    const steps = this._getSteps();
    if (!steps.length) return;

    const current = this.currentStep.value;
    const total = steps.length;

    steps.forEach((step, i) => {
      const stepNum = i + 1;
      step.step = stepNum;
      step.totalSteps = total;

      if (stepNum < current) {
        step.status = 'completed';
      } else if (stepNum === current) {
        step.status = 'active';
      } else {
        step.status = 'pending';
      }
    });
  }

  editStep(stepIndex) {
    const steps = this._getSteps();
    if (stepIndex < 1 || stepIndex >= this.currentStep.value) return;

    if (!this._returnToStep) {
      this._returnToStep = this.currentStep.value;
    }

    this.currentStep = stepIndex;
    this._syncSteps();
  }

  nextStep() {
    const steps = this._getSteps();

    if (this._returnToStep) {
      const returnTo = this._returnToStep;
      this._returnToStep = null;
      this.currentStep = returnTo;
      this._syncSteps();
      return;
    }

    if (this.currentStep.value < steps.length) {
      this.currentStep = this.currentStep.value + 1;
      this._syncSteps();
    } else if (this.currentStep.value === steps.length) {
      this.output('on:multistep:complete');
    }
  }

  jumpToStep(stepIndex) {
    const steps = this._getSteps();
    if (stepIndex >= 1 && stepIndex <= steps.length) {
      this._returnToStep = null;
      this.currentStep = stepIndex;
      this._syncSteps();
    }
  }

  prevStep() {
    if (this.currentStep.value > 1) {
      this._returnToStep = null;
      this.currentStep = this.currentStep.value - 1;
    }
  }

  render() {
    return html`
        <div class="multistep-organism">
          <slot @slotchange=${() => this._syncSteps()}></slot>
        </div>
      `;
  }
}
