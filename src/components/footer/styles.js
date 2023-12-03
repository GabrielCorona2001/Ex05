import styled from 'styled-components'
import waveImg from '../../assets/wave.svg'


export const FooterDiv = styled.footer`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`

export const Nav = styled.nav`
display: flex;
flex-direction: row;
gap: 50px;
border-top: solid 1px #ECEFF2;
padding-top: 20px;
color: #3F3D56;
font-size: 15px;
font-family: 'Open Sans', sans-serif;
font-weight: 700;
line-height: 22.15px;
text-align: center;
`

export const Wave = styled.img`
width: 100%;


`

Wave.defaultProps = {
    src: waveImg
}