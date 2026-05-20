import { Ionicons } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  ImageBackground,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { cardShadow } from '../constants/layout';
import { colors, radius } from '../theme';
import type { YouthUni } from './YouthUniScreen';

export function YouthUniDetailScreen({
  uni,
  onBack,
}: {
  uni: YouthUni;
  onBack: () => void;
}) {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  const [expandedItems, setExpandedItems] = React.useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const openUrl = async (url: string) => {
    const can = await Linking.canOpenURL(url);
    if (can) await Linking.openURL(url);
  };

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: tabBarHeight + 28 },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Geri"
          onPress={onBack}
          style={({ pressed }) => [styles.backBtn, pressed && { opacity: 0.9 }]}
          hitSlop={10}
        >
          <Ionicons name="chevron-back" size={18} color={colors.textPrimary} />
          <Text style={styles.backText}>Üniversiteler</Text>
        </Pressable>

        {/* Upper section: cover image, university name, map button */}
        <View style={[styles.coverCard, cardShadow]}>
          <ImageBackground
            source={uni.image}
            style={styles.coverImg}
            imageStyle={styles.coverImgRadius}
            resizeMode="cover"
          >
            <View style={styles.coverOverlay} />
          </ImageBackground>
        </View>

        <Text style={styles.title}>{uni.title}</Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Haritada Aç"
          onPress={() => openUrl(uni.mapUrl)}
          style={({ pressed }) => [styles.mapBtn, pressed && styles.pressed]}
        >
          <Ionicons name="map-outline" size={18} color={colors.surface} />
          <Text style={styles.mapBtnText}>Haritada Aç</Text>
          <Ionicons name="open-outline" size={16} color={colors.surface} />
        </Pressable>

        {/* Kısa Bilgi */}
        <View style={[styles.infoCard, cardShadow]}>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionHeaderIcon, styles.iconContainer]}>
              <Ionicons name="information-circle-outline" size={18} color={colors.primary} />
            </View>
            <Text style={styles.sectionHeaderTitle}>Kısa Bilgi</Text>
          </View>
          <Text style={styles.descriptionText}>{uni.info}</Text>
        </View>

        {/* Lisans Bölümleri Section */}
        <Text style={styles.sectionTitle}>Lisans Bölümleri</Text>
        <View style={styles.accordionContainer}>
          {uni.lisans.map((item, index) => {
            const isOpen = !!expandedItems[`lisans-${index}`];
            return (
              <View key={`lisans-${index}`} style={styles.accordionWrapper}>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={item.faculty}
                  onPress={() => toggleItem(`lisans-${index}`)}
                  style={({ pressed }) => [
                    styles.accordionHeader,
                    cardShadow,
                    pressed && styles.pressed,
                  ]}
                >
                  <View style={styles.accordionTitleRow}>
                    <Ionicons name="book-outline" size={18} color={colors.secondary} />
                    <Text style={styles.accordionTitle}>{item.faculty}</Text>
                  </View>
                  <Ionicons
                    name={isOpen ? 'chevron-up' : 'chevron-down'}
                    size={16}
                    color={colors.textSecondary}
                  />
                </Pressable>
                {isOpen && (
                  <View style={styles.accordionContent}>
                    {item.departments.map((dept, dIndex) => (
                      <View key={dIndex} style={styles.deptItem}>
                        <View style={styles.bulletPoint} />
                        <Text style={styles.deptText}>{dept}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* Ön Lisans Bölümleri Section */}
        <Text style={styles.sectionTitle}>Ön Lisans Bölümleri</Text>
        <View style={styles.accordionContainer}>
          {uni.onLisans.map((item, index) => {
            const isOpen = !!expandedItems[`onlisans-${index}`];
            return (
              <View key={`onlisans-${index}`} style={styles.accordionWrapper}>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={item.school}
                  onPress={() => toggleItem(`onlisans-${index}`)}
                  style={({ pressed }) => [
                    styles.accordionHeader,
                    cardShadow,
                    pressed && styles.pressed,
                  ]}
                >
                  <View style={styles.accordionTitleRow}>
                    <Ionicons name="school-outline" size={18} color={colors.secondary} />
                    <Text style={styles.accordionTitle}>{item.school}</Text>
                  </View>
                  <Ionicons
                    name={isOpen ? 'chevron-up' : 'chevron-down'}
                    size={16}
                    color={colors.textSecondary}
                  />
                </Pressable>
                {isOpen && (
                  <View style={styles.accordionContent}>
                    {item.departments.map((dept, dIndex) => (
                      <View key={dIndex} style={styles.deptItem}>
                        <View style={styles.bulletPoint} />
                        <Text style={styles.deptText}>{dept}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            );
          })}
        </View>
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
    paddingTop: 12,
  },
  backBtn: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  backText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  coverCard: {
    marginTop: 14,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  coverImg: {
    height: 200,
    width: '100%',
  },
  coverImgRadius: {
    borderRadius: radius.xl,
  },
  coverOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 18, 26, 0.12)',
  },
  title: {
    marginTop: 14,
    fontSize: 26,
    fontWeight: '900',
    color: colors.textPrimary,
    letterSpacing: -0.6,
  },
  mapBtn: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: radius.md,
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.seaDeep,
  },
  mapBtnText: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.surface,
  },
  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconContainer: {
    backgroundColor: colors.primarySoft,
  },
  sectionHeaderIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  sectionHeaderTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: colors.textPrimary,
    letterSpacing: -0.2,
  },
  descriptionText: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  accordionContainer: {
    marginTop: 6,
    marginBottom: 8,
  },
  accordionWrapper: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.textPrimary,
    marginTop: 20,
    marginBottom: 4,
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  accordionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  accordionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  accordionContent: {
    backgroundColor: colors.surface,
    borderBottomLeftRadius: radius.md,
    borderBottomRightRadius: radius.md,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: colors.border,
    padding: 16,
    marginTop: -4,
    marginBottom: 4,
  },
  facultyGroup: {
    marginBottom: 16,
  },
  facultyTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 6,
  },
  deptItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 4,
    marginVertical: 4,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.secondary,
  },
  deptText: {
    fontSize: 13.5,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  pressed: {
    opacity: 0.94,
    transform: [{ scale: 0.995 }],
  },
});
