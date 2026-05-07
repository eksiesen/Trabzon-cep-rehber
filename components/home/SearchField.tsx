import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { cardShadow } from '../../constants/layout';
import { colors, radius } from '../../theme';

export function SearchField() {
  return (
    <View style={[styles.wrap, cardShadow]}>
      <Ionicons
        name="search"
        size={20}
        color={colors.textMuted}
        style={styles.icon}
      />
      <TextInput
        placeholder="Mekân, rota veya lezzet ara…"
        placeholderTextColor={colors.textMuted}
        style={styles.input}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.textPrimary,
    paddingVertical: 0,
  },
});
