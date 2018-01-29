import React from 'react'
import ReactDOM from 'react-dom'
const Otsikko = (props) => {
    return (
        <div>
<p>{props.course}</p>
</div>
    )
}
const Osa = (props) => {
    return (
<div>
    <p>{props.part}, tehtäviä {props.prob}</p>
    </div>

    )
}
const Sisalto = () => {
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14
    return (
        <div>
<p><Osa part ={osa1} prob = {tehtavia1}/></p>
<p><Osa part = {osa2} prob = {tehtavia2}/></p>
<p><Osa part = {osa3} prob = {tehtavia3}/></p>
       </div>
    )
}
const Yhteensa = (props) => {
    return (
        <div>
<p>yhteensä {props.sum} tehtävää</p>
</div>
    )
}
const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <h1><Otsikko course={kurssi}/></h1>
      <p><Sisalto/></p>
      <p><Yhteensa sum ={tehtavia1 +tehtavia2 + tehtavia3}/></p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)