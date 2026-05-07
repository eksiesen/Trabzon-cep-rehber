export type RootTabParamList = {
  Home: undefined;
  Transport:
    | {
        detailKey?: 'dolmus' | 'taksi' | 'otobus' | 'havalimani' | 'havas';
      }
    | undefined;
  Places: undefined;
  Youth: undefined;
  Profile: undefined;
};
