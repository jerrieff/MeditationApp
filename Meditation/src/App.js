/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';

import {
  imageSlide,
  Intersect1,
  Intersect2,
  Intersect3,
  Intersect4,
  sideBar,
  Logo,
  Donat,
  circleSlide,
} from './assets';

const App = () => {
  return (
    <View style={{flex: 1, padding: 16}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image source={sideBar} width={12} height={12} />
        </View>
        <Image source={Logo} width={12} height={12} />
      </View>
      <View
        style={{
          position: 'relative',
          backgroundColor: '#14E84F',
          borderRadius: 12,
          marginTop: 16,
        }}>
        <View style={{marginBottom: 8}}>
          <Image source={Donat} style={{flexShrink: 0}} />
          <View style={{flexDirection: 'row', padding: 16, marginTop: -40}}>
            <View style={{flex: 1}}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                Get Premium
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: 'bold',
                  marginTop: 8,
                }}>
                Bonus thetha premium
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: 'bold',
                  marginTop: 8,
                }}>
                Lorem ipsum is simply dummy
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: 'yellow',
                  marginTop: 16,
                  width: 64,
                  borderRadius: 8,
                  padding: 6,
                }}>
                <Text style={{fontSize: 12}}>Buy Now</Text>
              </TouchableOpacity>
            </View>

            <Image
              source={imageSlide}
              style={{
                zIndex: 4,
                position: 'absolute',
                right: 10,
                bottom: 2,
              }}
            />

            <Image
              source={circleSlide}
              style={{
                zIndex: 0,
                position: 'absolute',
                right: 0,
                bottom: 60,
              }}></Image>
          </View>
        </View>
      </View>
      <View
        style={{flexDirection: 'row', marginTop: 16, justifyContent: 'center'}}>
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 12,
            backgroundColor: '#14E84F',
            marginRight: 8,
          }}
        />
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 12,
            backgroundColor: '#C1EEDE',
            marginRight: 8,
          }}
        />
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 12,
            backgroundColor: '#C1EEDE',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
        <View style={{alignItems: 'center'}}>
          <Image source={Intersect1} style={{width: 70, height: 70}} />
          <Text style={{marginTop: 8, fontSize: 12}}>Binaural Beasts</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image source={Intersect2} style={{width: 70, height: 70}} />
          <Text style={{marginTop: 8, fontSize: 12}}>Solfeggio</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image source={Intersect3} style={{width: 70, height: 70}} />
          <Text style={{marginTop: 8, fontSize: 12}}>Instrumental</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image source={Intersect4} style={{width: 70, height: 70}} />
          <Text style={{marginTop: 8, fontSize: 12}}>Noise Therapy</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
