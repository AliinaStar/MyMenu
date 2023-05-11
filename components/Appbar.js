import * as React from 'react';
import { Appbar as PaperAppbar } from 'react-native-paper';

const Appbar = () => (
  <PaperAppbar.Header>
    <PaperAppbar.BackAction onPress={() => {}} />
    <PaperAppbar.Content title="MyMenu" />
    <PaperAppbar.Action icon="calendar" onPress={() => {}} />
    <PaperAppbar.Action icon="magnify" onPress={() => {}} />
  </PaperAppbar.Header>
);

export default Appbar;
