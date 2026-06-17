import localFont from 'next/font/local';
import Nav from './components/Nav';
import './global.css';
import styles from './App.module.css';

// Self-hosted so the build never depends on reaching Google Fonts.
const jakarta = localFont({
  src: './fonts/PlusJakartaSans-latin.woff2',
  weight: '200 800',
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata = {
  title: 'Yiranubari Promise',
  description: 'Yiranubari Maamaa, Full-Stack Developer',

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.variable}>
        <div className={styles.page}>
          <Nav />
          <main>
            {children}
          </main>
          <footer className={styles.footer}>
            © 2026 Yiranubari Maamaa · Full-Stack Developer
          </footer>
        </div>
      </body>
    </html>
  );
}
export const viewport = {
  themeColor: '#050506'
};
