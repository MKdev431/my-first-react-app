class FortuneTellingMachine extends React.Component {
  state = {
    fortuneList: ["fortune1", "fortune2", "fortune3"],
    pick: "",
    value: "",
  };

  handleDrawFortune() {
    const index = Math.floor(Math.random() * this.state.fortuneList.length);
    const drawnFortune = this.state.fortuneList[index];
    this.setState({
      pick: drawnFortune,
    });
  }

  handleAddFortune = e => {
    if (this.state.value === "") return alert("Insert new fortune");
    const fortuneList = [...this.state.fortuneList];
    fortuneList.push(this.state.value);
    this.setState({
      fortuneList,
      value: "",
    });
    alert(`Added new fortune. List of available options: ${fortuneList}`);
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { pick } = this.state;
    return (
      <>
        <h1>Draw random fortune</h1>
        <button onClick={() => this.handleDrawFortune()}>Draw Fortune</button>
        <br />
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddFortune()}>Add Fortune</button>
        {pick ? <h1>{pick}</h1> : null}
      </>
    );
  }
}

ReactDOM.render(<FortuneTellingMachine />, document.getElementById("root"));
