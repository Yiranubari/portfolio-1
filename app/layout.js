import localFont from 'next/font/local';
import Nav from './components/Nav';
import CursorGlow from './components/CursorGlow';
import './global.css';
import styles from './App.module.css';

const jakarta = localFont({
  src: './fonts/PlusJakartaSans-latin.woff2',
  weight: '200 800',
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata = {
  title: 'Yiranubari Promise',
  description: 'Yiranubari Maamaa, Full-Stack Developer',
  other: {
    google: 'notranslate',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no" data-theme="dark" suppressHydrationWarning>
      <body className={jakarta.variable}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
        <CursorGlow />
        <Nav />
        <div className={styles.page}>
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
