// @flow
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Body, Content, List, ListItem, Text, Right, Icon } from 'native-base';

type Props = {
  navigator: any,
};
type State = {};

export default class SettingsScreen extends React.Component<Props, State> {
  state = {};

  goToEditProfile = (): void => {
    const { navigator } = this.props;
    // eslint-disable-next-line global-require
    const IssueViewScreen = require('../issue-view/IssueViewScreen').default;
    navigator.push({
      component: IssueViewScreen,
      title: 'test',
      passProps: { id: 15555 },
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
                <Text numberOfLines={1}>Pranešėjas</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem first last button>
              <Body>
                <Text>Prisijungti į vilnius.lt profilį</Text>
                <Text style={styles.secondaryText}>Paskutinis importavimas: 2018-11-19 17:47</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem>
              <Body>
                <Text>Apie &quot;Tvarkau Vilnių&quot;</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Privatumo politika</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last>
              <Body>
                <Text>Programėlės versija</Text>
              </Body>
              <Right>
                <Text style={styles.rightText}>Gamybinė</Text>
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
    backgroundColor: '#fff',
  },
  secondaryText: {
    fontSize: 15,
    color: '#909095',
  },
  rightText: {
    color: '#909095',
  },
});
