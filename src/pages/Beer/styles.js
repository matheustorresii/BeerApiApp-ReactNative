import styled from 'styled-components'

export const MainView = styled.View`
  display:flex;
  flex:1;
  background:white;
`

export const MainViewInfo = styled.View`
  flex:1;
  z-index:2;
  display:flex;
  align-items:center;
`

export const BeerImage = styled.Image`
  position:absolute;
`

export const BeerInfoScroll = styled.ScrollView`
  display:flex;
  width:100%;
  height:100%;
`

export const BeerTransparent = styled.View`
`

export const BeerInfoContainer = styled.View`
  display:flex;
  width:100%;
  height:100%;
  background:#613b10;
  border-top-left-radius:15px;
  border-top-right-radius:15px;
  margin-top:-5px;
`

export const BeerText = styled.Text`
  color:#e6dac7;
  text-align:center;
`

export const BeerName = styled(BeerText)`
  font-size:45px;
  font-weight:600;
  font-style:italic;
  color:white;
`

export const BeerVolume = styled(BeerText)`
  font-size:25px;
`

export const BeerDesc = styled(BeerText)`
  text-align:justify;
  font-size:20px;
  margin:5px;
  padding:5px;
  border:1px solid #301d08;
  border-radius:15px;
`

export const BeerInfo = styled.View`
  display:flex;
  flex-direction:column;
  padding:20px;
`

export const BeerInfoTitle = styled.Text`
  color:white;
  font-size:30px;
`

export const BeerInfos = styled(BeerText)`
  text-align:left;
  font-size:20px;
`