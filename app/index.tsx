import { Redirect } from 'expo-router'

export default function Index() {
  const isLogado = false
  return <Redirect href={isLogado ? '/(app)/home' : '/login'} />
}
