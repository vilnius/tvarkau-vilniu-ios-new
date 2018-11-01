// @flow
import * as React from 'react';
import {
  StyleSheet, View, NavigatorIOS, TabBarIOS,
} from 'react-native';
import IssueListScreen from './issue-list/IssueListScreen';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBar: {
    width: '100%',
    height: 20,
    backgroundColor: '#f9f9f9',
  },
  screen: {
    width: '100%',
    flex: 1,
  },
});

// list-ul-solid
const fontAwesome = {
  list: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADmElEQVRoge2Yv6scVRTHP99leQQJjxBEZJmI4JYWYmXhj97CQlAJFtHOQhAUC4uJxf4DViJY2BibiIUYFasUQVLFCBYS9lmERVJYLI/HIyzLfC3mzsy9M/M08QeOy5xi9853zr33fO85935nRsbsgk3+6wD+KRuJDM1GIkOznSEyrRqL+WoGPAtuyJkCuJEfnLsVfE4BT4FnIKiP7r62/nhmB5+OW7vvCdfmMD/IvqpQVTqymK8+AV5L5zLAt5JeyZfZ4WK+etzwA/ZUdRAGqxzJoN7g+gJq8zJS9/5JOPYW6bl8mX0PSWl5rwyqQSQhaVr5GU+Ep1IcrKgWI8XbVt1I52jm4r5wl2T2quvuHokCsU2f8ttxMC6z0MF7p6a/nJpKu1dcLbBLpJ2RnlGGkZEU3L2MGP0CKtKMUAC3gU1wOgatBpKRI8Sq9huffgdmO0MkVvbnwRdAkbK7QFwx+uziMtsu5qsHgffAjzjabtV+dGgpwUpr2mXPk/F0jD482Bp4N19m64QI+FXg5ZhlmOys4EtgbTwTvF0qOLWyKyg7EV5NqGi0Mgy18ECmfmLRn+JhuC34EnAVRh0ZsI505uN/mhFD0V4t29gugCIauhhMRqRtdT2NblwGTgETh+BUkvsGuBt87gAfIs3iIVH/u4VjklGr78STqnb828Wj0deYn+soRmUfmMWCOAc/0dokIG4Z/XRxmRWL+eoB4Gnw/gAEcQN8ly+zuwkRw1uCN5NSlArgC8HrwJHxo4LLRvvJdggK2Raz+D9pO5xGvXh3jDYe7Bh4BrgBUWkJn23PbHtifCYiPAX2GcCphdnD3q8ud09HOvMxKvsJ9u9mJHr61Y/Ak2kgLmxuStqUoegIuA6ciQ+FhGx8XPUeW/r7ePl/DM2rbkSEj4CvE/rlYXQnX2bHAbkNnAefTpaqr62aZbRWySLFKxH5tPH2U0M4hq1NfpAto26jsg/KYmV/AbgATKK0F8AV4NN8mW0Wj60eMn5f0qz8Jlv2dV1JosJthf/Sp2o3fUKJ/AU8AIfAO/nBud8SIsYvCb1YcmiK1vZpSZ8DG8sPC70BTFKlbcqzwustEit4VfNWquD3iQNY2go+Bq5BouwhEy0dQUxIP3ZPBqEjBuw6ETujI6OyDy0jsbJfAk/Dngje9Qe6ozIU/WrzAXKWrEnYiPf2PkL9+tqPt99HuniJaQ3crEMYBXFgNhIZmo1EhmY7Q+R3ue9R+Ncgt5cAAAAASUVORK5CYII=',
};

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component<*> {
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.appBar} />
        <TabBarIOS style={styles.screen}>
          <TabBarIOS.Item
            title="Pranešimai"
            icon={{ uri: fontAwesome.list, scale: 2 }}
            selected
          >
            <NavigatorIOS
              style={styles.screen}
              translucent={false}
              initialRoute={{
                title: 'Pranešimai',
                backButtonTitle: '   ',
                navigationBarHidden: true,
                component: IssueListScreen,
              }}
            />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}
