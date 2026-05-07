import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GRID_ITEMS } from '../../constants/data';
import { cardShadow } from '../../constants/layout';
import { colors, radius } from '../../theme';

export function QuickAccessGrid() {
  return (
    <View style={styles.row}>
      {GRID_ITEMS.map((item) => (
        <View key={item.key} style={styles.cell}>
          <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
            <View style={[styles.tile, cardShadow]}>
              <View
                style={[
                  styles.iconWrap,
                  { backgroundColor: `${item.tint}12` },
                ]}
              >
                <Ionicons name={item.icon} size={22} color={item.tint} />
              </View>
              <Text style={styles.gridLabel} numberOfLines={2}>
                {item.label}
              </Text>
            </View>
          </Pressable>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 6,
  },
  cell: {
    flex: 1,
    minWidth: 0,
  },
  tile: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 96,
    justifyContent: 'space-between',
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  gridLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textPrimary,
    lineHeight: 16,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
});
