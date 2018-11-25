// @flow
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Container, Content, List, ListItem, Right, Switch, Form, Item, Label, Input } from 'native-base';
import { iOSColors } from 'react-native-typography';
import AppText from '../common-components/AppText';

type Props = {};

type State = {
  loading: boolean,
  anonymous?: boolean,
  fullName?: string,
  personalId?: number,
  email?: string,
  phoneNumber?: string,
};

export default class ProfileEditScreen extends React.Component<Props, State> {
  state = {
    // eslint-disable-next-line react/no-unused-state
    loading: true,
    anonymous: true,
    fullName: undefined,
    personalId: undefined,
    email: undefined,
    phoneNumber: undefined,
  };

  inputRefs = {
    fullName: undefined,
    personalId: undefined,
    email: undefined,
    phoneNumber: undefined,
  };

  renderProfileForm = () => {
    const { fullName, personalId, email, phoneNumber } = this.state;
    return (
      <Form>
        <Item inlineLabel>
          <Label>Vardas pavardė</Label>
          <Input
            ref={c => {
              this.inputRefs.fullName = c;
            }}
            returnKeyType="next"
            autoCorrect={false}
            value={fullName}
            onValueChange={val => this.setState({ fullName: val })}
            // $FlowFixMe
            onSubmitEditing={() => this.inputRefs.personalId._root.focus()} // eslint-disable-line no-underscore-dangle
          />
        </Item>
        <Item inlineLabel>
          <Label>Asmens kodas</Label>
          <Input
            ref={c => {
              this.inputRefs.personalId = c;
            }}
            keyboardType="numeric"
            maxLength={11}
            secureTextEntry
            returnKeyType="done" // "next" does not work with numeric keyboard at the time of writing
            autoCorrect={false}
            value={personalId}
            onValueChange={val => this.setState({ personalId: val })}
            // $FlowFixMe
            onSubmitEditing={() => this.inputRefs.email._root.focus()} // eslint-disable-line no-underscore-dangle
          />
        </Item>
        <Item inlineLabel>
          <Label>El. paštas</Label>
          <Input
            ref={c => {
              this.inputRefs.email = c;
            }}
            textContentType="emailAddress"
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
            value={email}
            onValueChange={val => this.setState({ email: val })}
            // $FlowFixMe
            onSubmitEditing={() => this.inputRefs.phoneNumber._root.focus()} // eslint-disable-line no-underscore-dangle
          />
        </Item>
        <Item inlineLabel>
          <Label>Telefonas</Label>
          <Input
            ref={c => {
              this.inputRefs.phoneNumber = c;
            }}
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
            returnKeyType="done"
            autoCorrect={false}
            value={phoneNumber}
            onValueChange={val => this.setState({ phoneNumber: val })}
          />
        </Item>
      </Form>
    );
  };

  render() {
    const { anonymous } = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          <List style={styles.list}>
            <ListItem itemDivider />
            <ListItem noBorder>
              <Body>
                <AppText>Pranešti anonimiškai</AppText>
              </Body>
              <Right>
                <Switch value={anonymous} onValueChange={val => this.setState({ anonymous: val })} />
              </Right>
            </ListItem>
            <ListItem itemDivider />
            {!anonymous && (
              <ListItem noIndent noBorder>
                <Body>{this.renderProfileForm()}</Body>
              </ListItem>
            )}
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
