import React, { Component } from 'react'
import CounterComponent from './generic/counterComponent/CounterComponent'
import './generic/counterComponent/CounterComponent.css'

export class Counter extends Component {
    render() {
        return (
            <section className="counters">
                <div>
                    <div>
                        <CounterComponent count="20" countName="Categories"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Counter
