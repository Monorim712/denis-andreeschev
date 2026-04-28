import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { MetrikaGoals } from './components/MetrikaGoals'
import './fonts.css'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Адвокат по семейным делам в Воронеже — Андреещев Денис Валерьевич',
    template: '%s | Адвокат Андреещев',
  },
  description: 'Семейный адвокат в Воронеже. Развод, алименты, раздел имущества, споры о детях. Бесплатная первичная консультация. Опыт 15+ лет.',
  keywords: 'адвокат воронеж, семейный адвокат, развод воронеж, алименты, раздел имущества, адвокат по семейным делам, адвокат андреещев, юрист воронеж',
  metadataBase: new URL('https://denis-andreeschev.ru'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Адвокат Андреещев Денис Валерьевич',
    title: 'Адвокат по семейным делам в Воронеже — Андреещев Денис Валерьевич',
    description: 'Семейный адвокат в Воронеже. Развод, алименты, раздел имущества, споры о детях. Опыт 15+ лет.',
    url: 'https://denis-andreeschev.ru',
    images: [{ url: '/images/photos/hero-main.webp', width: 1200, height: 630, alt: 'Адвокат Андреещев Денис Валерьевич' }],
  },
  verification: {
    yandex: '1ca873674a09ea28',
  },
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <style dangerouslySetInnerHTML={{ __html: '@media(min-width:1024px){.desktop-hero-wrap{display:flex!important}}' }} />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/photos/hero-main-mobile.webp"
          media="(max-width: 1023px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/photos/hero-main.webp"
          media="(min-width: 1024px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/nunito-cyrillic.woff2"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <Script id="material-symbols" strategy="lazyOnload">{`
          var cb=function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=account_balance_wallet,block,call,check_circle,close,description,family_restroom,gavel,group_add,handshake,home,home_work,hourglass_top,location_on,mail,menu,partner_exchange,payments,public,real_estate_agent,schedule,shield,shield_person,target,timer_off,workspace_premium&display=swap';l.media='print';l.onload=function(){l.media="all"};document.head.appendChild(l)};if('requestIdleCallback' in window){requestIdleCallback(cb)}else{setTimeout(cb,200)};
        `}</Script>
        <Script id="yandex-metrika" strategy="lazyOnload">{`
          var _ym_loaded=false;function _ym_init(){if(_ym_loaded)return;_ym_loaded=true;
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=108580980','ym');
            ym(108580980,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
          }
          document.addEventListener('scroll',_ym_init,{once:true,passive:true});
          document.addEventListener('click',_ym_init,{once:true});
          document.addEventListener('touchstart',_ym_init,{once:true,passive:true});
          document.addEventListener('keydown',_ym_init,{once:true});
          setTimeout(_ym_init,15000);
        `}</Script>
        <noscript><div><img src="https://mc.yandex.ru/watch/108580980" style={{position:'absolute',left:'-9999px'}} alt="" /></div></noscript>
        <MetrikaGoals />
        <main>{children}</main>
      </body>
    </html>
  )
}
