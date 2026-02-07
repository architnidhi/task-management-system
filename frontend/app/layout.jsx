import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Task Management System',
  description: 'A full-stack task management application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{ backgroundColor: '#0070f3', color: 'white', padding: '1rem' }}>
          <h1>Task Manager</h1>
        </header>
        {children}
        <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
          <p>© 2024 Task Management System</p>
        </footer>
      </body>
    </html>
  );
}
