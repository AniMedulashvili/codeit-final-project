import styles from './page.module.css'

export default function TermsPage() {
  return (
    <main style={{ padding: "2rem", Width: '1000px', margin: "0 auto", marginTop: '60px' }}>
      <h1 className={styles.header}>მომსახურების პირობები / Conditions of Use</h1>
      
      <p className={styles.p}>
        Ani's Online Market-ის ვებსაიტზე სტუმრობით თქვენ ეთანხმებით შემდეგ პირობებს:
        <br />
        By visiting Ani's Online Market, you agree to the following terms:
      </p>

      <h2>1. ანგარიშის შექმნა / Account Creation</h2>
      <p>
        საიტზე შესყიდვისთვის საჭიროა ვალიდური ანგარიში. მომხმარებელი პასუხისმგებელია ანგარიშის უსაფრთხოებაზე.
        <br />
        A valid account is required for purchases. The user is responsible for the security of their account.
      </p>

      <h2>2. პროდუქციის შეძენა / Product Purchase</h2>
      <p>
        შეკვეთის გაფორმების შემდეგ მომხმარებელი ვალდებულია გადაიხადოს სრული თანხა და მიუთითოს სწორი მიწოდების ინფორმაცია.
        <br />
        After placing an order, the user must pay the full amount and provide correct delivery information.
      </p>

      <h2>3. პროდუქტის დაბრუნება / Product return</h2>
      <p>
        პროდუქციის დაბრუნება შესაძლებელია 14 დღის ვადაში, თუ პროდუქტი დაუზიანებელია და შენახულია შესაბამისი ქვითარი.
        <br />
        Products can be returned within 14 days if they are undamaged and accompanied by the appropriate receipt.
      </p>

      <h2>4. კონფიდენციალურობა / Privacy</h2>
      <p>
        თქვენი მონაცემები დაცულია და გამოიყენება მხოლოდ შეკვეთების დამუშავებისთვის. დეტალები იხილეთ ჩვენს 
        <a href="/privacy">კონფიდენციალურობის პოლიტიკაში / Privacy Policy</a>.
      </p>

      <h2>5. საიტის გამოყენება / Site Usage</h2>
      <p>
        აკრძალულია ვებსაიტის არასამთავრობო მიზნებისთვის გამოყენება ან მესამე პირებისთვის მავნე კოდის გავრცელება.
        <br />
        It is prohibited to use the site for unauthorized purposes or to distribute harmful code to third parties.
      </p>

      <h2>6. ცვლილებები პირობებში / Changes to the Terms</h2>
      <p>
        კომპანია იტოვებს უფლებას ნებისმიერ დროს შეცვალოს მომსახურების პირობები. ცვლილებები გამოქვეყნდება ამ გვერდზე.
        <br />
        The company reserves the right to change the terms at any time. Changes will be published on this page.
      </p>

      <p style={{ marginTop: "2rem" }}>
        ბოლო განახლება: მაისი, 2025. / Last updated: May 2025.
      </p>
    </main>
  );
}
