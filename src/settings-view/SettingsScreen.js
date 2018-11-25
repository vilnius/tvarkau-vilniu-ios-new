// @flow
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Body, Content, List, ListItem, Right, Icon } from 'native-base';
import { iOSColors } from 'react-native-typography';
import AppText from '../common-components/AppText';

type Props = {
  navigator: any,
};
type State = {};

export default class SettingsScreen extends React.Component<Props, State> {
  state = {};

  goToEditProfile = (): void => {
    const { navigator } = this.props;
    // eslint-disable-next-line global-require
    const ProfileEditScreen = require('../profile-edit/ProfileEditScreen').default;
    navigator.push({
      component: ProfileEditScreen,
      title: 'Pranešėjo profilis',
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List style={styles.list}>
            <ListItem itemDivider />
            <ListItem last onPress={() => this.goToEditProfile()}>
              <Body>
                <AppText>Pranešėjas</AppText>
                <AppText secondary gray>
                  Anonimas
                </AppText>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem first last button>
              <Body>
                <AppText>Prisijungti į vilnius.lt profilį</AppText>
                <AppText secondary gray>
                  Paskutinis importavimas: 2018-11-19 17:47
                </AppText>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem>
              <Body>
                <AppText>Apie &quot;Tvarkau Vilnių&quot;</AppText>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <AppText>Privatumo politika</AppText>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last>
              <Body>
                <AppText>Programėlės versija</AppText>
              </Body>
              <Right>
                <AppText gray>Gamybinė</AppText>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
  },
  list: {
    backgroundColor: iOSColors.white,
  },
});
