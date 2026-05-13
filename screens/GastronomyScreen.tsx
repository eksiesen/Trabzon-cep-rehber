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

export type GastronomyItem = {
  key: string;
  title: string;
  description: string;
  tags: string[];
  image: ImageSourcePropType;
  shortInfo: string;
  restaurantMapUrls: readonly string[];
};

const GASTRO_ITEMS: readonly GastronomyItem[] = [
  {
    key: 'akcaabat-kofte',
    title: 'Akçaabat Köftesi',
    description: 'Trabzon’un en meşhur köfte lezzeti',
    tags: ['Köfte', 'Yöresel', 'Et'],
    image: require('../assets/places/akcaabat-kofte.jpg'),
    shortInfo:
      'Akçaabat köftesi; sinir ve fazla yağ içermeyen etlerin kıyma haline getirilmesiyle hazırlanır. Geleneksel tarifte ön kol eti, kaburga eti, işkembe yağı ve böbrek yağı kullanılmaktadır.',
    restaurantMapUrls: [
      'https://share.google/JXDqjwufd3DfrZd7D',
      'https://share.google/JAYjyhS3wT9HrClG2',
      'https://share.google/dzjrbsbvtytQTycu8',
    ],
  },
  {
    key: 'surmene-pidesi',
    title: 'Sürmene Pidesi',
    description: 'Bol tereyağlı Karadeniz pidesi',
    tags: ['Pide', 'Yöresel', 'Tereyağı'],
    image: require('../assets/places/surmene-pide.jpg'),
    shortInfo:
      'Sürmene pidesi; bol tereyağı ve Trabzon’a özgü peynirlerle hazırlanan Karadeniz’e özgü pide çeşitlerinden biridir.',
    restaurantMapUrls: [
      'https://share.google/n9hgtRFHgOSoZPzW6',
      'https://share.google/TPTWIPVgN5P0PtJYq',
      'https://share.google/0RaN0X6sAdTIl9zGP',
    ],
  },
  {
    key: 'hamsikoy-sutlaci',
    title: 'Hamsiköy Sütlacı',
    description: 'Coğrafi işaretli Trabzon sütlacı',
    tags: ['Tatlı', 'Sütlaç', 'Yöresel'],
    image: require('../assets/places/hamsikoy-sutlac.jpg'),
    shortInfo:
      'Hamsiköy sütlacı, Trabzon’un Hamsiköy yöresine özgü coğrafi işaretli bir tatlıdır. 2017 yılında Türk Patent ve Marka Kurumu tarafından tescillenmiştir.',
    restaurantMapUrls: [
      'https://share.google/pk6ldJJw4nfyANNQK',
      'https://share.google/sJ2ZqaWDs7YKKWjF0',
    ],
  },
  {
    key: 'vakfikebir-ekmegi',
    title: 'Vakfıkebir Ekmeği',
    description: 'Taş fırında pişen meşhur ekmek',
    tags: ['Ekmek', 'Taş Fırın', 'Yöresel'],
    image: require('../assets/places/vakfikebir-ekmek.jpg'),
    shortInfo:
      'Vakfıkebir ekmeği ekşi mayalı olarak hazırlanır ve taş fırınlarda pişirilir. Büyük yapısı ve geç bayatlamasıyla bilinmektedir.',
    restaurantMapUrls: ['https://share.google/Klewks9VnjNjf9sxw'],
  },
  {
    key: 'kuymak',
    title: 'Kuymak',
    description: 'Tereyağı ve Trabzon peyniriyle yapılan yöresel lezzet',
    tags: ['Kahvaltı', 'Peynir', 'Yöresel'],
    image: require('../assets/places/kuymak.jpg'),
    shortInfo:
      'Kuymak; tereyağı, mısır unu ve Trabzon peyniri ile hazırlanan Karadeniz mutfağına ait geleneksel bir yemektir.',
    restaurantMapUrls: [
      'https://share.google/2iov5YH5ZKubXsjSF',
      'https://share.google/248T3P2ED74gKOf3T',
    ],
  },
  {
    key: 'kalkanoglu-pilavi',
    title: 'Kalkanoğlu Pilavı',
    description: 'Tarihi Trabzon pilav kültürü',
    tags: ['Pilav', 'Tarih', 'Yöresel'],
    image: require('../assets/places/kalkanoglu-pilav.jpg'),
    shortInfo:
      'Kalkanoğlu Pilavı’nın geçmişi Osmanlı-Rus savaşları dönemine kadar uzanmaktadır. Trabzon’da halka ücretsiz pilav dağıtımıyla başlayan gelenek daha sonra profesyonel işletmeye dönüşmüştür.',
    restaurantMapUrls: ['https://share.google/tRa8FyEEvHT2d3A0d'],
  },
  {
    key: 'laz-boregi',
    title: 'Laz Böreği',
    description: 'Muhallebili Karadeniz tatlısı',
    tags: ['Tatlı', 'Şerbet', 'Yöresel'],
    image: require('../assets/places/laz-boregi.jpg'),
    shortInfo:
      'Laz böreği; yufka, tereyağı, muhallebi ve şerbet ile hazırlanan Doğu Karadeniz’e özgü geleneksel bir tatlıdır.',
    restaurantMapUrls: ['https://share.google/LShVoCYZXEV3Zx4yZ'],
  },
  {
    key: 'karalahana-corbasi',
    title: 'Karalahana Çorbası',
    description: 'Karadeniz mutfağının klasik çorbası',
    tags: ['Çorba', 'Karalahana', 'Yöresel'],
    image: require('../assets/places/karalahana-corbasi.jpg'),
    shortInfo:
      'Karalahana çorbası; karalahana, pirinç veya bulgur kullanılarak hazırlanan Karadeniz mutfağının geleneksel çorbalarından biridir.',
    restaurantMapUrls: [
      'https://share.google/dI8faHC0TpmLDvHtn',
      'https://share.google/mzETitzTYyqsIuMph',
    ],
  },
];

export function GastronomyScreen({
  onBack,
  onSelect,
}: {
  onBack: () => void;
  onSelect: (item: GastronomyItem) => void;
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
          <Text style={styles.backText}>Gezilecek Yerler</Text>
        </Pressable>

        <Text style={styles.heroTitle}>Gastronomi</Text>
        <Text style={styles.heroLead}>
          Trabzon’un yöresel lezzetleri ve yemek kültürü.
        </Text>

        <View style={{ marginTop: 12 }}>
          {GASTRO_ITEMS.map((p) => (
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
