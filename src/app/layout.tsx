/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '../styles/globals.css';
import Image from 'next/image';
import logo from '../../public/assets/logo.svg';
import navHome from '../../public/assets/icon-nav-home.svg';
import navMovies from '../../public/assets/icon-nav-movies.svg';
import navTvSeries from '../../public/assets/icon-nav-tv-series.svg';
import navBookmark from '../../public/assets/icon-nav-bookmark.svg';
import avatar from '../../public/assets/image-avatar.png';
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='grid min-h-screen grid-cols-1 bg-darkBlue'>
          <div className='h-14 bg-semiDarkBlue'>
            <div className='flex h-full items-center justify-between px-4'>
              <Image src={logo} width={25} alt='logo' />
              <div className='flex items-center gap-6'>
                <Image src={navHome} width={16} alt='Nav Home' />
                <Image src={navMovies} width={16} alt='Nav Movies' />
                <Image src={navTvSeries} width={16} alt='Nav Tv Series' />
                <Image src={navBookmark} width={16} alt='Nav Bookmark' />
              </div>
              <Image
                src={avatar}
                width={28}
                alt='avatar'
                className=' rounded-full border-[1px] border-white'
              />
            </div>
          </div>
          <div className='row-span-3'>{children}</div>
        </div>
      </body>
    </html>
  );
}
