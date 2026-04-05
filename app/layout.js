import { Plus_Jakarta_Sans } from 'next/font/google';
import Nav from './components/Nav';
import './global.css';
import styles from './App.module.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] });

export const metadata = {
  title: 'Yiranubari Promise',
  description: 'Yiranubari Promise — Full-Stack Developer',

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <div className={styles.page}>
          <Nav />
          <main>
            {children}
          </main>
          <footer className={styles.footer}>
            © 2025 Yiranubari Promise · Full-Stack Developer
          </footer>
        </div>
      </body>
    </html>
  );
}
export const viewport = {
  themeColor: '#111114'
};
