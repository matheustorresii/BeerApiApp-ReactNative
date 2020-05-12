import React, { useEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import api from '../../services/api'

import {
  MainView,
  TriangleTop,
  TriangleBottom,
  MainViewList,
  ViewHeader,
  HeaderTitleBeer,
  HeaderTitleApi,
  Card,
  BeerImage,
  BeerName,
  BeerVolume,
  BeerFlatList,
} from './styles'

export default function Main(){
  const navigation = useNavigation()
  const [beers,setBeers] = useState([])
  
  useEffect(()=>{
    async function loadBeers(){
      const response = await api.get('/')

      setBeers(response.data)
    }
    loadBeers();
  },[])

  function navigateToBeer(beer){
    navigation.navigate('Beer', {beer})
  }

  return(
    <MainView
      style={{paddingTop:Platform.OS === 'android' && 25}}
    >
      <TriangleTop/>
      <TriangleBottom/>

      <MainViewList>

        <ViewHeader>
          <Ionicons name='ios-beer' color='#daa520' size={70} />
          <HeaderTitleBeer>BEER</HeaderTitleBeer>
          <HeaderTitleApi>api</HeaderTitleApi>
        </ViewHeader>

        <BeerFlatList
          data={beers}
          keyExtractor={(item,index)=>index.toString()}
          renderItem={({item})=>(
            <Card onPress={()=>navigateToBeer(item)}>
              <BeerImage source={{uri:item.image}}/>
              <BeerName>{item.name}</BeerName>
              <BeerVolume>{'<' + item.volume + '>'}</BeerVolume>
            </Card>
          )}
        />

        

      </MainViewList>

    </MainView>
  )
}