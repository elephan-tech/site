import dynamic from 'next/dynamic';
import { reduce, forEach } from 'lodash';


export const IonContent = dynamic(async () => (await import('@ionic/react')).IonContent, { ssr: false });
export const IonApp = dynamic(async () => (await import('@ionic/react')).IonApp, { ssr: false });
export const IonGrid = dynamic(async () => (await import('@ionic/react')).IonGrid, { ssr: false });
export const IonRow = dynamic(async () => (await import('@ionic/react')).IonRow, { ssr: false });
export const IonCol = dynamic(async () => (await import('@ionic/react')).IonCol, { ssr: false });
export const IonText = dynamic(async () => (await import('@ionic/react')).IonText, { ssr: false });
export const IonCard = dynamic(async () => (await import('@ionic/react')).IonCard, { ssr: false });
export const IonButton = dynamic(async () => (await import('@ionic/react')).IonButton, { ssr: false });
export const IonButtons = dynamic(async () => (await import('@ionic/react')).IonButtons, { ssr: false });
export const IonInput = dynamic(async () => (await import('@ionic/react')).IonInput, { ssr: false });
export const IonPage = dynamic(async () => (await import('@ionic/react')).IonPage, { ssr: false });
export const IonToolbar = dynamic(async () => (await import('@ionic/react')).IonToolbar, { ssr: false });
export const IonHeader = dynamic(async () => (await import('@ionic/react')).IonToolbar, { ssr: false });
export const IonIcon = dynamic(async () => (await import('@ionic/react')).IonIcon, { ssr: false });
export const IonTitle = dynamic(async () => (await import('@ionic/react')).IonPage, { ssr: false });
export const IonNavLink = dynamic(async () => (await import('@ionic/react')).IonNavLink, { ssr: false });
export const IonNav = dynamic(async () => (await import('@ionic/react')).IonNav, { ssr: false });
export const IonCardContent = dynamic(async () => (await import('@ionic/react')).IonCardContent, { ssr: false });
export const IonCardHeader = dynamic(async () => (await import('@ionic/react')).IonCardHeader, { ssr: false });
export const IonCardSubtitle = dynamic(async () => (await import('@ionic/react')).IonCardSubtitle, { ssr: false });
export const IonCardTitle = dynamic(async () => (await import('@ionic/react')).IonCardTitle, { ssr: false });
export const IonItem = dynamic(async () => (await import('@ionic/react')).IonItem, { ssr: false });
export const IonTextarea = dynamic(async () => (await import('@ionic/react')).IonTextarea, { ssr: false });
export const IonLabel = dynamic(async () => (await import('@ionic/react')).IonLabel, { ssr: false });
export const IonTabs = dynamic(async () => (await import('@ionic/react')).IonTabs, { ssr: false });
export const IonTabBar = dynamic(async () => (await import('@ionic/react')).IonTabBar, { ssr: false });
export const IonBadge = dynamic(async () => (await import('@ionic/react')).IonBadge, { ssr: false });
export const IonTabButton = dynamic(async () => (await import('@ionic/react')).IonTabButton, { ssr: false });
export const IonList = dynamic(async () => (await import('@ionic/react')).IonList, { ssr: false });


//export components
export { default as Graphic } from './Graphic';
export { default as Login } from './Login';
export { default as Logo } from './Logo';
export { default as Meta } from './Meta';
export { default as Navbar } from './Navbar';
export { default as Card } from './Card';
export { default as Input } from './Input';
export { default as Grid } from './Grid';
export { default as Center } from './Center';
export { default as Flex } from './Flex';
export { default as Typography } from './Typography';
export { default as Surface } from './Surface';
