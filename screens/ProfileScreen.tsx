import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { cardShadow } from '../constants/layout';
import { colors, radius } from '../theme';

const ROWS = [
  { key: 'notif', label: 'Bildirimler', icon: 'notifications-outline' as const },
  { key: 'fav', label: 'Kaydedilenler', icon: 'heart-outline' as const },
  { key: 'help', label: 'Yardım', icon: 'help-circle-outline' as const },
  { key: 'about', label: 'Hakkında', icon: 'information-circle-outline' as const },
] as const;

export function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: tabBarHeight + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.identity, cardShadow]}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={36} color={colors.primary} />
          </View>
          <View style={styles.identityText}>
            <Text style={styles.name}>Misafir</Text>
            <Text style={styles.sub}>Ziyaretçi şehir rehberi</Text>
          </View>
          <Pressable style={styles.edit}>
            <Ionicons name="create-outline" size={22} color={colors.secondary} />
          </Pressable>
        </View>

        {ROWS.map((r) => (
          <Pressable
            key={r.key}
            style={({ pressed }) => [
              styles.row,
              cardShadow,
              pressed && { opacity: 0.92 },
            ]}
          >
            <View style={styles.rowLeft}>
              <Ionicons name={r.icon} size={22} color={colors.primary} />
              <Text style={styles.rowLabel}>{r.label}</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textMuted}
            />
          </Pressable>
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
  identity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 14,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 22,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primarySoft,
  },
  identityText: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  sub: {
    marginTop: 4,
    fontSize: 14,
    color: colors.textSecondary,
  },
  edit: {
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
});
