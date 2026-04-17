export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Адвокат Андреещев Денис Валерьевич. Все права защищены.
        </div>
        <ul className="footer-links">
          <li><a href="tel:+79204130096">8 (920) 413-00-96</a></li>
          <li><a href="mailto:denis.andreeschev2015@yandex.ru">Email</a></li>
        </ul>
      </div>
    </footer>
  )
}
