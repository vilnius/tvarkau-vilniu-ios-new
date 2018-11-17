// @flow
import * as React from 'react';
import {
  NavigatorIOS, StyleSheet, TabBarIOS, View,
} from 'react-native';
import IssueListScreen from './issue-list/IssueListScreen';
import IssueMapScreen from './issue-map/IssueMapScreen';

// list-ul-solid
const fontAwesome = {
  list: 'data:image/png;base64,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',
  map: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAO9UlEQVR4nO2db4iVV37HP99BRAaxQ5AwhDsh7DyIWAlLCCG4skgagrU2TWKjSW1Mw3b3xfZd6cveKfUplH1bCulSyibrWjfG/JMgIdgSZBtEQghWRMIdX2QeRELIigQZgsy3L55/57n3uXpnvOemy84XHO+9c59zfud3fuf375zzGxmzjviY+q4J+H3BOqMnhHVGTwjrjJ4Q1hk9IawzekJYZ/SEsM7oCWHDd9Hp0WRpg9AMsB94EPi4+Lfc7XVWvgua1oo0WdoI6hiekZlGvN3tdS73f0+TjAzTJNuI2YN4Fvhzm61gJAG+CLwBOt3tdS5NjKg1Ik2yGfBeWwck9gHTANjXEH/U7c1dCb8fndHpfLbBeJukPeBXgG2gLXbJYAr6QOI2cMPwkezjSBe6vc61qASuAkeTbJPMw8Z/IukF8tW4qX8s4H/q9ua64bNRGJ0m2RSwGXgYeAW8B/QQMIXB9BNWfGZAKpjuZZvLEu+ATgJZt9e5NXZi74I0WZrCug+xKxcUPY6ZRS1fNuSf+7Vub+6V8FdjZ3SaLD1g9AJwQPAYLXbAObdzZrumMaeIljH4puGs0AnsM93FuegMz4XF20EvAU/bbJeYakhvxdgB/LLb67wcfjAWY5gm2Yzt3YhDgr0yM8gbjAAjRElgTptwRasL5iqXagQuXlWD0Bbh58iN5xdpsnQS9B7wWbfX+XYcY8jHsTQFuh94EjiM2YXYbHtKCsdQjELQZHyu/9qwZolOk2wj8JDNPuHngYeRNjc6K9VEU0xvGH8udAz4GWba4ozgKuYpVOq9gsB2ulewv0ScB50AfgNcX6vHkibZZmAb8LztfULbgY0VzS5+NCV5BfgKuA080NfkgESvmtEFg3cDh23vkzRbzbTrmQaK90VH0g3MKcQb4I+7vblb6fzSbw0zkv4N+BubWclPgH5seBx7Y/Fs1V7dT/X5ivEV0NvA8YVep2Ht7zKWzcA+w4uynzRszlcW1N5QPY5qfYoM+1fk9uMJ8D9T2pf8G2tTHWmSbbDZJrwf9AqwzTCVd1yQ5SZDkBDccu4fvwG8jbjRkDqVLeRKZmFx7hrwqzTJ/lOwHTiM9EyhK+vgKn+MfF49JbQDvMPW36VJdh74d/BH3d7cgMdSCMojwAHgL4BZwVSDlRIE6q5QFzeAs8AJmw8XFue+AUjnl3ajesXmanKQh0MZXXgOW4FHgZcl7wIesJkq+JMzs2CqbWyhfCldFZxFekNwsdvr3BjWT5tBKSbjcppkXZtXJe02HJb0mM1WSVMEajHnjwBvstkj6XGjq+n80odIx4CrwBbj3bJetvx9wf2FTa4EpBpXAUnLwOfg04J3QFcW+jyfQjE2oBYt0croNFmaBR2x/WeSHgU2ltwo1UKlOyt3TMvAp+DjQmeAL0bRmaWBbEPxfAb8Ok2ytw2PSDxrfFCoA2yoDFFhUAtsEuwAdoD/CvQpcL/QDsSUCJ+p6QAwrAhuYZ9DOgF82O3NfTmc/kBSyoG02JUBRqdJloD+y/aD1dMuBaYkyIF90FWJM+D/wLrYXZxblUHK1cwQ6gIU3sV54HyaZP8I7MM+bLFHZqb0cHIbUVpSMJrBfiJXZaaS4uILVvXBitAlSafBr3cX53qrGQfU8YFbxtIm0S+TRzyB+FJb3nytfSX8KXAM/BHoerc3d3uthDFUpttRBC6n0iQ7I/wQ0iHB06DtmE2BEFQGrPSGCo1X6F9WMNclnbf5heULQl91e6MLS6j5KhXU8r02RneoiKlUMRLfgq4bTgm/Z/hk4R4Dh9J3BnJdv0oUDL8M/MPR+aWfS+wCHRbsAW0hyE6qjjgBLQu+AI5JfIB9cWFxbk3+eOUBlv70kCBmkNFmKheAMGDgAvCq8emF3tzXayFoOKGFIb2L6rgbCo/lFLmk70Q8h30A6eEgsPgGeB/zFtKZsYT0VmAfhqvBwfC40m9lhAaCt7qLc6/dM1GDVFZew72xuYlur3PpaJJdlvQvhp8JflIw+Qegz7uLneXx9ZYPwKr9D7eszsHEv4Vcq+V8ghQpR5z7q3nYPd6WF3qdlW6vc0PwZTHwFfLE1BiZzMBKDOOJEAOMLtVM6V+WhiUWhoTY4+0jZtulv+DKwLZigNH55IdO+JjXdX9/5SxG7SMmihBV7ZJcYlCiCaTapWzHRHyRjtmD+wVxiPc0KNEVY4M4Pyav7ajqqcy7REO/LAZJrxCtEp0LsqrZiUmnGCkwvIf2x29om+0XP3MVkL9rYVjL7kfzddyFXUpbGeNH6KFa2Y6yMsuALghdWvtpPddRRIKgoSpnLAiy1RElun4VpYsqi1hnlNo0QIvqUJEhJhC4ONxWLWtEN7q16I0VJXua6mIEP7rM7ebehyIbEzelOhYiL8vmSYMRvY585svNHAcfxkCk5dyHARdsnAh4VQrlaCF4ELPX+edIhiqcwJjuXcT2y0S9rEoDjJgmDcxHvWcVhcZQniM5HYWdLaQuitdR7/IPnliq0aI6cvekJmr4VtO4EG/NUEhykbyKYQxVdOLApo2yZ1geXLHj+J2NvgrXJgYD2vqK0U2xIU3pPzd96hoDjFbgcNfJ7EiqQ2WP8dZNyYZYc1ltzoZsGjVgyVsojFVUaXPZFb+zBreOU6jGMErAUspA0/GK596V+5Kx+mgeSIzRhyo70J8jCjHodYTnFMLGIqB5fDdSH41ET4Q+CmMY6ufRch1u2fOK5oPGbR6oUr3xkAtmqP5G2sqqvKHyfXXAZfwoz6lNIjqMB9UuzR02Slr3DOuNcMUNkoMUZiw4DAqimZpmTmikENxBliumNFeImfUn0M2RAtz6kNGdo+j2HZYiQaIhCZIxktn6cuw9iEgeB81UeuFxjKSja3elehcVcScyCIRiJVOqlIUL1rX303pSKTxxE9Ni10suJoIgIoob3bRiZfqiH607LP2IdRcx2GX7nXU9gmOaNCPdJlqMYb8P7XjWmtAGxOmkMZxIm4ZVfqhUT6Psgqv0BwvXru3y5bjJBKJN5iSOnOX91C5k21Bak0qVjCl+CnMiR8Ji53vDPMeQUL+F0TVz73QMdRyobnRFab3qpD4gHqP58JBRpaZH2TPsS4rke2BxA4roqzvebhzldY3auxnZj+7Xa/F2kBX4HdEQdZ+MPEChlOzhjsMQHZ0/lEtzXP0WX3+W+Y5IjZc735XuGDFgCfaxJhBMxFVLJWLq6DxVc/cArzVNGibJY0pcmYcYYj/G00cgOLGtbr4HMGKatPFo5BC8kY+Ov3iiZe/yF3feKRqavbvDM2OFik3g+Jo6DspAxZWKHvXYbhkRunk0LBZKQxUviyli5tVdVXhxJdUjHdutVFphQCaSjw7KMIwdsY26ylij0ARD0rEtB2iab3IfcXx0pUm2CZgFDmKmiyt2PwQ/kybZOcONhV5n1ffKvwuk89m08B80TpAOmdOW4wb1XmPpf49DII4mS9PAU4JDoL22Z4JaRDsMb0n0ZN49Op8dF77UXVz9Rf4BlEZwjMYwTZa22jwt9CJoN1Q5vKEOROsdlvCoxb34uUW1l52Y/TKHQN8z3qRiOYdnLorXCeJvgZ+ALqRJdhzz3+BsteUpKoyNudlm4FHbzwvtlzwLbAz7yd07AR64wD+oOqqZL/XF6igNKtc8Tl5pazdilqJUT3idonH6st4/nRJsIa/UtQdxxebDdH7pBNKVbq/zzaoIKlttjGnksWwAZl2sRNuPSrqP8HyiStVaSfJtm//pb+sOqqMMLVdF2DbgIHAIswPKSgn1utVA+0HRK+oJyEn3BsxO0E7ET4GP0iQ7AZy+Y/mgEOW1rP4DK3cexxTmMeAQ8BzQsT0FNe0qXaUyO5i3fdP4NUm/7m9zUHW4Kcl3y96lSTYL/BD7R1i7kKdBU02JhfAmgfJSZp9LvI/5X0l/jP0k0taqhkc5GUXeBbTJ9l5JTwJfp0l2CngTuHDHchClV3AXiSlW4kO2nxT6seWdyvvMn+1/vr4Evgx8avyW0Emha20ljlprKjWrwgy6XmmSbbad5MaAvba3SXmNzsFYR/VP+yvDJ0gnBOdAX3QXOytpsnQSaTuw3/azwHbEdJ1LdrAK2CBxP/BT8tVzKZ1fOo50FrjWX3DQ4YsWXh9NshnMDsHLmCckPWizcXDFVf0jeQWUkY/hOObThcXhdZdaGV1Lb87scCKPJtm08NOg5yWeAGbCq1/1wc1AVeAVxHXQSaQ3ZT7pZ0a3N7cMfAZ8libZv4KfMnoR8RQwTblUy90il0uXrc6rgu0BesAHR5PsmOCTUqqqpE+gngvpnTE+KOsA8i6s6SqlXKq3agVWTFiRuIw5Rr4ar3QXRytqOFBgME2y122OqLnkfmn7uqS/xDwQOtdlEqqvmCA2NxDnBMdt3l9YXH21lzTJOsAR4Fnj7+NQMMqLky6iM1ccymsk+bikD8hrRP09cBP4Q8wOxAHgoO2Z2nYE7QTjKHrIhM5ifoH4uLsGP7+V0cCRXIAqRn9LLv2tkWQg9cvkknXa8Kagt3ovoYnSizE8IvMKYhd5icrW+zcBMd8CXxb/fw+4jbmEeAiYqWzPENVt+6akK8Ax4APusajKEIn2kabq6D8aVs+8pBXwLdA5zHHEuW6vk62VoDuhcLd2YvYiXiJn4CaoPZtKSzTORRPo2z67FgqUfRvpJvAu8BZwvtvrjKWGVAujl163daS8mxFa7P77zjaXJN4F3uz2OhfHQdCoKIKhpzDPI/Zj7itdUwgj25D+8uma6YUPvyL0G+Ad26cWFufGLihtt7KWc6moqQ6LoCJdMz4PHJN0DnNjVIMwThQG9f10fuksMIt0EPynkh4BT9f+buD/VC8FsIJ8Vegjm9ctLgp/s7DWCPQuGJDoo/NLfy3p5+CpKoywbyF9AZwE3gMuj7sI1DiQJtlW7EeQfkReEfh+YENfce2biM8Nr8t8CL46lpzKXdCmo6fBr4JewNxGnDG8IXy225sbLRr7f4C89Kf327wk6WHjrwVvg97EfDzekmx3R2v96EL/bTFeEfpmnFXHJ400yTZhb7G0LHxrLaU9x4GJ/nmQ32es/2WhCWGd0RPCOqMnhHVGTwjrjJ4Q1hk9IawzekJYZ/SE8H8u2TDGiInbiQAAAABJRU5ErkJggg==',
};

type State = {
  tabs: {
    [string]: {|
      title: string,
      iconUri: string,
    |},
  },
  activeTab: string,
};

export default class App extends React.Component<*, State> {
  state = {
    tabs: {
      list: {
        title: 'Pranešimai',
        iconUri: fontAwesome.list,
      },
      map: {
        title: 'Žemėlapis',
        iconUri: fontAwesome.map,
      },
    },
    activeTab: 'list',
  };

  switchTabTo = (id: string) => {
    this.setState({
      activeTab: id,
    });
  };

  render() {
    const { tabs, activeTab } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.appBar} />
        <TabBarIOS style={styles.screen}>
          <TabBarIOS.Item
            title={tabs.list.title}
            icon={{ uri: tabs.list.iconUri, scale: 3 }}
            selected={activeTab === 'list'}
            onPress={() => this.switchTabTo('list')}
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
          <TabBarIOS.Item
            title={tabs.map.title}
            icon={{ uri: tabs.map.iconUri, scale: 3 }}
            selected={activeTab === 'map'}
            onPress={() => this.switchTabTo('map')}
          >
            <NavigatorIOS
              style={styles.screen}
              translucent={false}
              initialRoute={{
                title: 'Žemėlapis',
                navigationBarHidden: true,
                component: IssueMapScreen,
              }}
            />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
