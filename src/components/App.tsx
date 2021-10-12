import React from 'react';
import '../App.css';
import Accordion from "./Accordion";
import Rating from "./Rating";

function App() {
    console.log('App rendering');
  return (
    <div>

        <PageTitle title={'This is App component.'} />
        Article 1
        <Rating value={2} />
        <Accordion title={'My menu'} />
        Article 2
        <Rating value={3}/>
    </div>
  );
}

function PageTitle(props: any) {
    console.log('PageTitle rendering');
    return (
        <h1>{props.title}</h1>
    )
}

export default App;



