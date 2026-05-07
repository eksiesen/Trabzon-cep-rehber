import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderSection } from '../components/home/HeaderSection';
import { PlacesPreviewSection } from '../components/home/PlacesPreviewSection';
import { QuickAccessGrid } from '../components/home/QuickAccessGrid';
import { SearchField } from '../components/home/SearchField';
import { SectionHeading } from '../components/home/SectionHeading';
import { TransportCarousel } from '../components/home/TransportCarousel';
import { YouthTrabzonSection } from '../components/home/YouthTrabzonSection';
import type { RootTabParamList } from '../navigation/types';
import { cardShadow } from '../constants/layout';
import { colors, radius } from '../theme';

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const navigation =
    useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  const goPlaces = () => navigation.navigate('Places');
  const goYouth = () => navigation.navigate('Youth');
  const goTransport = () => navigation.navigate('Transport');

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: tabBarHeight + 20 },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <HeaderSection
          onProfilePress={() => navigation.navigate('Profile')}
        />
        <SearchField />

        <View style={styles.transportFocus}>
          <SectionHeading
            title="Ulaşım"
            subtitle="Havalimanı, merkez ve sahil hattı — ilk seçimin burada."
          />
          <TransportCarousel />
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Tüm ulaşım seçenekleri"
            onPress={goTransport}
            style={({ pressed }) => [
              styles.transportSeeAll,
              pressed && { opacity: 0.9 },
            ]}
          >
            <Text style={styles.transportSeeAllText}>Tümünü Gör</Text>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.secondary}
            />
          </Pressable>
        </View>

        <PlacesPreviewSection onSeeAll={goPlaces} />

        <YouthTrabzonSection onOpenYouthTab={goYouth} />

        <SectionHeading
          title="Bilgi ve İletişim"
          subtitle="Duyurular, belediye ve geri bildirim."
        />
        <QuickAccessGrid />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    paddingHorizontal: 20,
  },
  transportFocus: {
    backgroundColor: colors.secondarySoft,
    borderRadius: radius.xl,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 14,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: colors.border,
    ...cardShadow,
  },
  transportSeeAll: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  transportSeeAllText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.secondary,
  },
});
