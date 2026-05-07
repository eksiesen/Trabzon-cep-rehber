import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { DESTINATIONS, PLACE_CATEGORIES } from '../../constants/data';
import { cardShadow } from '../../constants/layout';
import { colors, radius } from '../../theme';
import { SectionHeading } from './SectionHeading';

type Props = {
  onSeeAll?: () => void;
};

export function PlacesPreviewSection({ onSeeAll }: Props) {
  return (
    <View style={styles.block}>
      <SectionHeading
        title="Gezilecek Yerler"
        subtitle="Kısa listeyle başla — detaylar için gezilecek yerler sekmesine geç."
        right={
          <Pressable
            accessibilityRole="button"
            onPress={onSeeAll}
            style={({ pressed }) => [
              styles.ctaRound,
              pressed && { opacity: 0.85 },
            ]}
          >
            <Ionicons
              name="arrow-forward-circle"
              size={36}
              color={colors.secondary}
            />
          </Pressable>
        }
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.catScroll}
      >
        {PLACE_CATEGORIES.map((c) => (
          <View key={c.key} style={[styles.catChip, cardShadow]}>
            <Ionicons name={c.icon} size={16} color={colors.primary} />
            <Text style={styles.catLabel} numberOfLines={1}>
              {c.label}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.grid}>
        {DESTINATIONS.map((d) => (
          <Pressable
            key={d.key}
            style={({ pressed }) => [
              styles.placeCard,
              cardShadow,
              pressed && styles.pressed,
            ]}
            onPress={onSeeAll}
          >
            <ImageBackground
              source={{ uri: d.image }}
              style={styles.placeImg}
              imageStyle={styles.placeImgRadius}
              resizeMode="cover"
            >
              <View style={styles.imgWash} />
              <View style={styles.imgFadeBottom} />
              <View style={styles.placeFooter}>
                <Text style={styles.placeTitle} numberOfLines={2}>
                  {d.title}
                </Text>
                <View style={styles.tagWrap}>
                  <Text style={styles.tagText}>{d.tag}</Text>
                </View>
              </View>
            </ImageBackground>
          </Pressable>
        ))}
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.seeAllBar,
          cardShadow,
          pressed && styles.pressedLink,
        ]}
        onPress={onSeeAll}
      >
        <Text style={styles.seeAllText}>Tüm gezilecek yerleri aç</Text>
        <Ionicons name="chevron-forward" size={20} color={colors.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 20,
  },
  catScroll: {
    paddingBottom: 14,
    gap: 8,
    paddingRight: 4,
  },
  catChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.surface,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    maxWidth: 200,
  },
  catLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  ctaRound: {
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },
  placeCard: {
    width: '48%',
    borderRadius: radius.lg,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  placeImg: {
    minHeight: 156,
    width: '100%',
    overflow: 'hidden',
  },
  placeImgRadius: {
    borderRadius: radius.lg,
  },
  imgWash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: radius.lg,
  },
  imgFadeBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 82,
    backgroundColor: 'rgba(15, 18, 26, 0.42)',
    borderBottomLeftRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
  },
  placeFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 6,
    zIndex: 2,
  },
  placeTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.onImage,
    letterSpacing: -0.2,
    lineHeight: 18,
  },
  tagWrap: {
    alignSelf: 'flex-start',
    marginTop: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.28)',
  },
  tagText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.onImage,
    letterSpacing: 0.2,
  },
  seeAllBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: colors.secondarySoft,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  seeAllText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.secondary,
  },
  pressed: {
    opacity: 0.94,
    transform: [{ scale: 0.99 }],
  },
  pressedLink: {
    opacity: 0.92,
  },
});
