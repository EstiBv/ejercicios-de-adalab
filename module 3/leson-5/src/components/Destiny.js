import React from "react";

const selectDestiny = (ev) => {
  const citySelect = ev.currentTarget.value;
  alert(`!Tu destino es ${citySelect} !`);
  console.log(citySelect);
};

class Destiny extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>Elige tu destino</p>
        <select name="select" onChange={selectDestiny} id={this.props}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sidney">Sidney</option>
          <option value="Praga">Praga</option>
          <option value="Tokio">Tokio</option>
        </select>
      </>
    );
  }
}

export default Destiny;
