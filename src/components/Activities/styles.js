import styled from "styled-components/native";

export const Container = styled.View`
    padding: 15px;
`

export const Header = styled.View`

    padding: 0 16px;
    justify-content: center;

`

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

export const Card = styled.View`

    background-color: #1e222b;
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;

`
export const CardHeader = styled.View`

    flex-direction: row;
    align-items: center;

`
export const Avatar = styled.Image``
export const Description = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 16px;
`
export const Bold = styled.Text`
    font-weight: bold;
`

export const CardBody = styled.View`
    margin-top: 20px;
`
export const Username = styled.Text`
    color: #fff;
    font-size: 18px;
`

export const CardFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const Details = styled.View`

    flex-direction: row;
    align-items: center;

`
export const Value = styled.Text`
    color: #f75175;
    font-size: 14px;
    font-weight: bold;
`

export const Divider = styled.View`
    width: 2px;
    height: 13px;
    background-color: rgba(255,255,255, 0.3);
    margin: 0 15px;
`

export const Data = styled.View`
    flex-grow: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-right: 16px;
`
export const DataLabel = styled.Text`
    color: #fff;
    margin-left: 5px;
`

export const Actions = styled.View`
    flex-direction: row;
`
export const Option = styled.TouchableOpacity`
    margin-left: 15px;
    flex-direction: row;
    align-items: center;
`
export const OptionLabel = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-left: 5px;
`