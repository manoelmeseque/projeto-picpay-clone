import React from 'react'
import { Container, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    Avatar, 
    Description, 
    Bold, 
    CardBody, 
    Username,
    CardFooter,
    Details,
    Value,
    Divider,
    Data,
    DataLabel,
    Actions,
    Option,
    OptionLabel
} from './styles.js'
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import avatar from '../../images/avatar.png'

export default function Suggestions(){
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@manoelmeseque</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <Username>Manoel Meseque</Username>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 150,00</Value>
                        <Divider />
                        <Data>
                            <Feather name="lock" color="#fff" />
                            <DataLabel>
                                há dois anos
                            </DataLabel>
                        </Data>
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    )
}