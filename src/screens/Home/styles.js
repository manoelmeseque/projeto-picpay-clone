import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
    background-color: #000;
    flex: 1;
`

export const Container = styled.ScrollView`

`

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const BalanceContainer = styled.View`


`
export const BalanceTitle = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-size: 14px;

`
export const Balance = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: bold;

`