import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, StyleSheet, ScrollView, Platform, TouchableOpacity
} from 'react-native';

import Constants from 'expo-constants';

// Galio components
import {
  Button, Block, Card, Text, Icon, NavBar,
} from 'galio-framework';
import theme from '../theme';

const Author = props => (
  <Block row shadow middle space="between" style={styles.author}>
    <Block flex={0.25}>
      <Image source={{ uri: props.avatar }} style={styles.avatar} />
    </Block>
    <Block flex={0.7} style={styles.middle}>
      <Text style={{ fontWeight: '500' }}>{props.title}</Text>
      <Text p muted>{props.caption}</Text>
    </Block>
    <Block flex={0.5} row middle space="around">
      <Block row middle>
        <Icon name="eye" family="material-community" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
        <Text size={theme.SIZES.FONT * 0.7} p muted style={{ marginLeft: theme.SIZES.FONT * 0.25 }}>25.6k</Text>
      </Block>
      <Block row middle>
        <Icon name="heart-outline" family="material-community" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
        <Text size={theme.SIZES.FONT * 0.7} p muted style={{ marginLeft: theme.SIZES.FONT * 0.25 }}>936</Text>
      </Block>
    </Block>
  </Block>
);

Author.defaultProps = {
  author: null,
  title: null,
  caption: null,
};

Author.propsTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
};


const News = props => (
  <Block safe flex>
    <NavBar
      title="News"
      titleStyle={{ alignSelf: 'flex-start' }}
      leftIconColor={theme.COLORS.MUTED}
      left={(
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Icon 
            name="menu"
            family="feather"
            size={theme.SIZES.BASE}
            color={theme.COLORS.ICON}
          />
        </TouchableOpacity>
      )}
      style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
      right={[
        <Button
          key="right-options"
          color="transparent"
          style={styles.button}
          onPress={() => props.navigation.openDrawer()}
        >
          <Icon size={theme.SIZES.BASE * 1.0625} name="fire" family="font-awesome" color={theme.COLORS.MUTED} />
        </Button>,
        <Button
          key="right-search"
          color="transparent"
          style={styles.button}
          onPress={() => props.navigation.openDrawer()}
        >
          <Icon size={theme.SIZES.BASE * 1.0625} name="leaf" family="font-awesome" color={theme.COLORS.MUTED} />
        </Button>,
      ]}
    />

    <ScrollView style={{ flex: 1 }}>
      <Block flex style={styles.news}>
        <Image
          source={{ uri: 'https://pbs.twimg.com/media/EhFxaKHWsAEfgkT.jpg' }}
          style={styles.articleImage}
        />
        <Block style={styles.article}>
          <Text h4>
            COVID-19 UAlbany Update
          </Text>
          <Text muted style={[styles.text, { marginVertical: theme.SIZES.BASE * 1.3 }]}>
            University at albany
          </Text>
          <Text style={styles.text}>
                        The academic calendar has been shortened to minimize the risk of travel-related infection. Courses are being delivered as either in-person, hybrid or fully online classes. On-campus research activities have resumed in phases, ensuring a gradual and safe return to operations.  
           
          </Text>
          
        </Block>
      </Block>
    </ScrollView>

   
  </Block>
);

const styles = StyleSheet.create({
  article: {
    marginTop: theme.SIZES.BASE * 1.75,
  },
  articleImage: {
    borderRadius: theme.SIZES.BASE / 2,
    height: theme.SIZES.BASE * 13.75,
  },
  news: {
    marginTop: theme.SIZES.BASE / 2,
    paddingBottom: theme.SIZES.BASE / 2,
    justifyContent: 'flex-start',
    paddingHorizontal: theme.SIZES.BASE,
  },
  button: {
    width: theme.SIZES.BASE * 2,
    borderColor: 'transparent',
  },
  author: {
    position: 'absolute',
    right: theme.SIZES.BASE,
    left: theme.SIZES.BASE,
    bottom: Constants.statusBarHeight,
    backgroundColor: theme.COLORS.WHITE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: theme.SIZES.BASE / 2,
  },
  text: {
    fontWeight: '400',
    fontSize: theme.SIZES.FONT * 0.875,
    lineHeight: theme.SIZES.BASE * 1.25,
    letterSpacing: 0.3,
    marginBottom: theme.SIZES.BASE,
  },
});

export default News;