import { Dropdown } from 'kintone-ui-component/lib/dropdown';
import { CustomCondition } from './custom-condition';

function _renderCondition(cellData) {
  const condition = new CustomCondition(cellData);
  return condition.getEl();
}

export function createCondition(name) {
  return {
    title: 'condition',
    field: 'condition',
    render: _renderCondition
  }
}
