import * as React from 'react'
import styled from '@emotion/styled'
import { Button } from 'antd';

const Carousel = styled('div')`
  display: flex;
  overflow-x: scroll;
`
const image="https://amartanwar42.github.io/ThoughtWorks-QA-Knowledge-Hub/images/cards/b3.jpg"

const cover={
    display: 'flex',
    borderRadius: '6px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    transition: 'ease-in-out 1000ms',
    padding: '2rem',
    'fontSize': '1.618rem',
    fontWeight: '600',
    color: '#fff',
    overflow: 'hidden',
    fontFamily: 'Poppins'
}
const Card = styled('div')`
  flex-grow: 1;
  flex-shrink: 0;
  width: 220px;
  height: 300px;
  margin: 25px;
  background-color: turquoise;
  border-radius: 4px;
  background-image:url(https://amartanwar42.github.io/ThoughtWorks-QA-Knowledge-Hub/images/cards/b3.jpg)
`

export const ScrollCard = () => {
    const ref = React.useRef()
    return (
        <>
            <div>
                <h1 className="heading">Category</h1>
            </div>     
            <Carousel innerRef={ref}>
                <a href="http://www.google.com" style={{ textDecoration:'none'}}>
                    <Card key={1}>
                        <p style={cover}>test</p>
                    </Card>
                </a>
                <a href="http://www.google.com" style={{ textDecoration:'none'}}>
                    <Card key={2}>
                        <p style={cover}>test</p>
                    </Card>
                </a>
                <a href="http://www.google.com" style={{ textDecoration:'none'}}>
                    <Card key={3}>
                        <p style={cover}>test</p>
                    </Card>
                </a>
                <a href="http://www.google.com" style={{ textDecoration:'none'}}>
                    <Card key={4}>
                        <p style={cover}>test</p>
                    </Card>
                </a>
                <a href="http://www.google.com" style={{ textDecoration:'none'}}>
                    <Card key={5}>
                        <p style={cover}>test</p>
                    </Card>
                </a>
                <a href="http://www.google.com" style={{ textDecoration:'none'}}>
                    <Card key={6}>
                        <p style={cover}>test</p>
                    </Card>
                </a>
                <a href="http://www.google.com" style={{ textDecoration:'none'}}>
                    <Card key={7}>
                        <p style={cover}>test</p>
                    </Card>
                </a>
                <a href="http://www.google.com" style={{ textDecoration:'none'}}>
                    <Card key={8}>
                        <p style={cover}>test</p>
                    </Card>
                </a>
            </Carousel>
            <Button type="primary" size={"large"} style={{ marginLeft: '50%', paddingLeft: '2%', paddingRight: '2%', fontFamily: 'poppins', fontSize: '22px' }}> See All</Button>
        </>
    )
}
