import styled from 'styled-components'

export const MainView = styled.View`
  display:flex;
  flex:1;
  background:#613b10;
`

export const Triangle = styled.View`
  background:#301d08;
  height:200px;
  width:1000px;
  transform:rotate(15deg);
  position:absolute;
  z-index:1;
  left:-100px;
`

export const TriangleTop = styled(Triangle)`
  top:-100px;
`

export const TriangleBottom = styled(Triangle)`
  bottom:-150px;
`

export const MainViewList = styled.View`
  flex:1;
  z-index:2;
  display:flex;
`

export const ViewHeader = styled.View`
  width:100%;
  height:150px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  background:rgba(0,0,0,0.1);
  box-shadow:0 10px 12px rgba(0,0,0,0.2);
`

export const HeaderTitle = styled.Text`
  color:#daa520;
`

export const HeaderTitleBeer = styled(HeaderTitle)`
  font-size:70px;
`

export const HeaderTitleApi = styled(HeaderTitle)`
  font-size:35px;
  margin-top:20px;
  transform:rotate(22deg);
`

export const Card = styled.TouchableOpacity`
  height:400px;
  width:300px;
  background:#e6dac7;
  align-self:center;
  border-radius:15px;
  border:2px solid #daa520;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  margin:10px;
`

export const BeerImage = styled.Image`
  height:296px;
  width:296px;
`

export const BeerName = styled.Text`
  text-align:center;
  width:100%;
  color:#301d08;
  font-size:27px;
`

export const BeerVolume = styled.Text`
  color:#301d08;
  font-size:17px;
  text-align:center;
`

export const BeerFlatList = styled.FlatList`
  flex:1;
`
