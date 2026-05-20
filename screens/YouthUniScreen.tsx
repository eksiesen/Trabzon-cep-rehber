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

export type YouthUni = {
  key: string;
  title: string;
  description: string;
  tags: string[];
  image: ImageSourcePropType;
  mapUrl: string;
  info: string;
  lisans: {
    faculty: string;
    departments: string[];
  }[];
  onLisans: {
    school: string;
    departments: string[];
  }[];
};

export const YOUTH_UNIS: readonly YouthUni[] = [
  {
    key: 'ktu',
    title: 'Karadeniz Teknik Üniversitesi',
    description: 'Türkiye’nin en köklü teknik üniversitelerinden biri',
    tags: ['Üniversite', 'Kampüs', 'Öğrenci'],
    image: require('../assets/places/ktü.jpg'),
    mapUrl: 'https://share.google/iiwhYuUHcOSfaFiHI',
    info: 'Karadeniz Teknik Üniversitesi (KTÜ), Trabzon’da bulunan bir devlet üniversitesidir. 1955 yılında kurulan üniversite, İstanbul ve Ankara dışında açılan ilk üniversite ve Türkiye’nin en eski teknik üniversitelerinden biri olarak kabul edilmektedir.',
    lisans: [
      {
        faculty: 'Diş Hekimliği Fakültesi',
        departments: ['Diş Hekimliği'],
      },
      {
        faculty: 'Eczacılık Fakültesi',
        departments: ['Eczacılık'],
      },
      {
        faculty: 'Edebiyat Fakültesi',
        departments: [
          'Arkeoloji',
          'İngiliz Dili ve Edebiyatı',
          'Psikoloji',
          'Rus Dili ve Edebiyatı',
          'Sosyoloji',
          'Tarih',
          'Türk Dili ve Edebiyatı',
        ],
      },
      {
        faculty: 'Fen Fakültesi',
        departments: [
          'Bilgisayar Bilimleri',
          'Biyoloji',
          'Fizik',
          'Kimya',
          'Matematik',
          'Moleküler Biyoloji ve Genetik',
          'Yazılım Geliştirme',
        ],
      },
      {
        faculty: 'İktisadi ve İdari Bilimler Fakültesi',
        departments: [
          'Çalışma Ekonomisi ve Endüstri İlişkileri',
          'Ekonometri',
          'İktisat',
          'İşletme',
          'Kamu Yönetimi',
          'Maliye',
          'Uluslararası İlişkiler',
          'Yönetim Bilişim Sistemleri',
        ],
      },
      {
        faculty: 'Mimarlık Fakültesi',
        departments: ['İç Mimarlık', 'Mimarlık', 'Şehir ve Bölge Planlama'],
      },
      {
        faculty: 'Mühendislik Fakültesi',
        departments: [
          'Bilgisayar Mühendisliği',
          'Elektrik-Elektronik Mühendisliği',
          'Endüstri Mühendisliği',
          'Harita Mühendisliği',
          'İnşaat Mühendisliği',
          'Jeoloji Mühendisliği',
          'Maden Mühendisliği',
          'Makine Mühendisliği',
          'Metalurji ve Malzeme Mühendisliği',
          'Yapay Zeka ve Veri Mühendisliği',
          'Yazılım Mühendisliği',
        ],
      },
      {
        faculty: 'Of Teknoloji Fakültesi',
        departments: [
          'Elektronik ve Haberleşme Mühendisliği',
          'Enerji Sistemleri Mühendisliği',
          'İnşaat Mühendisliği',
          'Yazılım Mühendisliği',
          'Yazılım Mühendisliği (M.T.O.K)',
        ],
      },
      {
        faculty: 'Orman Fakültesi',
        departments: [
          'Orman Endüstrisi Mühendisliği',
          'Orman Mühendisliği',
          'Peyzaj Mimarlığı',
          'Yaban Hayatı Ekolojisi ve Yönetimi',
        ],
      },
      {
        faculty: 'Sağlık Bilimleri Fakültesi',
        departments: [
          'Beslenme ve Diyetetik',
          'Fizyoterapi ve Rehabilitasyon',
          'Hemşirelik',
          'Sağlık Yönetimi',
        ],
      },
      {
        faculty: 'Sürmene Deniz Bilimleri Fakültesi',
        departments: [
          'Balıkçılık Teknolojisi Mühendisliği',
          'Deniz Ulaştırma İşletme Mühendisliği',
          'Denizcilik İşletmeleri Yönetimi',
          'Gemi İnşaatı ve Gemi Makineleri Mühendisliği',
          'Gemi Makineleri İşletme Mühendisliği',
        ],
      },
      {
        faculty: 'Tıp Fakültesi',
        departments: ['Tıp'],
      },
    ],
    onLisans: [
      {
        school: 'Araklı Ali Cevat Özyurt Meslek Yüksekokulu',
        departments: [
          'Dijital Dönüşüm Elektroniği',
          'İş Sağlığı ve Güvenliği',
          'Lojistik',
          'Yapay Zeka Operatörlüğü',
        ],
      },
      {
        school: 'Arsin Meslek Yüksekokulu',
        departments: [
          'Doğalgaz ve Tesisatı Teknolojisi',
          'Grafik Tasarımı',
          'İç Mekan Tasarımı',
          'Mobilya ve Dekorasyon',
        ],
      },
      {
        school: 'Maçka Meslek Yüksekokulu',
        departments: [
          'Biyokimya',
          'Eczane Hizmetleri',
          'Gıda Kalite Kontrolü ve Analizi',
          'Gıda Teknolojisi',
          'Laborant ve Veteriner Sağlık',
          'Laboratuvar Teknolojisi',
          'Turizm ve Otel İşletmeciliği',
        ],
      },
      {
        school: 'Sağlık Hizmetleri Meslek Yüksekokulu',
        departments: [
          'İlk ve Acil Yardım',
          'Tıbbi Dokümantasyon ve Sekreterlik',
          'Tıbbi Görüntüleme Teknikleri',
          'Tıbbi Laboratuvar Teknikleri',
        ],
      },
      {
        school: 'Sürmene Abdullah Kanca Meslek Yüksekokulu',
        departments: [
          'Elektrik',
          'Elektronik Teknolojisi',
          'Gemi İnşaatı',
          'Gemi Makineleri İşletmeciliği',
          'Kaynak Teknolojisi',
          'Makine',
          'Mekatronik',
        ],
      },
      {
        school: 'Trabzon Meslek Yüksekokulu',
        departments: [
          'Bilgisayar Programcılığı',
          'Biyomedikal Cihaz Teknolojisi',
          'Elektrik',
          'Elektronik Teknolojisi',
          'Geleneksel El Sanatları',
          'Harita ve Kadastro',
          'İnşaat Teknolojisi',
          'Makine',
          'Moda Tasarımı',
        ],
      },
    ],
  },
  {
    key: 'tru',
    title: 'Trabzon Üniversitesi',
    description: 'Akçaabat’ta bulunan devlet üniversitesi',
    tags: ['Üniversite', 'Akçaabat', 'Öğrenci'],
    image: require('../assets/places/trü.jpg'),
    mapUrl: 'https://share.google/VXIsyyrcPU04G3441',
    info: 'Trabzon Üniversitesi, 8 Mayıs 2018 tarihinde Karadeniz Teknik Üniversitesi’nden ayrılarak Trabzon’un Akçaabat ilçesinde kurulan bir devlet üniversitesidir.',
    lisans: [
      {
        faculty: 'Bilgisayar ve Bilişim Bilimleri Fakültesi',
        departments: [
          'Bilgisayar Mühendisliği',
          'Dijital Oyun Tasarım',
          'Yapay Zeka Mühendisliği',
        ],
      },
      {
        faculty: 'Fatih Eğitim Fakültesi',
        departments: [
          'Fen Bilgisi Öğretmenliği',
          'İlköğretim Matematik Öğretmenliği',
          'İngilizce Öğretmenliği',
          'Matematik Öğretmenliği',
          'Okul Öncesi Öğretmenliği',
          'Özel Eğitim Öğretmenliği',
          'Rehberlik ve Psikolojik Danışmanlık',
          'Sınıf Öğretmenliği',
          'Sosyal Bilgiler Öğretmenliği',
          'Türkçe Öğretmenliği',
        ],
      },
      {
        faculty: 'Hukuk Fakültesi',
        departments: ['Hukuk'],
      },
      {
        faculty: 'İlahiyat Fakültesi',
        departments: ['İlahiyat', 'İlahiyat (M.T.O.K)'],
      },
      {
        faculty: 'İletişim Fakültesi',
        departments: [
          'Gazetecilik',
          'Halkla İlişkiler ve Reklamcılık',
          'Radyo, Televizyon ve Sinema',
        ],
      },
      {
        faculty: 'İnsan ve Toplum Bilimleri Fakültesi',
        departments: [
          'İngilizce Mütercim ve Tercümanlık',
          'Psikoloji',
          'Sosyoloji',
          'Tarih',
          'Türk Dili ve Edebiyatı',
        ],
      },
      {
        faculty: 'Siyasal Bilgiler Fakültesi',
        departments: [
          'Siyaset Bilimi ve Kamu Yönetimi',
          'Uluslararası Ticaret ve Lojistik',
        ],
      },
      {
        faculty: 'Spor Bilimleri Fakültesi',
        departments: ['Spor Yöneticiliği'],
      },
      {
        faculty: 'Tıp Fakültesi',
        departments: ['Tıp'],
      },
      {
        faculty: 'Uygulamalı Bilimler Yüksekokulu',
        departments: [
          'Acil Yardım ve Afet Yönetimi (Yüksekokul)',
          'Yönetim Bilişim Sistemleri (Yüksekokul)',
        ],
      },
    ],
    onLisans: [
      {
        school: 'Beşikdüzü Meslek Yüksekokulu',
        departments: [
          'Büro Yönetimi ve Yönetici Asistanlığı',
          'Çağrı Merkezi Hizmetleri',
          'Dış Ticaret',
          'İşletme Yönetimi',
          'Muhasebe ve Vergi Uygulamaları',
          'Pazarlama',
        ],
      },
      {
        school: 'Çarşıbaşı Meslek Yüksekokulu',
        departments: [
          'Bilgisayar Destekli Tasarım ve Animasyon',
          'Bilgisayar Teknolojisi',
          'İnternet ve Ağ Teknolojileri',
        ],
      },
      {
        school: 'Şalpazarı Meslek Yüksekokulu',
        departments: [
          'Acil Durum ve Afet Yönetimi',
          'Mahkeme Büro Hizmetleri',
          'Sivil Savunma ve İtfaiyecilik',
        ],
      },
      {
        school: 'Tonya Meslek Yüksekokulu',
        departments: [
          'Evde Hasta Bakımı',
          'Fizyoterapi',
          'İlk ve Acil Yardım',
          'Tıbbi Görüntüleme Teknikleri',
          'Tıbbi Laboratuvar Teknikleri',
          'Yaşlı Bakımı',
        ],
      },
      {
        school: 'Turizm ve Otelcilik Meslek Yüksekokulu',
        departments: ['Turizm ve Otel İşletmeciliği', 'Turizm ve Seyahat Hizmetleri'],
      },
      {
        school: 'Vakfıkebir Meslek Yüksekokulu',
        departments: [
          'Bankacılık ve Sigortacılık',
          'Halkla İlişkiler ve Tanıtım',
          'İşletme Yönetimi',
          'Maliye',
          'Muhasebe ve Vergi Uygulamaları',
        ],
      },
    ],
  },
  {
    key: 'avrasya',
    title: 'Avrasya Üniversitesi',
    description: 'Trabzon’da bulunan vakıf üniversitesi',
    tags: ['Üniversite', 'Vakıf', 'Öğrenci'],
    image: require('../assets/places/avrasya.jpg'),
    mapUrl: 'https://share.google/JI9TiKUAquSSVvJnv',
    info: 'Avrasya Üniversitesi, Trabzon’da yer alan ve Maçka İmar, Eğitim, Kültür ve Sosyal Hizmet Vakfı tarafından kurulan bir vakıf üniversitesidir.',
    lisans: [
      {
        faculty: 'Fen-Edebiyat Fakültesi',
        departments: [
          'İngiliz Dili ve Edebiyatı (Burslu)',
          'İngiliz Dili ve Edebiyatı (%50 İndirimli)',
          'İngiliz Dili ve Edebiyatı (Ücretli)',
          'İngilizce Mütercim ve Tercümanlık (Burslu)',
          'İngilizce Mütercim ve Tercümanlık (%50 İndirimli)',
          'İngilizce Mütercim ve Tercümanlık (Ücretli)',
          'Moleküler Biyoloji ve Genetik (Burslu)',
          'Moleküler Biyoloji ve Genetik (%50 İndirimli)',
          'Moleküler Biyoloji ve Genetik (Ücretli)',
          'Psikoloji (Burslu)',
          'Psikoloji (Ücretli)',
          'Türk Dili ve Edebiyatı (Burslu)',
          'Türk Dili ve Edebiyatı (%50 İndirimli)',
          'Türk Dili ve Edebiyatı (Ücretli)',
        ],
      },
      {
        faculty: 'İktisadi ve İdari Bilimler Fakültesi',
        departments: [
          'İşletme (Burslu)',
          'İşletme (Ücretli)',
          'Siyaset Bilimi ve Kamu Yönetimi (Burslu)',
          'Siyaset Bilimi ve Kamu Yönetimi (%50 İndirimli)',
          'Siyaset Bilimi ve Kamu Yönetimi (Ücretli)',
        ],
      },
      {
        faculty: 'İletişim Fakültesi',
        departments: [
          'Görsel İletişim Tasarımı (Burslu)',
          'Görsel İletişim Tasarımı (%50 İndirimli)',
          'Görsel İletişim Tasarımı (Ücretli)',
          'Yeni Medya ve İletişim (Burslu)',
          'Yeni Medya ve İletişim (%50 İndirimli)',
          'Yeni Medya ve İletişim (Ücretli)',
        ],
      },
      {
        faculty: 'Mühendislik ve Mimarlık Fakültesi',
        departments: [
          'Bilgisayar Mühendisliği (Burslu)',
          'Bilgisayar Mühendisliği (%50 İndirimli)',
          'Bilgisayar Mühendisliği (Ücretli)',
          'İç Mimarlık ve Çevre Tasarımı (Burslu)',
          'İç Mimarlık ve Çevre Tasarımı (%50 İndirimli)',
          'İç Mimarlık ve Çevre Tasarımı (Ücretli)',
          'İnşaat Mühendisliği (Burslu)',
          'İnşaat Mühendisliği (%50 İndirimli)',
          'İnşaat Mühendisliği (Ücretli)',
          'Mimarlık (Burslu)',
          'Mimarlık (%50 İndirimli)',
          'Mimarlık (Ücretli)',
        ],
      },
      {
        faculty: 'Sağlık Bilimleri Fakültesi',
        departments: [
          'Beslenme ve Diyetetik (Burslu)',
          'Beslenme ve Diyetetik (%50 İndirimli)',
          'Beslenme ve Diyetetik (Ücretli)',
          'Çocuk Gelişimi (Burslu)',
          'Çocuk Gelişimi (%50 İndirimli)',
          'Çocuk Gelişimi (Ücretli)',
          'Ebelik (Burslu)',
          'Ebelik (Ücretli)',
          'Ergoterapi (Burslu)',
          'Ergoterapi (%50 İndirimli)',
          'Ergoterapi (Ücretli)',
          'Fizyoterapi ve Rehabilitasyon (Burslu)',
          'Fizyoterapi ve Rehabilitasyon (%50 İndirimli)',
          'Fizyoterapi ve Rehabilitasyon (Ücretli)',
          'Hemşirelik (Burslu)',
          'Hemşirelik (Ücretli)',
          'Odyoloji (Burslu)',
          'Odyoloji (%50 İndirimli)',
          'Odyoloji (Ücretli)',
        ],
      },
      {
        faculty: 'Spor Bilimleri Fakültesi',
        departments: [
          'Spor Yöneticiliği (Burslu)',
          'Spor Yöneticiliği (%50 İndirimli)',
          'Spor Yöneticiliği (Ücretli)',
        ],
      },
      {
        faculty: 'Uygulamalı Bilimler Yüksekokulu',
        departments: [
          'Gastronomi ve Mutfak Sanatları (Yüksekokul) (Burslu)',
          'Gastronomi ve Mutfak Sanatları (Yüksekokul) (%50 İndirimli)',
          'Gastronomi ve Mutfak Sanatları (Yüksekokul) (Ücretli)',
          'Yönetim Bilişim Sistemleri (Yüksekokul) (Burslu)',
          'Yönetim Bilişim Sistemleri (Yüksekokul) (Ücretli)',
        ],
      },
    ],
    onLisans: [
      {
        school: 'Meslek Yüksekokulu',
        departments: [
          'Aşçılık (Burslu)',
          'Aşçılık (%50 İndirimli)',
          'Aşçılık (Ücretli)',
          'Bilgisayar Programcılığı (Burslu)',
          'Bilgisayar Programcılığı (%50 İndirimli)',
          'Bilgisayar Programcılığı (Ücretli)',
          'Bilişim Güvenliği Teknolojisi (Burslu)',
          'Bilişim Güvenliği Teknolojisi (%50 İndirimli)',
          'Bilişim Güvenliği Teknolojisi (Ücretli)',
          'Dış Ticaret (Burslu)',
          'Dış Ticaret (%50 İndirimli)',
          'Dış Ticaret (Ücretli)',
          'E-Ticaret ve Pazarlama (Burslu)',
          'E-Ticaret ve Pazarlama (%50 İndirimli)',
          'E-Ticaret ve Pazarlama (Ücretli)',
          'Halkla İlişkiler ve Tanıtım (Burslu)',
          'Halkla İlişkiler ve Tanıtım (%50 İndirimli)',
          'Halkla İlişkiler ve Tanıtım (Ücretli)',
          'Harita ve Kadastro (Burslu)',
          'Harita ve Kadastro (%50 İndirimli)',
          'Harita ve Kadastro (Ücretli)',
          'İç Mekan Tasarımı (Burslu)',
          'İç Mekan Tasarımı (%50 İndirimli)',
          'İç Mekan Tasarımı (Ücretli)',
          'İnşaat Teknolojisi (Burslu)',
          'İnşaat Teknolojisi (%50 İndirimli)',
          'İnşaat Teknolojisi (Ücretli)',
          'Lojistik (Burslu)',
          'Lojistik (%50 İndirimli)',
          'Lojistik (Ücretli)',
          'Mahkeme Büro Hizmetleri (Burslu)',
          'Mahkeme Büro Hizmetleri (%50 İndirimli)',
          'Mahkeme Büro Hizmetleri (Ücretli)',
          'Mimari Restorasyon (Burslu)',
          'Mimari Restorasyon (%50 İndirimli)',
          'Mimari Restorasyon (Ücretli)',
          'Moda Tasarımı (Burslu)',
          'Moda Tasarımı (%50 İndirimli)',
          'Moda Tasarımı (Ücretli)',
          'Otomotiv Teknolojisi (Burslu)',
          'Otomotiv Teknolojisi (Ücretli)',
          'Sivil Havacılık Kabin Hizmetleri (Burslu)',
          'Sivil Havacılık Kabin Hizmetleri (%50 İndirimli)',
          'Sivil Havacılık Kabin Hizmetleri (Ücretli)',
          'Sosyal Hizmetler (Burslu)',
          'Sosyal Hizmetler (%50 İndirimli)',
          'Sosyal Hizmetler (Ücretli)',
          'Web Tasarımı ve Kodlama (Burslu)',
          'Web Tasarımı ve Kodlama (Ücretli)',
        ],
      },
      {
        school: 'Sağlık Hizmetleri Meslek Yüksekokulu',
        departments: [
          'Ağız ve Diş Sağlığı (Burslu)',
          'Ağız ve Diş Sağlığı (%50 İndirimli)',
          'Ağız ve Diş Sağlığı (Ücretli)',
          'Ameliyathane Hizmetleri (Burslu)',
          'Ameliyathane Hizmetleri (Ücretli)',
          'Anestezi (Burslu)',
          'Anestezi (Ücretli)',
          'Çocuk Gelişimi (Burslu)',
          'Çocuk Gelişimi (%50 İndirimli)',
          'Çocuk Gelişimi (Ücretli)',
          'Diş Protez Teknolojisi (Burslu)',
          'Diş Protez Teknolojisi (%50 İndirimli)',
          'Diş Protez Teknolojisi (Ücretli)',
          'Diyaliz (Burslu)',
          'Diyaliz (Ücretli)',
          'Eczane Hizmetleri (Burslu)',
          'Eczane Hizmetleri (%50 İndirimli)',
          'Eczane Hizmetleri (Ücretli)',
          'Elektronörofizyoloji (Burslu)',
          'Elektronörofizyoloji (%50 İndirimli)',
          'Elektronörofizyoloji (Ücretli)',
          'Fizyoterapi (Burslu)',
          'Fizyoterapi (%50 İndirimli)',
          'Fizyoterapi (Ücretli)',
          'İlk ve Acil Yardım (Burslu)',
          'İlk ve Acil Yardım (Ücretli)',
          'İş Sağlığı ve Güvenliği (Burslu)',
          'İş Sağlığı ve Güvenliği (%50 İndirimli)',
          'İş Sağlığı ve Güvenliği (Ücretli)',
          'İş ve Uğraşı Terapisi (Burslu)',
          'İş ve Uğraşı Terapisi (%50 İndirimli)',
          'İş ve Uğraşı Terapisi (Ücretli)',
          'Odyometri (Burslu)',
          'Odyometri (%50 İndirimli)',
          'Odyometri (Ücretli)',
          'Optisyenlik (Burslu)',
          'Optisyenlik (%50 İndirimli)',
          'Optisyenlik (Ücretli)',
          'Ortopedik Protez ve Ortez (Burslu)',
          'Ortopedik Protez ve Ortez (%50 İndirimli)',
          'Ortopedik Protez ve Ortez (Ücretli)',
          'Patoloji Laboratuvar Teknikleri (Burslu)',
          'Patoloji Laboratuvar Teknikleri (%50 İndirimli)',
          'Patoloji Laboratuvar Teknikleri (Ücretli)',
          'Radyoterapi (Burslu)',
          'Radyoterapi (Ücretli)',
          'Tıbbi Görüntüleme Teknikleri (Burslu)',
          'Tıbbi Görüntüleme Teknikleri (Ücretli)',
          'Tıbbi Laboratuvar Teknikleri (Burslu)',
          'Tıbbi Laboratuvar Teknikleri (%50 İndirimli)',
          'Tıbbi Laboratuvar Teknikleri (Ücretli)',
        ],
      },
    ],
  },
];

export function YouthUniScreen({
  onBack,
  onSelect,
}: {
  onBack: () => void;
  onSelect: (uni: YouthUni) => void;
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

        <Text style={styles.heroTitle}>Üniversiteler</Text>
        <Text style={styles.heroLead}>
          Trabzon’daki üniversiteler ve kampüs rehberi.
        </Text>

        <View style={{ marginTop: 12 }}>
          {YOUTH_UNIS.map((p) => (
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
