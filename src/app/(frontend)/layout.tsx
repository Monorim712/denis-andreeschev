import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Адвокат по семейным делам в Воронеже — Андреещев Денис Валерьевич',
    template: '%s | Адвокат Андреещев',
  },
  description: 'Семейный адвокат в Воронеже. Развод, алименты, раздел имущества, споры о детях. Бесплатная первичная консультация. Опыт 10+ лет.',
  keywords: 'адвокат воронеж, семейный адвокат, развод воронеж, алименты, раздел имущества, адвокат по семейным делам',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Адвокат Андреещев Денис Валерьевич',
  },
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script id="yandex-metrika" strategy="afterInteractive">{`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=108580980','ym');
          ym(108580980,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
        `}</Script>
        <noscript><div><img src="https://mc.yandex.ru/watch/108580980" style={{position:'absolute',left:'-9999px'}} alt="" /></div></noscript>
        {children}
      </body>
    </html>
  )
}
