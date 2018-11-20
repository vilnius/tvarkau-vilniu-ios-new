// @flow
import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Issue } from '../api/model';
import { getIssue } from '../api/legacyApi';
import StatusBadge from '../common-components/StatusBadge';
import PhotosCarousel from './PhotosCarousel';

type Props = {
  id: number,
};

type State = {
  loading: boolean,
  issue?: Issue,
};

export default class IssueViewScreen extends React.Component<Props, State> {
  state = {
    // eslint-disable-next-line react/no-unused-state
    loading: true,
    issue: undefined,
  };

  async componentDidMount() {
    await this.initialFetch();
  }

  initialFetch = async () => {
    const { id } = this.props;
    await this.setStateAsync({ loading: true });
    const issue = await getIssue(id);
    return this.setStateAsync({ issue, loading: false });
  };

  setStateAsync = (state: any) =>
    // $FlowFixMe
    new Promise(resolve => {
      this.setState(state, resolve);
    });

  renderReport = (issue: Issue) => (
    <View style={styles.entry}>
      <View style={styles.entryHeader}>
        <Text style={styles.entryHeaderCaption}>Pranešimas</Text>
        <Text style={styles.entryHeaderDate}>{issue.date}</Text>
      </View>
      <Text style={styles.entryContent}>{issue.description}</Text>
    </View>
  );

  renderAnswer = (issue: Issue) => (
    <View style={[styles.entry, styles.answer]}>
      <View style={styles.entryHeader}>
        <Text style={styles.entryHeaderCaption}>Atsakymas</Text>
        <Text style={styles.entryHeaderDate}>{issue.answerDate}</Text>
      </View>
      <Text style={styles.entryContent}>{issue.answer}</Text>
    </View>
  );

  render() {
    const { issue } = this.state;
    if (!issue) {
      return <View />;
    }
    return (
      <ScrollView contentInset={{ bottom: 100 }}>
        {!!issue.photos.length && <PhotosCarousel photos={issue.photos} />}
        <View style={styles.header}>
          <Text style={styles.headerCategory}>{issue.category}</Text>
          <View style={styles.headerStatus}>
            <StatusBadge status={issue.status} />
          </View>
        </View>
        {!!issue.location && issue.location.address && <Text style={styles.location}>{issue.location.address}</Text>}
        {this.renderReport(issue)}
        {!!issue.answer && this.renderAnswer(issue)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  headerCategory: {
    fontSize: 20,
    flexGrow: 1,
    width: 100,
  },
  headerStatus: {
    marginTop: 5,
    width: 100,
  },
  location: {
    padding: 10,
  },
  entry: {
    padding: 10,
  },
  answer: {
    backgroundColor: '#f2f2f2',
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  entryHeaderCaption: {
    fontWeight: 'bold',
  },
  entryHeaderDate: {
    color: '#9a9a9e',
  },
  entryContent: {
    fontSize: 14,
    lineHeight: 21,
  },
});
