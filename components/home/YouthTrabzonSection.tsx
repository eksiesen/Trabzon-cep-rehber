import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { YOUTH_CATEGORIES_HOME } from '../../constants/data';
import { cardShadow } from '../../constants/layout';
import { colors, radius } from '../../theme';

type Props = {
  hideHeading?: boolean;
  onOpenYouthTab?: () => void;
};

export function YouthTrabzonSection({
  hideHeading = false,
  onOpenYouthTab,
}: Props) {
  return (
    <View
      style={[
        styles.shell,
        hideHeading ? styles.shellTabContext : null,
      ]}
    >
      {!hideHeading ? (
        <View style={styles.headBand}>
          <View style={styles.brandRow}>
            <View style={styles.brandMark}>
              <Ionicons name="sparkles" size={18} color={colors.onImage} />
            </View>
            <View style={styles.headTexts}>
              <Text style={styles.kicker}>GENÇ TRABZON</Text>
              <Text style={styles.title}>Genç Trabzon</Text>
              <Text style={styles.subtitle}>
                Kafe ve etkinlik öne çıkmış önizleme — üniversite, spor ve sosyal
                tesisler için geniş listeye geç.
              </Text>
            </View>
          </View>
        </View>
      ) : null}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.hScroll}
      >
        {YOUTH_CATEGORIES_HOME.map((c) => (
          <Pressable
            key={c.key}
            style={({ pressed }) => [
              styles.card,
              cardShadow,
              pressed && styles.pressed,
            ]}
            onPress={onOpenYouthTab}
          >
            <View style={styles.pillIcon}>
              <Ionicons name={c.icon} size={20} color={colors.primary} />
            </View>
            <Text style={styles.pillLabel}>{c.label}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {!hideHeading ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Genç Trabzon tüm kategoriler"
          onPress={onOpenYouthTab}
          style={({ pressed }) => [
            styles.moreBtn,
            pressed && { opacity: 0.92 },
          ]}
        >
          <Text style={styles.moreBtnText}>Daha fazlasını gör</Text>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={colors.secondary}
          />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    marginBottom: 20,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: colors.primarySoft,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: `${colors.primary}22`,
  },
  shellTabContext: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginBottom: 0,
  },
  headBand: {
    marginBottom: 14,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  brandMark: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headTexts: {
    flex: 1,
  },
  kicker: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: colors.primary,
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.textPrimary,
    letterSpacing: -0.4,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    color: colors.textSecondary,
  },
  hScroll: {
    paddingRight: 12,
    gap: 10,
    paddingVertical: 2,
    paddingBottom: 4,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.surface,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pillIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: colors.secondarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  pillLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  moreBtn: {
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
  moreBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.secondary,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
});
