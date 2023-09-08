class FortuneTellingMachine extends React.Component {
  fortuneList = ["fortune1", "fortune2", "fortune3"];

  state = {
    pick: "",
  };

  handleDrawFortune() {
    const index = Math.floor(Math.random() * this.fortuneList.length);
    const drawnFortune = this.fortuneList[index];
    this.setState({
      pick: drawnFortune,
    });
  }
  render() {
    const { pick } = this.state;
    return (
      <>
        <h1>Draw random fortune</h1>
        <button onClick={() => this.handleDrawFortune()}>Draw Fortune</button>
        <br />
        <br />
        <input type="text" />
        <button>Add Fortune</button>
        <h1>{pick}</h1>
      </>
    );
  }
}

ReactDOM.render(<FortuneTellingMachine />, document.getElementById("root"));
