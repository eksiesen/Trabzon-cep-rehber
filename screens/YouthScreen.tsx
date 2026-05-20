import { Ionicons } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { cardShadow } from '../constants/layout';
import { colors, radius } from '../theme';

export type YouthSpot = {
  key: string;
  title: string;
  description: string;
  tags: string[];
  image: ImageSourcePropType;
  mapUrl: string;
};

const YOUTH_SPOTS: readonly YouthSpot[] = [
  {
    key: 'coffee-study',
    title: 'Coffee & Study',
    description: 'Ders çalışmaya uygun sakin çalışma ortamı',
    tags: ['Çalışma', 'Kahve', 'Laptop'],
    image: require('../assets/places/coffee-study.jpg'),
    mapUrl: 'https://share.google/2m5N1i1Oh9MBh501V',
  },
  {
    key: 'cagdas-kitap-kafe',
    title: 'Çağdaş Kitap Kafe',
    description: 'Kitap ve kahve konseptli sosyal çalışma alanı',
    tags: ['Kitap', 'Çalışma', 'Kafe'],
    image: require('../assets/places/cagdas-kitap-kafe.jpg'),
    mapUrl: 'https://share.google/YHtodePs1tM4P9ozp',
  },
  {
    key: 'kafedemik',
    title: 'Kafedemik',
    description: 'Öğrenciler tarafından tercih edilen çalışma kafesi',
    tags: ['Öğrenci', 'Çalışma', 'Kahve'],
    image: require('../assets/places/kafedemik.jpg'),
    mapUrl: 'https://share.google/vc4A0Ls3MEz5kLI1f',
  },
  {
    key: 'espressolab',
    title: 'Espressolab',
    description: 'Modern kahve zinciri ve çalışma ortamı',
    tags: ['Kahve', 'Laptop', 'Sosyal'],
    image: require('../assets/places/espressolab.jpg'),
    mapUrl: 'https://share.google/xDRD2p19R5XXxcDZb',
  },
  {
    key: 'dalyan-kafe',
    title: 'Dalyan Kafe',
    description: 'Deniz manzaralı sosyal yaşam alanı',
    tags: ['Manzara', 'Sosyal', 'Kafe'],
    image: require('../assets/places/dalyan-kafe.jpg'),
    mapUrl: 'https://share.google/JLJnV64mlgxXQgokB',
  },
  {
    key: 'nazarluk',
    title: 'Nazarluk Kafe',
    description: 'Konsept dekorasyonu ile öne çıkan kafe',
    tags: ['Konsept', 'Kahve', 'Sosyal'],
    image: require('../assets/places/nazarluk.jpg'),
    mapUrl: 'https://share.google/Je0drOObrmMr9sJpK',
  },
  {
    key: 'kulup-bahce',
    title: 'Kulüp Bahçe Kafe',
    description: 'Bahçe konseptli sosyal buluşma alanı',
    tags: ['Bahçe', 'Sosyal', 'Kafe'],
    image: require('../assets/places/kulup-bahce.jpg'),
    mapUrl: 'https://share.google/j9TX2cszSql1vAe3x',
  },
  {
    key: 'sofia-garden',
    title: 'Sofia Garden Kafe',
    description: 'Doğa ve bahçe atmosferine sahip kafe',
    tags: ['Bahçe', 'Kahve', 'Sosyal'],
    image: require('../assets/places/sofia-garden..jpg'),
    mapUrl: 'https://share.google/iVTAYvzrZNB1lDXlY',
  },
  {
    key: 'mimarlar-odasi-bahce-kafe',
    title: 'Bahçe Kafe (Mimarlar Odası)',
    description: 'Sakin atmosferiyle öne çıkan sosyal kafe',
    tags: ['Bahçe', 'Çalışma', 'Sosyal'],
    image: require('../assets/places/mimarlar-odasi-bahce-kafe.jpg'),
    mapUrl: 'https://share.google/ullMKJscsASAw0cQT',
  },
  {
    key: 'mendirek-kafe',
    title: 'Mendirek Kafe',
    description: 'Deniz kenarında sosyal yaşam alanı',
    tags: ['Sahil', 'Manzara', 'Sosyal'],
    image: require('../assets/places/mendirek-kafe.jpg'),
    mapUrl: 'https://share.google/gtEEKILy1OKlCe04H',
  },
  {
    key: 'the-middle-coffee',
    title: 'Middle Kafe',
    description: 'Modern kahve ve sosyal yaşam alanı',
    tags: ['Kahve', 'Modern', 'Sosyal'],
    image: require('../assets/places/the-middle-coffee.jpg'),
    mapUrl: 'https://share.google/Mg7SacVgMdTuSle3s',
  },
];

export function YouthScreen({
  onBack,
  onSelect,
}: {
  onBack: () => void;
  onSelect: (spot: YouthSpot) => void;
}) {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

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
          <Text style={styles.backText}>Genç Trabzon</Text>
        </Pressable>

        <Text style={styles.heroTitle}>Genç Trabzon</Text>
        <Text style={styles.heroLead}>
          Öğrenciler ve gençler için popüler çalışma alanları ve kafeler.
        </Text>

        <View style={{ marginTop: 12 }}>
          {YOUTH_SPOTS.map((p) => (
            <Pressable
              key={p.key}
              accessibilityRole="button"
              accessibilityLabel={p.title}
              onPress={() => onSelect(p)}
              style={({ pressed }) => [
                styles.card,
                cardShadow,
                pressed && styles.pressed,
              ]}
            >
              <ImageBackground
                source={p.image}
                style={styles.img}
                imageStyle={styles.imgRadius}
                resizeMode="cover"
              >
                <View style={styles.overlay} />
                <View style={styles.arrow}>
                  <Ionicons
                    name="chevron-forward"
                    size={18}
                    color={colors.onImage}
                  />
                </View>
              </ImageBackground>

              <View style={styles.body}>
                <Text style={styles.title}>{p.title}</Text>
                <Text style={styles.desc}>{p.description}</Text>
                <View style={styles.tags}>
                  {p.tags.map((t) => (
                    <View key={t} style={styles.tag}>
                      <Text style={styles.tagText}>{t}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </Pressable>
          ))}
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
  heroTitle: {
    marginTop: 12,
    fontSize: 30,
    fontWeight: '800',
    color: colors.textPrimary,
    letterSpacing: -0.8,
  },
  heroLead: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: colors.textSecondary,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 14,
  },
  img: {
    height: 170,
    width: '100%',
    justifyContent: 'flex-end',
  },
  imgRadius: {
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    objectFit: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 18, 26, 0.18)',
  },
  arrow: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.22)',
  },
  body: {
    padding: 14,
  },
  title: {
    fontSize: 17,
    fontWeight: '900',
    color: colors.textPrimary,
    letterSpacing: -0.2,
  },
  desc: {
    marginTop: 6,
    fontSize: 13.5,
    lineHeight: 19,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  tags: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: colors.secondarySoft,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.secondary,
  },
  pressed: {
    opacity: 0.94,
    transform: [{ scale: 0.995 }],
  },
});
