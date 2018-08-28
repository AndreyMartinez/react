//import dependencies
import React,{Component} from 'react'
import PropTypes from 'prop-types';


class TestSecondComponent extends Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            result:0
            
        }

        this.handleCountClick = this.handleCountClick.bind(this);
        this.handeInputChanged = this.handeInputChanged.bind(this);
    }
    
    handleCountClick(e){
        console.log(e.target.id)
        if(e.target.id === 'add'){
        this.setState({
            count: this.state.count + 1 
        })
      
    }
    else if (e.target.id === "reset"){
        this.setState({
            count:0
        })
    }
    else if(e.target.id === "delete" && this.state.count > 0){
        this.setState({
            count:this.state.count - 1
        })
    }
    else if(e.target.id === "result"){
        this.setState({
    result:this.state.number1 + this.state.number2
        })
    }

    }

    handeInputChanged(e){
        console.log(e.target.id)
   if(e.target.id ==="number1"){
       this.setState({
           number1:Number(e.target.value)
       })
   }
   else{
    this.setState({
        number2:Number(e.target.value)
    })
   }
    }

    componentDidMount(){
        this.setState({
            count:1
        })
    }
    static PropTypes = {
        textElement: PropTypes.string.isRequired
    }
    render(){
        const {textElement} = this.props;
        return(
        <div>
            <h1>{textElement}</h1>
            <p>Count:{this.state.count}</p>
            <p>
            <button id="add" onClick={this.handleCountClick}>Sumar </button>
            <button id="reset" onClick={this.handleCountClick}>Resetear </button>
            <button id="delete" onClick={this.handleCountClick}>restar </button>
        </p>
         <input id="number1" type="number" value={this.state.number1} onChange={this.handeInputChanged} />
         <input id="number2" type="number"  value={this.state.number2} onChange={this.handeInputChanged} />
         <button id="result"  onClick={this.handleCountClick}>resultado </button>
         {this.state.result}
        </div>
        
        )
    }


}

export default TestSecondComponent