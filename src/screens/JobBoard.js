import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Galio components
import {
  Card, Block, NavBar, Icon
} from 'galio-framework';
import theme from '../theme';

const { width } = Dimensions.get('screen');

const cards = [
  {
    id: 1,
    image: 'https://ualbanysports.com/images/2021/4/12/app_graphic_16_9_UAlbany.jpg?preset=large.socialmediaimage',
    avatar: 'https://www.albany.edu/sites/default/files/styles/person_page_thumbnail/public/2020-01/Jonathan-Muckell_0927-400by400.jpg?h=a7e6d17b&itok=v9divXdo',
    title: 'Undergrad Research Assistant                   UAlbany App',
    caption: 'Professor Muckell',
    location: 'CEAS Department',

   
  },
  {
    id: 2,
    image: 'https://back.3blmedia.com/sites/default/files/styles/ratio_3_2/public/triplepundit/wide/solar-power-electric-vehicle-renewable-energy.jpg',
    avatar: 'https://www.albany.edu/sites/default/files/styles/person_page_thumbnail/public/2020-10/Jeffrey-Braunstein_09_3991by3749.jpg?h=96730a1b&itok=1-gbaYFG',
    title: 'Undergrad Research Assistant                   Solar Vehicles',
    caption: 'Professor Braunstein',
    location: 'ECE Department',
  },
  {
    id: 3,
    image: 'https://www.albanytech.edu/images/events/mtb/ACT-Computer-Lab-alternative-view.jpg',
    avatar: 'https://www.albany.edu/sites/default/files/styles/person_page_thumbnail/public/2020-01/Jonathan-Muckell_0927-400by400.jpg?h=a7e6d17b&itok=v9divXdo',
    title: 'Teaching Assistant                                     Design Lab',
    caption: 'Professor Muckell',
    location: 'ECE Department',
    padded: true,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1490049350474-498de43bc885?&w=1600&h=900&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    padded: true,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1493612216891-65cbf3b5c420?&w=1500&h=900&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    full: true,

  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1506321806993-0e39f809ae59?&w=1500&h=1900&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    full: true,
  },
];

export default class JobBoard extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="
                        Job Board
          "
          left={(
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          )}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {cards && cards.map((card, id) => (
              <Card
                key={`card-${card.image}`}
                flex
                borderless
                shadowColor={theme.COLORS.BLACK}
                titleColor={card.full ? theme.COLORS.WHITE : null}
                style={styles.card}
                title={card.title}
              
                caption={card.caption}
                location={card.location}
                avatar={`${card.avatar}?${id}`}
                image={card.image}
                imageStyle={[card.padded ? styles.rounded : null]}
                imageBlockStyle={[
                  card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
                  card.full ? null : styles.noRadius,
                ]}
                footerStyle={card.full ? styles.full : null}
              >
                {card.full ? <LinearGradient colors={['transparent', 'rgba(0,0,0, 0.8)']} style={styles.gradient} /> : null}
            
              </Card>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});