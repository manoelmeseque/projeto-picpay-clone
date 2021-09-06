import React from 'react'
import { Text } from 'react-native'
import { Container, Banner, Section, BannerLabel, BannerCDI, BannerBalance, BannerCashBack, FormsPayment } from './styles'

export default function Wallet(){
    return (
        <Container>

            <Banner>

                <BannerLabel>Instituição 000 . PicPay Seriviços S.A</BannerLabel>
                <BannerLabel>Ag 0000 . Cc 000000000</BannerLabel>
                <BannerCDI>Saldo rendendo 120% do CDI</BannerCDI>
                <BannerBalance>R$0,00</BannerBalance>
                <BannerCashBack>R$0,00 desse saldo é de CashBack ></BannerCashBack>

            </Banner>
            <Section>

                <FormsPayment>Formas de pagamento</FormsPayment>

            </Section>

        </Container>
    )
}