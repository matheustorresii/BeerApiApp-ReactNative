import React, { useState } from 'react'

import {
  MainView,
  MainViewInfo,
  BeerImage,
  BeerInfoContainer,
  BeerName,
  BeerVolume,
  BeerDesc,
  BeerInfo,
  BeerInfoTitle,
  BeerInfos,
  BeerInfoScroll,
  BeerTransparent,
} from './styles'

import { Dimensions } from 'react-native'

import { View,Text } from 'react-native'

export default function Beer(params){
  const screenWidth = Math.round(Dimensions.get('window').width)

  const[beer,setBeer] = useState(params.route.params.beer)
  return(
    <MainView
      style={{paddingTop:Platform.OS === 'android' && 25}}
    >

      <MainViewInfo>
        <BeerImage
          source={{uri:beer.image}}
          style={{height:screenWidth,width:screenWidth}}
        />
        <BeerInfoScroll>
          <BeerTransparent style={{height:screenWidth,width:screenWidth}} />
          <BeerInfoContainer>
            <BeerName>{beer.name}</BeerName>
            <BeerVolume>{'<' + beer.volume + '>'}</BeerVolume>
            <BeerDesc>{beer.description}</BeerDesc>

            <BeerInfo>
              <BeerInfoTitle>Info</BeerInfoTitle>
              <BeerInfos>Estilo: {beer.style}</BeerInfos>
              <BeerInfos>IBU: {beer.ibu}</BeerInfos>
              <BeerInfos>ABV: {beer.abv}</BeerInfos>
            </BeerInfo>
          </BeerInfoContainer>

        </BeerInfoScroll>


      </MainViewInfo>

    </MainView>
  )
}