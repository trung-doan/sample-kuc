import { Table } from 'kintone-ui-component/lib/table';
import { createCondition } from './helper/column';
import { createInitData } from './helper/data';

export class CustomTable {
  _table;

  constructor() {
    this._initTable();
  }

  getEl() {
    return this._table;
  }

  on(event, callback) {
    this._table.addEventListener(event, (event) => {
      callback(event);
    });
  }

  _initTable() {
    this._table = new Table({
      columns: [
        createCondition(),
      ],
      data: createInitData()
    });
  }
}
