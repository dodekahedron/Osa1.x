import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
    constructor() {
      super()
      this.state = {
        hyva:0,
        neutraali:0,
        huono:0,
       count:0,
       keskiarvo:0

     }
    }
  
    ClickGood =()=> {
      this.setState({ hyva: this.state.hyva +1})
      console.log(this.state.hyva + "hyva")
      
    }
  
    ClickBad =()=> {
        this.setState({huono: this.state.huono +1})
        console.log(this.state.huono +  "huono")
        
        
    }
    ClickNeutral =()=>{
        this.setState({neutraali: this.state.neutraali +1})
        console.log(this.state.neutraali +"tolkku")
        
        
    }
    
 

    
  
   render() {
       return(
           <div>
            <h1> Anna palautetta </h1>
            <Button handleClick={this.ClickGood} text="Hyvä"/>
            <Button handleClick={this.ClickNeutral} text="Neutraali"/>
            <Button handleClick={this.ClickBad} text="Huono"/>
            <h2>Statistiikka</h2>
                <Statistics state={this.state} />
            </div>
       )
   }
}
const Stat =(props) => {
    return (
        <p>{props.text} {props.value} </p>
    )
}
const Statistics =(props) => {
    return (
        <div>
        <Stat text = "Hyvä" value = {props.state.hyva}/>
        <Stat text = "Huono" value = {props.state.huono}/>
        <Stat text = "Neutraali" value = {props.state.neutraali}/>
        <Stat text = "Keskiarvo" value = {(props.state.hyva - props.state.huono)/(props.state.hyva + props.state.huono + props.state.neutraali)}/>
        <Stat text ="Positiivisia" value = {props.state.hyva/(props.state.hyva + props.state.huono + props.state.neutraali) * 100}/>
</div>
    )
}  

const Button =({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
            {text}
          
        </button>
    )
}





ReactDOM.render(
    <App />,
    document.getElementById('root'))
  