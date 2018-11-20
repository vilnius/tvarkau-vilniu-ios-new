// @flow
import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Section from '../common-components/Section/Section';
import SectionRow from '../common-components/Section/SectionRow';

type Props = {};
type State = {};

export default class SettingsScreen extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <ScrollView contentInset={{ bottom: 100, top: 30 }} style={styles.container}>
        <Section>
          <SectionRow left="Pranešėjas" right="Anonimiškai" />
        </Section>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efeff4',
  },
});
