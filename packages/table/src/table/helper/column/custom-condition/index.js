import { Dropdown } from 'kintone-ui-component/lib/dropdown';
import * as ITEM from './resource/item';

export class CustomCondition {
  _el;
  _subjectDropdownEl;
  _conditionDropdownEl;
  _initData;

  constructor(data) {
    this._initData = data;
    this._init();
  }

  getEl() {
    return this._el;
  }

  _init() {
    this._el = document.createElement('div');
    this._initSubjectDropdown();
    this._initConditionDropdown();
  }

  _initSubjectDropdown() {
    this._subjectDropdownEl = this._createSubjectDropdown();
    this._el.appendChild(this._subjectDropdownEl);

    this._subjectDropdownEl.addEventListener('change', event => {
      event.stopPropagation();
      this._conditionDropdownEl.items = ITEM.CONDITION[event.detail.value]
      this._dispatchChangeEvent();
    });
  }

  _initConditionDropdown() {
    this._conditionDropdownEl = this._createConditionDropdown();
    this._el.appendChild(this._conditionDropdownEl);

    this._conditionDropdownEl.addEventListener('change', event => {
      event.stopPropagation();
      this._dispatchChangeEvent();
    });
  }

  _createSubjectDropdown() {
    const dropdown = new Dropdown({
      items: ITEM.SUBJECT,
      value: this._initData[0],
    });
    return dropdown;
  }

  _createConditionDropdown() {
    const dropdown = new Dropdown({
      items: ITEM.CONDITION[this._initData[0]],
      value: this._initData[1]
    });
    return dropdown;
  }

  _dispatchChangeEvent() {
    const detail = {
      value: [
        this._subjectDropdownEl.value,
        this._conditionDropdownEl.value
      ]
    };

    const event = new CustomEvent("change", {
      detail,
      bubbles: true,
      composed: true,
    });
    this._el.dispatchEvent(event);
  }
}
