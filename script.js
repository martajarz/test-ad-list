window.generateList = () => {
  let name = document.getElementById('instanceName').value;
  let container = document.getElementById('advertsList');

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  let script = document.createElement("script")
  script.type = "application/javascript";
  script.src = `https://${name}.traffit.com/public/an/generateJs/`;

  let div1 = document.createElement('div');
  div1.id = 'traffit-an-filters-xtxrxaxfxixtx2x0x1x6x';

  let div2 = document.createElement('div');
  div2.id = 'traffit-an-list-xtxrxaxfxixtx2x0x1x6x';

  container.appendChild(div1);
  container.appendChild(div2);
  container.appendChild(script);
};
