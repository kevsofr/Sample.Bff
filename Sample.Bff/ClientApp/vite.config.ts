import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), basicSsl()],
    server: {
      cors: true,
      proxy: {
        '^/remote/*': {
          target: env.VITE_ASP_NET_CORE_APP_URL,
          changeOrigin: true,
          secure: false
        },
        '^/bff/.*': {
          target: env.VITE_ASP_NET_CORE_APP_URL,
          changeOrigin: true,
          secure: false
        },
        '/sign-oidc': {
          target: env.VITE_ASP_NET_CORE_APP_URL,
          changeOrigin: true,
          secure: false
        },
        '/signout-callback-oidc': {
          target: env.VITE_ASP_NET_CORE_APP_URL,
          changeOrigin: true,
          secure: false
        },
        '/log': {
          target: env.VITE_ASP_NET_CORE_APP_URL,
          changeOrigin: true,
          secure: false
        }
      }
    }
  };
})
