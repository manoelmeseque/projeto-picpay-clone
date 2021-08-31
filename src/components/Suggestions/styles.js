import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:{
        alignItems: 'center',
        paddingLeft: 16,
    }
}))`

    height: 130px;
    background-color: #1e222b;

`

export const Option = styled.TouchableOpacity`
    padding-right: 16px;
`

export const Img = styled.Image``

export const Label = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`