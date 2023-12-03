import img from '../../assets/img.svg'
import { BodyDiv, Title, TitleSpan, BodyMid, SpanGrey, BodyBottom, FontWeight } from './styles.js'


export function Body() {
  

    return (

        <BodyDiv>
            <img src={img}></img>
            <Title>O seu próximo
                <TitleSpan> destino </TitleSpan>
                pode estar aqui...
            </Title>
            <BodyMid>
                <p>Aqui você encontra uma seleção de <SpanGrey>pacotes completos </SpanGrey>para as suas férias!</p>
                <BodyBottom>No <FontWeight>ConnectFlight</FontWeight> você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã,
                    e até seguro viagem com <SpanGrey>preços arrasadores!</SpanGrey></BodyBottom>
                <p>Se você ainda não tem um destino definido, confira nossa seção de ofertas.   </p>
            </BodyMid>
        </BodyDiv>

    )
}