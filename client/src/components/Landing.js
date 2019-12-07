import React, { Component } from 'react'
import CarouselComponent from './generic/CarouselComponent'
import Counter from './Counter'
import CardComponent from './CardComponent'
import TeamComponent from './teamComponent/TeamComponent'

class Landing extends Component{
    render(){
        return(
            <div>
                <CarouselComponent/>
                <Counter />
                <CardComponent categoryName="selenium" imagePath="https://amartanwar42.github.io/ThoughtWorks-QA-Knowledge-Hub/images/cards/Agile-QA-process.png"/>
                <TeamComponent />         
            </div>
        ) 
    }
    
}
export default  Landing ;