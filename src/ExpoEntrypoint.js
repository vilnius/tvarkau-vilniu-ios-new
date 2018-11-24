/* eslint-disable no-undef */
import { KeepAwake, registerRootComponent } from 'expo';
import Boot from './Boot';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(Boot);
