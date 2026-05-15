import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Linking,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  DESTINATIONS,
  GASTRO_SAMPLES,
  PLACE_CATEGORIES,
} from '../constants/data';
import { cardShadow } from '../constants/layout';
import {
  HistoricalPlacesScreen,
  type HistoricalPlace,
} from './HistoricalPlacesScreen';
import { HistoricalPlaceDetailScreen } from './HistoricalPlaceDetailScreen';
import { ParksScreen, type Park } from './ParksScreen';
import { ParkDetailScreen } from './ParkDetailScreen';
import { ViewpointsScreen, type ViewpointSpot } from './ViewpointsScreen';
import { ViewpointDetailScreen } from './ViewpointDetailScreen';
import { GastronomyScreen, type GastronomyItem } from './GastronomyScreen';
import { GastronomyDetailScreen } from './GastronomyDetailScreen';
import type { RootTabParamList } from '../navigation/types';
import { colors, radius } from '../theme';

type PlacesView =
  | 'root'
  | 'dogal'
  | 'tarihi'
  | 'tarihi-detail'
  | 'parklar'
  | 'parklar-detail'
  | 'manzara'
  | 'manzara-detail'
  | 'gastro'
  | 'gastro-detail'
  | 'uzungol'
  | 'sera'
  | 'cal-magarasi'
  | 'hidirnebi'
  | 'sultan-murat'
  | 'altindere';

const NATURAL_PLACES = [
  {
    key: 'uzungol',
    title: 'Uzungöl',
    description: 'Çaykara’da göl ve doğa manzarası',
    tags: ['Doğa', 'Göl', 'Yayla'],
    image: require('../assets/places/uzungol-card.jpg'),
  },
  {
    key: 'sera',
    title: 'Sera Gölü',
    description: 'Akçaabat’ta göl çevresi yürüyüş alanı',
    tags: ['Göl', 'Manzara'],
    image: require('../assets/places/sera-golu.jpg'),
  },
  {
    key: 'cal-magarasi',
    title: 'Çal Mağarası',
    description: 'Dünyanın en uzun mağaralarından biri',
    tags: ['Mağara', 'Doğa'],
    image: require('../assets/places/cal-magarasi.jpg'),
  },
  {
    key: 'hidrinebi',
    title: 'Hıdırnebi Yaylası',
    description: 'Sis manzaralarıyla ünlü yayla',
    tags: ['Yayla', 'Manzara'],
    image: require('../assets/places/hidirnebi.jpg'),
  },
  {
    key: 'sultan-murat',
    title: 'Sultan Murat Yaylası',
    description: 'Tarihi ve doğasıyla öne çıkan yayla',
    tags: ['Yayla', 'Tarih'],
    image: require('../assets/places/sultan-murat.jpg'),
  },
  {
    key: 'altindere',
    title: 'Altındere Vadisi',
    description: 'Sümela çevresindeki doğal vadi alanı',
    tags: ['Vadi', 'Orman'],
    image: require('../assets/places/altindere.jpg'),
  },
] as const;

export function PlacesTabScreen() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const [view, setView] = React.useState<PlacesView>('root');
  const [selectedHistorical, setSelectedHistorical] =
    React.useState<HistoricalPlace | null>(null);
  const [selectedPark, setSelectedPark] = React.useState<Park | null>(null);
  const [selectedGastro, setSelectedGastro] =
    React.useState<GastronomyItem | null>(null);
  const [selectedViewpoint, setSelectedViewpoint] =
    React.useState<ViewpointSpot | null>(null);
  const navigation =
    useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  const openUrl = async (url: string) => {
    const can = await Linking.canOpenURL(url);
    if (can) await Linking.openURL(url);
  };

  if (view === 'uzungol') {
    const cover = require('../assets/places/uzungol-card.jpg');

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
            onPress={() => setView('dogal')}
            style={({ pressed }) => [
              styles.backBtn,
              pressed && { opacity: 0.9 },
            ]}
            hitSlop={10}
          >
            <Ionicons name="chevron-back" size={18} color={colors.textPrimary} />
            <Text style={styles.backText}>Doğal Güzellikler</Text>
          </Pressable>

          <View style={[styles.detailCoverCard, cardShadow]}>
            <ImageBackground
              source={cover}
              style={styles.detailCoverImg}
              imageStyle={styles.detailCoverImgRadius}
              resizeMode="cover"
            >
              <View style={styles.detailCoverOverlay} />
            </ImageBackground>
          </View>

          <Text style={styles.detailTitle}>Uzungöl</Text>
          <Text style={styles.detailMeta}>Çaykara / Doğal Güzellik</Text>

          <View style={styles.detailTags}>
            {['Doğa', 'Göl', 'Yayla', 'Fotoğraf'].map((t) => (
              <View key={t} style={styles.natureTag}>
                <Text style={styles.natureTagText}>{t}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.detailDesc}>
            Uzungöl, Trabzon’un Çaykara ilçesinde yer alan, göl ve dağ
            manzarasıyla öne çıkan turistik bir doğal güzelliktir.
          </Text>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconMap]}>
                <Ionicons
                  name="restaurant-outline"
                  size={18}
                  color={colors.secondary}
                />
              </View>
              <Text style={styles.sectionHeaderTitle}>Restoran Önerileri</Text>
            </View>

            <View style={styles.restaurantCard}>
              <Text style={styles.restaurantName}>Şeflerin Yeri Restaurant</Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Haritada Aç"
                onPress={() => openUrl('https://share.google/a0rnfkSPQ1Y0JEY98')}
                style={({ pressed }) => [
                  styles.restaurantBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.restaurantBtnText}>Haritada Aç</Text>
                <Ionicons name="open-outline" size={18} color={colors.secondary} />
              </Pressable>
            </View>
            <Text style={styles.restaurantNote}>
              Restoran önerileri herhangi bir reklam veya sponsorluk
              içermemektedir. Mekanlar yalnızca ziyaretçilere fikir vermesi
              amacıyla örnek olarak paylaşılmıştır.
            </Text>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconMap]}>
                <Ionicons name="pin-outline" size={18} color={colors.secondary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Konum</Text>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Haritada Aç"
              onPress={() => openUrl('https://maps.app.goo.gl/zEW2DTrf8NEiL5PX9')}
              style={({ pressed }) => [
                styles.primaryBtn,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.primaryBtnText}>Haritada Aç</Text>
              <Ionicons name="open-outline" size={18} color={colors.surface} />
            </Pressable>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconStops]}>
                <Ionicons name="navigate-outline" size={18} color={colors.primary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Nasıl Gidilir?</Text>
            </View>

            <View style={styles.howBlock}>
              <Text style={styles.howTitle}>Dolmuş</Text>
              <Text style={styles.howText}>
                Moloz - Değirmendere dolmuşları kullanılarak Çömlekçi bölgesinde
                inilerek Uzungöl minibüslerine ulaşılabilir.
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Dolmuş Bilgilerine Git"
                onPress={() => navigation.navigate('Transport', { detailKey: 'dolmus' })}
                style={({ pressed }) => [
                  styles.secondaryBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.secondaryBtnText}>Dolmuş Bilgilerine Git</Text>
                <Ionicons name="chevron-forward" size={18} color={colors.secondary} />
              </Pressable>
            </View>

            <View style={styles.detailDivider} />

            <View style={styles.howBlock}>
              <Text style={styles.howTitle}>Otobüs</Text>
              <Text style={styles.howText}>
                122 numaralı belediye otobüsü kullanılarak 2947 - Çömlekçi
                durağında inilerek Uzungöl minibüslerine ulaşılabilir.
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Otobüs Bilgilerine Git"
                onPress={() => navigation.navigate('Transport', { detailKey: 'otobus' })}
                style={({ pressed }) => [
                  styles.secondaryBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.secondaryBtnText}>Otobüs Bilgilerine Git</Text>
                <Ionicons name="chevron-forward" size={18} color={colors.secondary} />
              </Pressable>
            </View>

            <View style={styles.howInfoBox}>
              <Text style={styles.howInfoTitle}>Uzungöl servis bilgisi</Text>
              <Text style={styles.howInfoText}>
                Çömlekçi bölgesinde bulunan Çaykara Tur minibüsleri ile ortalama
                20 dakikada bir, gün boyunca düzenli olarak Uzungöl servisi
                bulunmaktadır.
              </Text>
            </View>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconQr]}>
                <Ionicons name="time-outline" size={18} color={colors.primary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Ziyaret Bilgileri</Text>
            </View>

            <View style={[styles.detailBullets, { marginTop: 10 }]}>
              <Text style={styles.detailBullet}>- Ortalama süre: 2-3 saat</Text>
              <Text style={styles.detailBullet}>
                - En uygun zaman: İlkbahar / Yaz
              </Text>
              <Text style={styles.detailBullet}>- Not: Hafta sonları yoğun olabilir</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  if (view === 'sera') {
    const cover = require('../assets/places/sera-golu.jpg');

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
            onPress={() => setView('dogal')}
            style={({ pressed }) => [
              styles.backBtn,
              pressed && { opacity: 0.9 },
            ]}
            hitSlop={10}
          >
            <Ionicons name="chevron-back" size={18} color={colors.textPrimary} />
            <Text style={styles.backText}>Doğal Güzellikler</Text>
          </Pressable>

          <View style={[styles.detailCoverCard, cardShadow]}>
            <ImageBackground
              source={cover}
              style={styles.detailCoverImg}
              imageStyle={styles.detailCoverImgRadius}
              resizeMode="cover"
            >
              <View style={styles.detailCoverOverlay} />
            </ImageBackground>
          </View>

          <Text style={styles.detailTitle}>Sera Gölü</Text>
          <Text style={styles.detailMeta}>Akçaabat / Doğal Güzellik</Text>

          <View style={styles.detailTags}>
            {['Doğa', 'Göl', 'Manzara', 'Yürüyüş'].map((t) => (
              <View key={t} style={styles.natureTag}>
                <Text style={styles.natureTagText}>{t}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.detailDesc}>
            Sera Gölü, Akçaabat ilçesinde yer alan ve göl çevresi yürüyüş
            alanlarıyla öne çıkan doğal bir gezi noktasıdır.
          </Text>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconMap]}>
                <Ionicons
                  name="restaurant-outline"
                  size={18}
                  color={colors.secondary}
                />
              </View>
              <Text style={styles.sectionHeaderTitle}>Restoran Önerileri</Text>
            </View>

            <View style={styles.restaurantCard}>
              <Text style={styles.restaurantName}>
                Sera Park Restaurants & Cafe
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Haritada Aç"
                onPress={() => openUrl('https://share.google/et7KiV5ulJqx0EuJW')}
                style={({ pressed }) => [
                  styles.restaurantBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.restaurantBtnText}>Haritada Aç</Text>
                <Ionicons name="open-outline" size={18} color={colors.secondary} />
              </Pressable>
            </View>
            <Text style={styles.restaurantNote}>
              Restoran önerileri herhangi bir reklam veya sponsorluk
              içermemektedir. Mekanlar yalnızca ziyaretçilere fikir vermesi
              amacıyla örnek olarak paylaşılmıştır.
            </Text>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconMap]}>
                <Ionicons name="pin-outline" size={18} color={colors.secondary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Konum</Text>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Haritada Aç"
              onPress={() => openUrl('https://maps.app.goo.gl/YLnHA4om5wmZta1E6')}
              style={({ pressed }) => [
                styles.primaryBtn,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.primaryBtnText}>Haritada Aç</Text>
              <Ionicons name="open-outline" size={18} color={colors.surface} />
            </Pressable>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconStops]}>
                <Ionicons
                  name="navigate-outline"
                  size={18}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.sectionHeaderTitle}>Nasıl Gidilir?</Text>
            </View>

            <View style={styles.howBlock}>
              <Text style={styles.howTitle}>Dolmuş</Text>
              <Text style={styles.howText}>
                Moloz - Akçaabat dolmuşları kullanılarak Yıldızlı Kavşağı
                bölgesinde inilebilir. Kavşaktan sonra yaklaşık 2 km’lik mesafe
                yürüyerek ulaşılabilir veya bölgedeki yerel dolmuş/taksi
                seçenekleri kullanılabilir.
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Dolmuş Bilgilerine Git"
                onPress={() =>
                  navigation.navigate('Transport', { detailKey: 'dolmus' })
                }
                style={({ pressed }) => [
                  styles.secondaryBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.secondaryBtnText}>Dolmuş Bilgilerine Git</Text>
                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={colors.secondary}
                />
              </Pressable>
            </View>

            <View style={styles.detailDivider} />

            <View style={styles.howBlock}>
              <Text style={styles.howTitle}>Otobüs</Text>
              <Text style={styles.howText}>
                210 numaralı Yıldızlı - Sera Gölü - Gölbaşı hattı doğrudan göl
                bölgesine ulaşım sağlar. 4451 - Gölbaşı 18 durağında inilebilir.
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Otobüs Bilgilerine Git"
                onPress={() =>
                  navigation.navigate('Transport', { detailKey: 'otobus' })
                }
                style={({ pressed }) => [
                  styles.secondaryBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.secondaryBtnText}>Otobüs Bilgilerine Git</Text>
                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={colors.secondary}
                />
              </Pressable>
            </View>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconQr]}>
                <Ionicons name="time-outline" size={18} color={colors.primary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Ziyaret Bilgileri</Text>
            </View>

            <View style={[styles.detailBullets, { marginTop: 10 }]}>
              <Text style={styles.detailBullet}>- Ortalama süre: 1-2 saat</Text>
              <Text style={styles.detailBullet}>
                - En uygun zaman: İlkbahar / Yaz
              </Text>
              <Text style={styles.detailBullet}>
                - Not: Hafta sonları göl çevresi yoğun olabilir
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  if (view === 'cal-magarasi') {
    const cover = require('../assets/places/cal-magarasi.jpg');

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
            onPress={() => setView('dogal')}
            style={({ pressed }) => [
              styles.backBtn,
              pressed && { opacity: 0.9 },
            ]}
            hitSlop={10}
          >
            <Ionicons name="chevron-back" size={18} color={colors.textPrimary} />
            <Text style={styles.backText}>Doğal Güzellikler</Text>
          </Pressable>

          <View style={[styles.detailCoverCard, cardShadow]}>
            <ImageBackground
              source={cover}
              style={styles.detailCoverImg}
              imageStyle={styles.detailCoverImgRadius}
              resizeMode="cover"
            >
              <View style={styles.detailCoverOverlay} />
            </ImageBackground>
          </View>

          <Text style={styles.detailTitle}>Çal Mağarası</Text>
          <Text style={styles.detailMeta}>Düzköy / Doğal Güzellik</Text>

          <View style={styles.detailTags}>
            {['Mağara', 'Doğa', 'Serin Hava', 'Yürüyüş'].map((t) => (
              <View key={t} style={styles.natureTag}>
                <Text style={styles.natureTagText}>{t}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.detailDesc}>
            Çal Mağarası, Düzköy ilçesinde bulunan ve dünyanın en uzun
            mağaralarından biri olarak bilinen doğal oluşumlardan biridir.
          </Text>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconMap]}>
                <Ionicons
                  name="restaurant-outline"
                  size={18}
                  color={colors.secondary}
                />
              </View>
              <Text style={styles.sectionHeaderTitle}>Restoran Önerileri</Text>
            </View>

            <View style={styles.restaurantCard}>
              <Text style={styles.restaurantName}>İmera Dağ Cafe Restorant</Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Haritada Aç"
                onPress={() => openUrl('https://share.google/rdDmLbrJuqu0lNfXT')}
                style={({ pressed }) => [
                  styles.restaurantBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.restaurantBtnText}>Haritada Aç</Text>
                <Ionicons name="open-outline" size={18} color={colors.secondary} />
              </Pressable>
            </View>
            <Text style={styles.restaurantNote}>
              Restoran önerileri herhangi bir reklam veya sponsorluk
              içermemektedir. Mekanlar yalnızca ziyaretçilere fikir vermesi
              amacıyla örnek olarak paylaşılmıştır.
            </Text>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconMap]}>
                <Ionicons name="pin-outline" size={18} color={colors.secondary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Konum</Text>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Haritada Aç"
              onPress={() => openUrl('https://maps.app.goo.gl/pnHLGgpmMTRZqCD5A')}
              style={({ pressed }) => [
                styles.primaryBtn,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.primaryBtnText}>Haritada Aç</Text>
              <Ionicons name="open-outline" size={18} color={colors.surface} />
            </Pressable>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconStops]}>
                <Ionicons
                  name="navigate-outline"
                  size={18}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.sectionHeaderTitle}>Nasıl Gidilir?</Text>
            </View>

            <View style={styles.howBlock}>
              <Text style={styles.howTitle}>Dolmuş</Text>
              <Text style={styles.howText}>
                Moloz - Düzköy dolmuşları kullanılarak Düzköy merkezine
                ulaşılabilir. Düzköy merkezinden sonra Çalköy yönüne giden
                araçlar kullanılarak Çal Mağarası bölgesine geçilebilir.
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Dolmuş Bilgilerine Git"
                onPress={() =>
                  navigation.navigate('Transport', { detailKey: 'dolmus' })
                }
                style={({ pressed }) => [
                  styles.secondaryBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.secondaryBtnText}>Dolmuş Bilgilerine Git</Text>
                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={colors.secondary}
                />
              </Pressable>
            </View>

            <View style={styles.detailDivider} />

            <View style={styles.howBlock}>
              <Text style={styles.howTitle}>Otobüs</Text>
              <Text style={styles.howText}>
                378 numaralı belediye otobüsü kullanılarak 7313 - Çal Mağarası
                Yol Ayrımı 1 durağında inilebilir. Duraktan sonra mağaraya
                ulaşmak için yaklaşık 1-1.5 km yürümek gerekebilir.
              </Text>
              <View style={styles.howInfoBox}>
                <Text style={styles.howInfoText}>
                  Yürüyüş süresi ortalama 15-20 dakika olabilir.
                </Text>
              </View>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Otobüs Bilgilerine Git"
                onPress={() =>
                  navigation.navigate('Transport', { detailKey: 'otobus' })
                }
                style={({ pressed }) => [
                  styles.secondaryBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.secondaryBtnText}>Otobüs Bilgilerine Git</Text>
                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={colors.secondary}
                />
              </Pressable>
            </View>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconQr]}>
                <Ionicons name="time-outline" size={18} color={colors.primary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Ziyaret Bilgileri</Text>
            </View>

            <View style={[styles.detailBullets, { marginTop: 10 }]}>
              <Text style={styles.detailBullet}>- Ortalama süre: 1-2 saat</Text>
              <Text style={styles.detailBullet}>
                - En uygun zaman: Yaz / İlkbahar
              </Text>
              <Text style={styles.detailBullet}>- Not: İçerisi serin olabilir.</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  if (view === 'hidirnebi') {
    const cover = require('../assets/places/hidirnebi.jpg');

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
            onPress={() => setView('dogal')}
            style={({ pressed }) => [
              styles.backBtn,
              pressed && { opacity: 0.9 },
            ]}
            hitSlop={10}
          >
            <Ionicons name="chevron-back" size={18} color={colors.textPrimary} />
            <Text style={styles.backText}>Doğal Güzellikler</Text>
          </Pressable>

          <View style={[styles.detailCoverCard, cardShadow]}>
            <ImageBackground
              source={cover}
              style={styles.detailCoverImg}
              imageStyle={styles.detailCoverImgRadius}
              resizeMode="cover"
            >
              <View style={styles.detailCoverOverlay} />
            </ImageBackground>
          </View>

          <Text style={styles.detailTitle}>Hıdırnebi Yaylası</Text>
          <Text style={styles.detailMeta}>Akçaabat / Yayla</Text>

          <View style={styles.detailTags}>
            {['Yayla', 'Doğa', 'Sis Manzarası', 'Kamp'].map((t) => (
              <View key={t} style={styles.natureTag}>
                <Text style={styles.natureTagText}>{t}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.detailDesc}>
            Hıdırnebi Yaylası, sisli yayla manzaraları ve serin havasıyla
            Trabzon’un en bilinen yaylalarından biridir.
          </Text>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconMap]}>
                <Ionicons
                  name="restaurant-outline"
                  size={18}
                  color={colors.secondary}
                />
              </View>
              <Text style={styles.sectionHeaderTitle}>Restoran Önerileri</Text>
            </View>

            <View style={styles.restaurantCard}>
              <Text style={styles.restaurantName}>Hıdırnebi Manzara Cafe</Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Haritada Aç"
                onPress={() => openUrl('https://share.google/9iXf4ra3aUPfaWeoL')}
                style={({ pressed }) => [
                  styles.restaurantBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.restaurantBtnText}>Haritada Aç</Text>
                <Ionicons name="open-outline" size={18} color={colors.secondary} />
              </Pressable>
            </View>
            <Text style={styles.restaurantNote}>
              Restoran önerileri herhangi bir reklam veya sponsorluk
              içermemektedir. Mekanlar yalnızca ziyaretçilere fikir vermesi
              amacıyla örnek olarak paylaşılmıştır.
            </Text>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconMap]}>
                <Ionicons name="pin-outline" size={18} color={colors.secondary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Konum</Text>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Haritada Aç"
              onPress={() => openUrl('https://maps.app.goo.gl/Hy2Ews85oNpZ3Je28')}
              style={({ pressed }) => [
                styles.primaryBtn,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.primaryBtnText}>Haritada Aç</Text>
              <Ionicons name="open-outline" size={18} color={colors.surface} />
            </Pressable>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconStops]}>
                <Ionicons
                  name="navigate-outline"
                  size={18}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.sectionHeaderTitle}>Ulaşım Bilgisi</Text>
            </View>

            <Text style={[styles.howText, { marginTop: 10 }]}>
              Özel aracınızla gitmeniz veya yaz sezonunda Trabzon merkezden
              (Meydan mevkii) kalkan günübirlik yayla turlarını tercih etmeniz
              önerilir.
            </Text>

            <View style={[styles.howInfoBox, styles.howWarnBox]}>
              <Ionicons
                name="warning-outline"
                size={18}
                color={colors.primary}
              />
              <Text style={styles.howInfoText}>
                Yol asfalt olmasına rağmen yer yer virajlı ve dik olabilir.
                Özellikle sisli havalarda dikkatli sürüş önerilir.
              </Text>
            </View>

            <View style={[styles.howInfoBox, styles.howSuggestBox]}>
              <Ionicons
                name="sparkles-outline"
                size={18}
                color={colors.secondary}
              />
              <Text style={styles.howInfoText}>
                Her yıl yaklaşık 20 Temmuz civarında geleneksel Hıdırnebi Yayla
                Şenlikleri düzenlenmektedir.
              </Text>
            </View>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconQr]}>
                <Ionicons name="time-outline" size={18} color={colors.primary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Ziyaret Bilgileri</Text>
            </View>

            <View style={[styles.detailBullets, { marginTop: 10 }]}>
              <Text style={styles.detailBullet}>- Ortalama süre: 2-4 saat</Text>
              <Text style={styles.detailBullet}>- En uygun zaman: Yaz</Text>
              <Text style={styles.detailBullet}>
                - Not: Akşam saatlerinde hava serin olabilir.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  if (view === 'sultan-murat') {
    const cover = require('../assets/places/sultan-murat.jpg');

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
            onPress={() => setView('dogal')}
            style={({ pressed }) => [
              styles.backBtn,
              pressed && { opacity: 0.9 },
            ]}
            hitSlop={10}
          >
            <Ionicons name="chevron-back" size={18} color={colors.textPrimary} />
            <Text style={styles.backText}>Doğal Güzellikler</Text>
          </Pressable>

          <View style={[styles.detailCoverCard, cardShadow]}>
            <ImageBackground
              source={cover}
              style={styles.detailCoverImg}
              imageStyle={styles.detailCoverImgRadius}
              resizeMode="cover"
            >
              <View style={styles.detailCoverOverlay} />
            </ImageBackground>
          </View>

          <Text style={styles.detailTitle}>Sultan Murat Yaylası</Text>
          <Text style={styles.detailMeta}>Çaykara / Yayla</Text>

          <View style={styles.detailTags}>
            {['Yayla', 'Tarih', 'Doğa', 'Kamp'].map((t) => (
              <View key={t} style={styles.natureTag}>
                <Text style={styles.natureTagText}>{t}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.detailDesc}>
            Sultan Murat Yaylası, yüksek rakımı ve tarihi yayla atmosferiyle
            Trabzon’un önemli doğa noktalarından biridir.
          </Text>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconMap]}>
                <Ionicons
                  name="restaurant-outline"
                  size={18}
                  color={colors.secondary}
                />
              </View>
              <Text style={styles.sectionHeaderTitle}>Restoran Önerileri</Text>
            </View>

            <View style={styles.restaurantCard}>
              <Text style={styles.restaurantName}>Sultan Murat Sofrası</Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Haritada Aç"
                onPress={() => openUrl('https://share.google/8xF528K89Gf3mfIlV')}
                style={({ pressed }) => [
                  styles.restaurantBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.restaurantBtnText}>Haritada Aç</Text>
                <Ionicons name="open-outline" size={18} color={colors.secondary} />
              </Pressable>
            </View>
            <Text style={styles.restaurantNote}>
              Restoran önerileri herhangi bir reklam veya sponsorluk
              içermemektedir. Mekanlar yalnızca ziyaretçilere fikir vermesi
              amacıyla örnek olarak paylaşılmıştır.
            </Text>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconMap]}>
                <Ionicons name="pin-outline" size={18} color={colors.secondary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Konum</Text>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Haritada Aç"
              onPress={() =>
                openUrl('https://maps.app.goo.gl/x9d4WjYqH8bbXLBW6')
              }
              style={({ pressed }) => [
                styles.primaryBtn,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.primaryBtnText}>Haritada Aç</Text>
              <Ionicons name="open-outline" size={18} color={colors.surface} />
            </Pressable>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconStops]}>
                <Ionicons
                  name="navigate-outline"
                  size={18}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.sectionHeaderTitle}>Ulaşım Bilgisi</Text>
            </View>

            <Text style={[styles.howText, { marginTop: 10 }]}>
              Özel aracınızla gitmeniz veya yayla turlarını tercih etmeniz
              önerilir.
            </Text>

            <View style={[styles.howInfoBox, styles.howWarnBox]}>
              <Ionicons
                name="warning-outline"
                size={18}
                color={colors.primary}
              />
              <Text style={styles.howInfoText}>
                Çaykara merkezden yaylaya ulaşım yaklaşık 25 km’lik dik bir yol
                üzerinden sağlanmaktadır. Sisli havalarda dikkatli sürüş
                önerilir.
              </Text>
            </View>

            <View style={[styles.howInfoBox, styles.howSuggestBox]}>
              <Ionicons
                name="sparkles-outline"
                size={18}
                color={colors.secondary}
              />
              <Text style={styles.howInfoText}>
                Yaylada 1. Dünya Savaşı’ndan kalma bir şehitlik bulunmaktadır.
                Ayrıca her yıl 23 Haziran’da Şehitleri Anma, 20 Ağustos’ta ise
                Yayla Ortası şenlikleri düzenlenmektedir.
              </Text>
            </View>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconQr]}>
                <Ionicons name="time-outline" size={18} color={colors.primary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Ziyaret Bilgileri</Text>
            </View>

            <View style={[styles.detailBullets, { marginTop: 10 }]}>
              <Text style={styles.detailBullet}>- Ortalama süre: 3-5 saat</Text>
              <Text style={styles.detailBullet}>- En uygun zaman: Yaz</Text>
              <Text style={styles.detailBullet}>
                - Not: Rakım yüksek olduğu için hava hızlı değişebilir.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  if (view === 'altindere') {
    const cover = require('../assets/places/altindere.jpg');

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
            onPress={() => setView('dogal')}
            style={({ pressed }) => [
              styles.backBtn,
              pressed && { opacity: 0.9 },
            ]}
            hitSlop={10}
          >
            <Ionicons name="chevron-back" size={18} color={colors.textPrimary} />
            <Text style={styles.backText}>Doğal Güzellikler</Text>
          </Pressable>

          <View style={[styles.detailCoverCard, cardShadow]}>
            <ImageBackground
              source={cover}
              style={styles.detailCoverImg}
              imageStyle={styles.detailCoverImgRadius}
              resizeMode="cover"
            >
              <View style={styles.detailCoverOverlay} />
            </ImageBackground>
          </View>

          <Text style={styles.detailTitle}>Altındere Vadisi</Text>
          <Text style={styles.detailMeta}>Maçka / Milli Park</Text>

          <View style={styles.detailTags}>
            {['Milli Park', 'Doğa', 'Vadi', 'Yürüyüş'].map((t) => (
              <View key={t} style={styles.natureTag}>
                <Text style={styles.natureTagText}>{t}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.detailDesc}>
            Altındere Vadisi Milli Parkı, doğal orman yapısı ve Sümela Manastırı
            çevresiyle öne çıkan önemli gezi alanlarından biridir.
          </Text>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconMap]}>
                <Ionicons
                  name="restaurant-outline"
                  size={18}
                  color={colors.secondary}
                />
              </View>
              <Text style={styles.sectionHeaderTitle}>Restoran Önerileri</Text>
            </View>

            <View style={styles.restaurantCard}>
              <Text style={styles.restaurantName}>
                Sümer Restorant Panço - Sümela Camping
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Haritada Aç"
                onPress={() => openUrl('https://share.google/NnzZKiUvx3m9w8N6m')}
                style={({ pressed }) => [
                  styles.restaurantBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.restaurantBtnText}>Haritada Aç</Text>
                <Ionicons name="open-outline" size={18} color={colors.secondary} />
              </Pressable>
            </View>
            <Text style={styles.restaurantNote}>
              Restoran önerileri herhangi bir reklam veya sponsorluk
              içermemektedir. Mekanlar yalnızca ziyaretçilere fikir vermesi
              amacıyla örnek olarak paylaşılmıştır.
            </Text>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconMap]}>
                <Ionicons name="pin-outline" size={18} color={colors.secondary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Konum</Text>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Haritada Aç"
              onPress={() =>
                openUrl('https://maps.app.goo.gl/eHF5DLUPGjuxWzmX7')
              }
              style={({ pressed }) => [
                styles.primaryBtn,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.primaryBtnText}>Haritada Aç</Text>
              <Ionicons name="open-outline" size={18} color={colors.surface} />
            </Pressable>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconStops]}>
                <Ionicons
                  name="navigate-outline"
                  size={18}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.sectionHeaderTitle}>Nasıl Gidilir?</Text>
            </View>

            <View style={styles.howBlock}>
              <Text style={styles.howTitle}>Dolmuş</Text>
              <Text style={styles.howText}>
                Moloz - Sümela dolmuşları kullanılabilir.
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Dolmuş Bilgilerine Git"
                onPress={() =>
                  navigation.navigate('Transport', { detailKey: 'dolmus' })
                }
                style={({ pressed }) => [
                  styles.secondaryBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.secondaryBtnText}>Dolmuş Bilgilerine Git</Text>
                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={colors.secondary}
                />
              </Pressable>
            </View>

            <View style={styles.detailDivider} />

            <View style={styles.howBlock}>
              <Text style={styles.howTitle}>Otobüs</Text>
              <Text style={styles.howText}>
                451 numaralı belediye otobüsü kullanılarak 6587 - Maçka Belediyesi
                durağında inilebilir. Buradan hareket eden Sümela minibüsleri ile
                vadi bölgesine ulaşım sağlanabilir.
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Otobüs Bilgilerine Git"
                onPress={() =>
                  navigation.navigate('Transport', { detailKey: 'otobus' })
                }
                style={({ pressed }) => [
                  styles.secondaryBtn,
                  pressed && { opacity: 0.92 },
                ]}
              >
                <Text style={styles.secondaryBtnText}>Otobüs Bilgilerine Git</Text>
                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={colors.secondary}
                />
              </Pressable>
            </View>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconQr]}>
                <Ionicons
                  name="information-circle-outline"
                  size={18}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.sectionHeaderTitle}>Faydalı Bilgiler</Text>
            </View>

            <View style={[styles.detailBullets, { marginTop: 12 }]}>
              <Text style={styles.detailBullet}>
                <Text style={styles.detailBulletStrong}>Giriş Ücreti</Text>{'\n'}
                Altındere Vadisi Milli Park statüsünde olduğu için araçlı veya
                yaya girişlerde ücret uygulanabilmektedir.
              </Text>
              <Text style={styles.detailBullet}>
                <Text style={styles.detailBulletStrong}>Vadi İçi Ulaşım</Text>{'\n'}
                Belirli bir noktadan sonra özel araçla ilerlemek yasaktır.
                Ziyaretçiler belediye servislerini kullanarak üst bölgelere
                ulaşabilir.
              </Text>
              <Text style={styles.detailBullet}>
                <Text style={styles.detailBulletStrong}>Kıyafet Önerisi</Text>{'\n'}
                Yürüyüş yolları ve eğimli alanlar nedeniyle rahat ve kaymayan
                spor ayakkabı tercih edilmesi önerilir.
              </Text>
            </View>
          </View>

          <View style={[styles.infoCard, cardShadow]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionHeaderIcon, styles.sectionHeaderIconQr]}>
                <Ionicons name="time-outline" size={18} color={colors.primary} />
              </View>
              <Text style={styles.sectionHeaderTitle}>Ziyaret Bilgileri</Text>
            </View>

            <View style={[styles.detailBullets, { marginTop: 10 }]}>
              <Text style={styles.detailBullet}>- Ortalama süre: 2-4 saat</Text>
              <Text style={styles.detailBullet}>
                - En uygun zaman: İlkbahar / Yaz
              </Text>
              <Text style={styles.detailBullet}>
                - Not: Yürüyüş ayakkabısı önerilir.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  if (view === 'dogal') {
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
            onPress={() => setView('root')}
            style={({ pressed }) => [
              styles.backBtn,
              pressed && { opacity: 0.9 },
            ]}
            hitSlop={10}
          >
            <Ionicons name="chevron-back" size={18} color={colors.textPrimary} />
            <Text style={styles.backText}>Gezilecek Yerler</Text>
          </Pressable>

          <Text style={styles.heroTitle}>Doğal Güzellikler</Text>
          <Text style={styles.heroLead}>
            Göl, yayla, vadi — kısa açıklamalarla seç ve detaya geç.
          </Text>

          <View style={{ marginTop: 12 }}>
            {NATURAL_PLACES.map((p) => (
              <Pressable
                key={p.key}
                accessibilityRole="button"
                accessibilityLabel={p.title}
                onPress={() => {
                  if (p.key === 'uzungol') setView('uzungol');
                  if (p.key === 'sera') setView('sera');
                  if (p.key === 'cal-magarasi') setView('cal-magarasi');
                  if (p.key === 'hidrinebi') setView('hidirnebi');
                  if (p.key === 'sultan-murat') setView('sultan-murat');
                  if (p.key === 'altindere') setView('altindere');
                }}
                style={({ pressed }) => [
                  styles.natureCard,
                  cardShadow,
                  pressed && styles.pressed,
                ]}
              >
                <ImageBackground
                  source={p.image}
                  style={styles.natureImg}
                  imageStyle={styles.natureImgRadius}
                  resizeMode="cover"
                >
                  <View style={styles.natureOverlay} />
                  <View style={styles.natureArrow}>
                    <Ionicons
                      name="chevron-forward"
                      size={18}
                      color={colors.onImage}
                    />
                  </View>
                </ImageBackground>

                <View style={styles.natureBody}>
                  <Text style={styles.natureTitle}>{p.title}</Text>
                  <Text style={styles.natureDesc}>{p.description}</Text>
                  <View style={styles.natureTags}>
                    {p.tags.map((t) => (
                      <View key={t} style={styles.natureTag}>
                        <Text style={styles.natureTagText}>{t}</Text>
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

  if (view === 'tarihi') {
    return (
      <HistoricalPlacesScreen
        onBack={() => setView('root')}
        onSelect={(place) => {
          setSelectedHistorical(place);
          setView('tarihi-detail');
        }}
      />
    );
  }

  if (view === 'tarihi-detail' && selectedHistorical) {
    return (
      <HistoricalPlaceDetailScreen
        place={selectedHistorical}
        onBack={() => setView('tarihi')}
      />
    );
  }

  if (view === 'parklar') {
    return (
      <ParksScreen
        onBack={() => setView('root')}
        onSelect={(park) => {
          setSelectedPark(park);
          setView('parklar-detail');
        }}
      />
    );
  }

  if (view === 'parklar-detail' && selectedPark) {
    return (
      <ParkDetailScreen
        park={selectedPark}
        onBack={() => setView('parklar')}
      />
    );
  }

  if (view === 'manzara') {
    return (
      <ViewpointsScreen
        onBack={() => setView('root')}
        onSelect={(spot) => {
          setSelectedViewpoint(spot);
          setView('manzara-detail');
        }}
      />
    );
  }

  if (view === 'manzara-detail' && selectedViewpoint) {
    return (
      <ViewpointDetailScreen
        spot={selectedViewpoint}
        onBack={() => setView('manzara')}
      />
    );
  }

  if (view === 'gastro') {
    return (
      <GastronomyScreen
        onBack={() => setView('root')}
        onSelect={(item) => {
          setSelectedGastro(item);
          setView('gastro-detail');
        }}
      />
    );
  }

  if (view === 'gastro-detail' && selectedGastro) {
    return (
      <GastronomyDetailScreen
        item={selectedGastro}
        onBack={() => setView('gastro')}
      />
    );
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: tabBarHeight + 28 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.heroBadge}>
            <Ionicons name="trail-sign-outline" size={18} color={colors.secondary} />
            <Text style={styles.heroBadgeText}>Şehir rehberi</Text>
          </View>
          <Text style={styles.heroTitle}>Gezilecek Yerler</Text>
          <Text style={styles.heroLead}>
            İlçelere dağılan doğa ve tarih duraklarından Boztepe manzarasına —
            Trabzon gezisinde öncelik vereceğin başlıklar.
          </Text>
        </View>

        <Text style={styles.sectionLabel}>Kategoriler</Text>
        <View style={styles.catWrap}>
          {PLACE_CATEGORIES.map((c) => (
            <Pressable
              key={c.key}
              style={({ pressed }) => [
                styles.catCard,
                cardShadow,
                pressed && styles.pressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel={c.label}
              onPress={() => {
                if (c.key === 'dogal') setView('dogal');
                if (c.key === 'tarihi') setView('tarihi');
                if (c.key === 'park') setView('parklar');
                if (c.key === 'manzara') setView('manzara');
                if (c.key === 'gastro') setView('gastro');
              }}
            >
              <View style={styles.catIcon}>
                <Ionicons name={c.icon} size={22} color={colors.primary} />
              </View>
              <Text style={styles.catTitle}>{c.label}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.sectionDivider} />

        <Text style={styles.sectionLabel}>Öne çıkan duraklar</Text>
        {DESTINATIONS.map((d) => (
          <Pressable
            key={d.key}
            style={({ pressed }) => [
              styles.destCard,
              cardShadow,
              pressed && styles.pressed,
            ]}
          >
            <ImageBackground
              source={{ uri: d.image }}
              style={styles.destImg}
              imageStyle={styles.destImgRadius}
              resizeMode="cover"
            >
              <View style={styles.destOverlay} />
              <View style={styles.destTop}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>{d.tag}</Text>
                </View>
                <View style={styles.iconBtn}>
                  <Ionicons
                    name="navigate-outline"
                    size={20}
                    color={colors.onImage}
                  />
                </View>
              </View>
              <View style={styles.destBottom}>
                <Text style={styles.destTitle}>{d.title}</Text>
                <Text style={styles.destSub}>{d.subtitle}</Text>
              </View>
            </ImageBackground>
          </Pressable>
        ))}

        <Text style={styles.sectionLabel}>Gastronomi — yerel tatlar</Text>
        <Text style={styles.gastroIntro}>
          Karadeniz sofrası: tatlıdan piden köfteye örnek lezzetler.
        </Text>
        <View style={styles.gastroRow}>
          {GASTRO_SAMPLES.map((g) => (
            <View key={g.key} style={[styles.gastroChip, cardShadow]}>
              <Ionicons
                name="restaurant"
                size={16}
                color={colors.secondary}
              />
              <Text style={styles.gastroText}>{g.label}</Text>
            </View>
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sectionHeaderIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  sectionHeaderIconMap: {
    backgroundColor: colors.surface,
  },
  sectionHeaderIconQr: {
    backgroundColor: colors.accentSoft,
    borderColor: colors.primarySoft,
  },
  sectionHeaderIconStops: {
    backgroundColor: colors.accentSoft,
    borderColor: colors.primarySoft,
  },
  sectionHeaderTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: colors.textPrimary,
    letterSpacing: -0.2,
  },
  sectionMinor: {
    marginTop: 12,
    fontSize: 12.5,
    fontWeight: '800',
    color: colors.textMuted,
  },
  restaurantCard: {
    marginTop: 12,
    padding: 12,
    borderRadius: radius.lg,
    backgroundColor: colors.searchBg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  restaurantName: {
    fontSize: 14.5,
    lineHeight: 20,
    fontWeight: '900',
    color: colors.textPrimary,
    letterSpacing: -0.2,
  },
  restaurantBtn: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  restaurantBtnText: {
    fontSize: 13.5,
    fontWeight: '900',
    color: colors.secondary,
  },
  restaurantNote: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '700',
    color: colors.textMuted,
  },
  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 12,
  },
  primaryBtn: {
    marginTop: 14,
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
  primaryBtnText: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.surface,
  },
  secondaryBtn: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: radius.md,
    backgroundColor: colors.secondarySoft,
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryBtnText: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.secondary,
  },
  detailCoverCard: {
    borderRadius: radius.xl,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 12,
  },
  detailCoverImg: {
    height: 220,
    width: '100%',
  },
  detailCoverImgRadius: {
    borderRadius: radius.xl,
  },
  detailCoverOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 18, 26, 0.12)',
  },
  detailTitle: {
    marginTop: 14,
    fontSize: 28,
    fontWeight: '900',
    color: colors.textPrimary,
    letterSpacing: -0.6,
  },
  detailMeta: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '800',
    color: colors.secondary,
  },
  detailTags: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  detailDesc: {
    marginTop: 12,
    fontSize: 14.5,
    lineHeight: 21,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  detailBullets: {
    marginTop: 6,
    gap: 6,
  },
  detailBullet: {
    fontSize: 13.5,
    lineHeight: 19,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  detailBulletStrong: {
    fontSize: 13.5,
    lineHeight: 19,
    fontWeight: '900',
    color: colors.textPrimary,
  },
  howBlock: {
    marginTop: 12,
  },
  howTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: colors.secondary,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  howText: {
    marginTop: 6,
    fontSize: 13.5,
    lineHeight: 19,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  howInfoBox: {
    marginTop: 14,
    padding: 12,
    borderRadius: radius.lg,
    backgroundColor: colors.searchBg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  howInfoTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: colors.secondary,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  howInfoText: {
    marginTop: 6,
    fontSize: 13.5,
    lineHeight: 19,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  howWarnBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: colors.accentSoft,
    borderColor: colors.primarySoft,
  },
  howSuggestBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: colors.secondarySoft,
  },
  detailDivider: {
    marginTop: 16,
    height: 1,
    backgroundColor: colors.border,
  },
  hero: {
    marginBottom: 20,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    backgroundColor: colors.secondarySoft,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  heroBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.secondary,
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
  sectionLabel: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  catWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 8,
  },
  catCard: {
    width: '48%',
    flexGrow: 1,
    minWidth: '47%',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  catIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.primarySoft,
  },
  catTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
    lineHeight: 18,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 22,
  },
  destCard: {
    borderRadius: radius.xl,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: colors.primarySoft,
    borderWidth: 1,
    borderColor: colors.border,
  },
  destImg: {
    minHeight: 208,
    justifyContent: 'space-between',
  },
  destImgRadius: {
    borderRadius: radius.xl,
  },
  destOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlayStrong,
    borderRadius: radius.xl,
  },
  destTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 14,
  },
  tag: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: radius.sm,
  },
  tagText: {
    color: colors.onImage,
    fontSize: 11,
    fontWeight: '700',
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  destBottom: {
    padding: 18,
  },
  destTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.onImage,
  },
  destSub: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(255,255,255,0.92)',
  },
  gastroIntro: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  gastroRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  gastroChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.surface,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  gastroText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  pressed: {
    opacity: 0.94,
    transform: [{ scale: 0.995 }],
  },
  natureCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 14,
  },
  natureImg: {
    height: 170,
    width: '100%',
    justifyContent: 'flex-end',
  },
  natureImgRadius: {
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    // Web: cover + center crop (native ignores safely)
    objectFit: 'cover',
  },
  natureOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 18, 26, 0.18)',
  },
  natureArrow: {
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
  natureBody: {
    padding: 14,
  },
  natureTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: colors.textPrimary,
    letterSpacing: -0.2,
  },
  natureDesc: {
    marginTop: 6,
    fontSize: 13.5,
    lineHeight: 19,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  natureTags: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  natureTag: {
    backgroundColor: colors.secondarySoft,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  natureTagText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.secondary,
  },
});
