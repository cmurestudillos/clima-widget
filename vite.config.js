import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import commonjs from "vite-plugin-commonjs";

// https://vitejs.dev/config/

export default ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  require('dotenv').config({path: `./.env.${mode}`})
  
  return defineConfig({
    base: process.env.NODE_ENV === 'production' ? './' : '/',
    plugins: [react(), commonjs(),],
    build: {
      outDir: './build'
    },
    define: {
      "process.env": env,
    },
  })
};


