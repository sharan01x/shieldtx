import App from './App'
import Vault from './Vault'
import Roadmap from './Roadmap'

export default function Root() {
  const path = window.location.pathname
  const Page =
    path === '/roadmap' || path.startsWith('/roadmap/')
      ? Roadmap
      : path === '/vault' || path.startsWith('/vault/')
        ? Vault
        : App
  return <Page />
}

