import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YOUTH_CATEGORIES } from '../constants/data';
import { cardShadow } from '../constants/layout';
import { colors, radius } from '../theme';
import { YouthScreen, type YouthSpot } from './YouthScreen';
import { YouthDetailScreen } from './YouthDetailScreen';
import { YouthUniScreen, type YouthUni } from './YouthUniScreen';
import { YouthUniDetailScreen } from './YouthUniDetailScreen';

type YouthView = 'root' | 'kafe' | 'kafe-detail' | 'uni' | 'uni-detail';

const TIPS = [
  {
    key: '1',
    title: 'Kampüs ve merkez arası',
    body: 'Dolmuş ve otobüs hatları üniversite bölgesiyle sahil hattını birbirine bağlar.',
    icon: 'git-network-outline' as const,
  },
  {
    key: '2',
    title: 'Hafta sonu çıkışları',
    body: 'Çaykara ve Maçka yönlü gezilerde günü erken planlayıp dönüş saatine dikkat et.',
    icon: 'trail-sign-outline' as const,
  },
  {
    key: '3',
    title: 'Etkinlik ve tesis',
    body: 'Spor sahaları ve sosyal tesislerde yoğun dönemlerde ön kayıt ve saat sorgula.',
    icon: 'time-outline' as const,
  },
] as const;

export function YouthTabScreen() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const [view, setView] = React.useState<YouthView>('root');
  const [selectedSpot, setSelectedSpot] = React.useState<YouthSpot | null>(null);
  const [selectedUni, setSelectedUni] = React.useState<YouthUni | null>(null);

  if (view === 'kafe') {
    return (
      <YouthScreen
        onBack={() => setView('root')}
        onSelect={(spot) => {
          setSelectedSpot(spot);
          setView('kafe-detail');
        }}
      />
    );
  }

  if (view === 'kafe-detail' && selectedSpot) {
    return (
      <YouthDetailScreen
        spot={selectedSpot}
        onBack={() => setView('kafe')}
      />
    );
  }

  if (view === 'uni') {
    return (
      <YouthUniScreen
        onBack={() => setView('root')}
        onSelect={(uni) => {
          setSelectedUni(uni);
          setView('uni-detail');
        }}
      />
    );
  }

  if (view === 'uni-detail' && selectedUni) {
    return (
      <YouthUniDetailScreen
        uni={selectedUni}
        onBack={() => setView('uni')}
      />
    );
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: tabBarHeight + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroBand}>
          <View style={styles.heroBadge}>
            <Ionicons name="people" size={18} color={colors.onImage} />
            <Text style={styles.heroBadgeText}>GENÇ TRABZON</Text>
          </View>
          <Text style={styles.title}>Genç Trabzon</Text>
          <Text style={styles.lead}>
            Gezi yapan genç ziyaretçiler ve öğrenciler için kafelerden spor
            sahalarına özet başlıklar.
          </Text>
        </View>

        <Text style={styles.gridLabel}>Kategoriler</Text>
        <View style={styles.grid}>
          {YOUTH_CATEGORIES.map((c) => (
            <Pressable
              key={c.key}
              onPress={() => {
                if (c.key === 'kafe') setView('kafe');
                if (c.key === 'uni') setView('uni');
              }}
              style={({ pressed }) => [
                styles.catTile,
                cardShadow,
                pressed && styles.pressed,
              ]}
            >
              <View style={styles.catIcon}>
                <Ionicons name={c.icon} size={26} color={colors.primary} />
              </View>
              <Text style={styles.catLabel}>{c.label}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.tipsLabel}>Pratik notlar</Text>
        {TIPS.map((t) => (
          <View key={t.key} style={[styles.tip, cardShadow]}>
            <View style={styles.tipIcon}>
              <Ionicons name={t.icon} size={22} color={colors.primary} />
            </View>
            <View style={styles.tipBody}>
              <Text style={styles.tipTitle}>{t.title}</Text>
              <Text style={styles.tipText}>{t.body}</Text>
            </View>
          </View>
        ))}
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
  heroBand: {
    backgroundColor: colors.primary,
    borderRadius: radius.xl,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: `${colors.onImage}22`,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.sm,
  },
  heroBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: colors.onImage,
  },
  title: {
    marginTop: 12,
    fontSize: 28,
    fontWeight: '800',
    color: colors.onImage,
    letterSpacing: -0.5,
  },
  lead: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: 'rgba(255,255,255,0.92)',
  },
  gridLabel: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 8,
  },
  catTile: {
    width: '48%',
    flexGrow: 1,
    minWidth: '47%',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 118,
    justifyContent: 'space-between',
  },
  catIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: colors.secondarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 10,
  },
  catLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
    lineHeight: 18,
  },
  tipsLabel: {
    marginTop: 16,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  tip: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: 14,
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tipIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipBody: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  tipText: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    color: colors.textSecondary,
  },
  pressed: {
    opacity: 0.94,
    transform: [{ scale: 0.99 }],
  },
});
