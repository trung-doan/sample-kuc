import { CustomTable } from "./table";

window.addEventListener('DOMContentLoaded', () => {
  const customTable = new CustomTable();
  document.body.appendChild(customTable.getEl());

  customTable.on('change', event => {
    console.log(event.detail.data);
  });
});
