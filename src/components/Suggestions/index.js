import React from 'react'
import { Container, Option, Img, Label } from './styles.js'

import img1 from '../../images/01.png'
import img2 from '../../images/02.png'
import img3 from '../../images/03.png'
import img4 from '../../images/04.png'
import img5 from '../../images/05.png'
import img6 from '../../images/06.png'
import img7 from '../../images/07.png'
import img8 from '../../images/08.png'
import img9 from '../../images/09.png'
import img10 from '../../images/10.png'
import img11 from '../../images/11.png'
import img12 from '../../images/12.png'
import img13 from '../../images/13.png'

const items = [
    {key: Math.random(), image: img1, label: "Doações"},
    {key: Math.random(), image: img2, label: "Doações"},
    {key: Math.random(), image: img3, label: "Doações"},
    {key: Math.random(), image: img4, label: "Doações"},
    {key: Math.random(), image: img5, label: "Doações"},
    {key: Math.random(), image: img6, label: "Doações"},
    {key: Math.random(), image: img7, label: "Doações"},
    {key: Math.random(), image: img8, label: "Doações"},
    {key: Math.random(), image: img9, label: "Doações"},
    {key: Math.random(), image: img10, label: "Doações"},
    {key: Math.random(), image: img11, label: "Doações"},
    {key: Math.random(), image: img12, label: "Doações"},
    {key: Math.random(), image: img13, label: "Doações"},
]

export default function Suggestions(){
    return (
        <Container>
            {items.map((item) => (
                <Option key={item.key}>
                    <Img source={item.image} />
                    <Label>{item.label}</Label>
                </Option>
            ))}
            
        </Container>
    )
}