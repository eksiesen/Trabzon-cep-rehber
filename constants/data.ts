/**
 * Trabzon ziyaretçi / kısa süreli konaklama odaklı içerik.
 * Görseller: stabil Unsplash URL’leri.
 */
export const DESTINATIONS = [
  {
    key: 'uzungol',
    title: 'Uzungöl',
    subtitle: 'Çaykara — göl ve yeşilin buluşması',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=85',
    tag: 'Doğa',
  },
  {
    key: 'sumela',
    title: 'Sümela Manastırı',
    subtitle: 'Maçka — kaya üzerinde tarih',
    image:
      'https://images.unsplash.com/photo-1596484552834-6a58f85085ed?auto=format&fit=crop&w=1400&q=85',
    tag: 'Tarih',
  },
  {
    key: 'boztepe',
    title: 'Boztepe',
    subtitle: 'Trabzon — şehir ve deniz kuşağı',
    image:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1400&q=85',
    tag: 'Manzara',
  },
] as const;

/** Ana sayfa Hızlı Ulaşım — sadece özet */
export const TRANSPORT_QUICK = [
  { key: 'dolmus', label: 'Dolmuş', icon: 'car-outline' as const },
  { key: 'taksi', label: 'Taksi', icon: 'car-sport-outline' as const },
] as const;

/** Ulaşım sekmesi — tam liste */
export const TRANSPORT_ALL = [
  { key: 'dolmus', label: 'Dolmuş', icon: 'car-outline' as const },
  { key: 'taksi', label: 'Taksi', icon: 'car-sport-outline' as const },
  { key: 'otobus', label: 'Otobüs', icon: 'bus-outline' as const },
  {
    key: 'havaalani',
    label: 'Havaalanı',
    icon: 'airplane-outline' as const,
  },
] as const;

/** Hızlı erişim — ziyaretçi için pratik bağlantılar */
export const GRID_ITEMS = [
  {
    key: 'duyuru',
    label: 'Duyurular',
    icon: 'megaphone-outline' as const,
    tint: '#2B6CB0',
  },
  {
    key: 'sikayet',
    label: 'Şikayet / İstek',
    icon: 'chatbubbles-outline' as const,
    tint: '#D97706',
  },
  {
    key: 'belediye',
    label: 'Belediye',
    icon: 'business-outline' as const,
    tint: '#7C3AED',
  },
] as const;

/** Genç Trabzon — ana sayfa önizleme (tam liste için sekme) */
export const YOUTH_CATEGORIES_HOME = [
  { key: 'kafe', label: 'Kafeler', icon: 'cafe-outline' as const },
  { key: 'etkinlik', label: 'Etkinlikler', icon: 'calendar-outline' as const },
] as const;

/** Genç Trabzon — sekme (tüm kategoriler) */
export const YOUTH_CATEGORIES = [
  { key: 'kafe', label: 'Kafeler', icon: 'cafe-outline' as const },
  { key: 'uni', label: 'Üniversiteler', icon: 'school-outline' as const },
  { key: 'etkinlik', label: 'Etkinlikler', icon: 'calendar-outline' as const },
  {
    key: 'spor',
    label: 'Spor Sahaları',
    icon: 'football-outline' as const,
  },
  {
    key: 'sosyal',
    label: 'Sosyal Tesisler',
    icon: 'people-circle-outline' as const,
  },
] as const;

/** Gezilecek yerler — keşif kategorileri */
export const PLACE_CATEGORIES = [
  {
    key: 'dogal',
    label: 'Doğal Güzellikler',
    icon: 'leaf-outline' as const,
  },
  {
    key: 'tarihi',
    label: 'Tarihi Yerler',
    icon: 'library-outline' as const,
  },
  { key: 'park', label: 'Parklar', icon: 'sunny-outline' as const },
  {
    key: 'gastro',
    label: 'Gastronomi',
    icon: 'restaurant-outline' as const,
  },
  { key: 'ilce', label: 'İlçeler', icon: 'map-outline' as const },
  {
    key: 'manzara',
    label: 'Manzara Noktaları',
    icon: 'eye-outline' as const,
  },
  {
    key: 'isletme',
    label: 'Farklı İşletmeler',
    icon: 'storefront-outline' as const,
  },
] as const;

export const GASTRO_SAMPLES = [
  { key: 'hamsi', label: 'Hamsiköy Sütlacı' },
  { key: 'surmene', label: 'Sürmene Pidesi' },
  { key: 'vakfikebir', label: 'Vakfıkebir Ekmeği' },
  { key: 'akcaabat', label: 'Akçaabat Köftesi' },
] as const;
