import Recat from "react";
import "./App.css";
import GridRow from "./component/GridRow";
class App extends Recat.Component {
  constructor() {
    super();
    this.state = {
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ]
      ,
      tern:"x"
    };
  }
  updateBoard=(row,col)=>{
    const newArr= this.state.boardState;
    newArr[row][col]=this.state.tern;
    this.setState({
      tern: this.state.tern =="x" ? "0":"x",
      boardState:newArr,
    }
    )
  }
  render() {
    //  const Array = [<GridRow/>,<GridRow/>,<GridRow/>];
    return (
      <>
        <div className="container">
          <GridRow index={0} boardState={this.state.boardState} updateBoard={this.updateBoard} />
          <GridRow index={1} boardState={this.state.boardState} updateBoard={this.updateBoard} />
          <GridRow index={2} boardState={this.state.boardState} updateBoard={this.updateBoard} />

          {/* <div className="grid-row">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
      <div className="grid-row">
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      </div>
      <div className="grid-row">
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      </div> */}
        </div>
      </>
    );
  }
}
export default App;
