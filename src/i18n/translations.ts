export type Lang = "en" | "zh" | "ja";

export const translations = {
  // ── Navigation ──
  nav: {
    home: { en: "HOME", zh: "首頁", ja: "ホーム" },
    stylists: { en: "STYLISTS", zh: "造型師", ja: "スタイリスト" },
    services: { en: "SERVICES", zh: "服務項目", ja: "サービス" },
    portfolio: { en: "PORTFOLIO", zh: "作品集", ja: "ポートフォリオ" },
    joinTeam: { en: "JOIN OUR TEAM", zh: "加入我們", ja: "採用情報" },
    shop: { en: "SHOP", zh: "商店", ja: "ショップ" },
    bookAppointment: { en: "Book Appointment", zh: "預約服務", ja: "ご予約" },
  },

  // ── Hero Slides ──
  hero: {
    slide2: {
      subtitle: {
        en: "Premium Hair Care · Personalized Service",
        zh: "頂級護髮 · 個人化服務",
        ja: "プレミアムヘアケア · パーソナルサービス",
      },
      title: {
        en: "Where Style Meets Sophistication",
        zh: "風格與品味的完美邂逅",
        ja: "スタイルと洗練が出会う場所",
      },
      description: {
        en: "Our skilled stylists merge precision and innovation to create looks that exceed expectations.",
        zh: "我們的專業造型師以精湛技藝與創新理念，打造超越期待的完美造型。",
        ja: "熟練のスタイリストが精密な技術と革新を融合し、期待を超えるスタイルをお届けします。",
      },
    },
    slide3: {
      subtitle: {
        en: "Japanese & Taiwanese Expertise · Richmond, BC",
        zh: "日式與台式專業技藝 · 列治文 BC",
        ja: "日本・台湾の専門技術 · リッチモンド BC",
      },
      title: {
        en: "Bring Out the Best in Your Hair",
        zh: "綻放秀髮最美的光彩",
        ja: "あなたの髪の最高の美しさを引き出す",
      },
      description: {
        en: "Precision meets artistry. Experience personalized styling in a harmonious, relaxing ambience.",
        zh: "精準技術與藝術美感的結合，在和諧舒適的氛圍中，體驗量身訂製的造型服務。",
        ja: "精密な技術とアートの融合。調和のとれた癒しの空間で、パーソナライズされたスタイリングを体験してください。",
      },
    },
    viewServices: { en: "View Services", zh: "查看服務", ja: "サービスを見る" },
  },

  // ── About ──
  about: {
    label: { en: "About", zh: "關於我們", ja: "サロンについて" },
    title: { en: "Sculpting Stylish Solutions", zh: "雕琢時尚的完美方案", ja: "スタイリッシュなソリューションを創造" },
    p1: {
      en: "Welcome to Initial Hair Salon, where Japanese and Taiwanese expertise combine for exceptional styling. Our stylists merge precision and innovation to create personalized experiences that exceed expectations.",
      zh: "歡迎來到 Initial Hair Salon，在這裡日式與台式的頂級造型技藝完美融合。我們的造型師以精湛的技術與創新理念，為您打造超越期待的個性化體驗。",
      ja: "Initial Hair Salon へようこそ。日本と台湾の高い専門技術を融合し、卓越したスタイリングをご提供いたします。精密な技術と革新的な発想で、お客様一人ひとりに合わせた特別な体験をお届けします。",
    },
    p2: {
      en: "Step in and immerse yourself in our salon's harmonious and relaxing ambience. Every visit is crafted to make you feel your very best.",
      zh: "踏入我們的沙龍，沉浸在和諧舒適的氛圍之中。每一次到訪，都是為了讓您感受最美好的自己。",
      ja: "サロンの調和のとれた心地よい空間で、特別なひとときをお過ごしください。ご来店のたびに、最高の美しさを感じていただけるよう心を込めてお迎えいたします。",
    },
  },

  // ── Stylists ──
  stylists: {
    label: { en: "Our Team", zh: "我們的團隊", ja: "チーム紹介" },
    title: { en: "Stylists", zh: "造型師", ja: "スタイリスト" },
  },

  // ── Services ──
  services: {
    label: { en: "What We Offer", zh: "我們的服務", ja: "提供サービス" },
    title: { en: "Services & Pricing", zh: "服務項目與價格", ja: "サービス・料金" },
    priceNote: {
      en: "Prices may vary depending on hair length, thickness, and stylist.",
      zh: "價格可能因髮長、髮量及造型師而有所不同。",
      ja: "料金は髪の長さ、量、担当スタイリストにより異なる場合がございます。",
    },
    categories: {
      cut: {
        title: { en: "Cut", zh: "剪髮", ja: "カット" },
        note: {
          en: "Includes shampoo & blow-dry",
          zh: "含洗髮及吹整",
          ja: "シャンプー＆ブロー込み",
        },
        items: [
          { name: { en: "Men Cut", zh: "男士剪髮", ja: "メンズカット" }, price: "$55 – $80" },
          { name: { en: "Women Cut", zh: "女士剪髮", ja: "レディースカット" }, price: "$60 – $80" },
        ],
      },
      perm: {
        title: { en: "Perm", zh: "燙髮", ja: "パーマ" },
        note: {
          en: "Does not include hair cut, shampoo & blow-dry",
          zh: "不含剪髮、洗髮及吹整",
          ja: "カット・シャンプー＆ブローは含まれません",
        },
        items: [
          { name: { en: "Japanese Perm", zh: "日式燙髮", ja: "ジャパニーズパーマ" }, price: "From $110" },
          { name: { en: "Japanese Straight Perm", zh: "日式離子燙", ja: "縮毛矯正" }, price: "From $250" },
          { name: { en: "Digital Perm", zh: "數位溫塑燙", ja: "デジタルパーマ" }, price: "From $250" },
        ],
      },
      colour: {
        title: { en: "Colour", zh: "染髮", ja: "カラー" },
        note: {
          en: "Does not include shampoo & blow-dry",
          zh: "不含洗髮及吹整",
          ja: "シャンプー＆ブローは含まれません",
        },
        items: [
          { name: { en: "Retouch", zh: "補染", ja: "リタッチ" }, price: "From $95" },
          { name: { en: "Colour", zh: "全頭染", ja: "フルカラー" }, price: "From $95" },
          { name: { en: "Bleach + Colour", zh: "漂染", ja: "ブリーチ＋カラー" }, price: "From $360" },
          { name: { en: "Highlight / Balayage", zh: "挑染 / 巴黎染", ja: "ハイライト / バレイヤージュ" }, price: "From $400" },
        ],
      },
      treatment: {
        title: { en: "Treatment", zh: "護理", ja: "トリートメント" },
        note: {
          en: "Does not include shampoo price",
          zh: "不含洗髮費用",
          ja: "シャンプー料金は含まれません",
        },
        items: [
          { name: { en: "Nakano Treatment", zh: "Nakano 護理", ja: "ナカノトリートメント" }, price: "From $120" },
          { name: { en: "Tokio Treatment", zh: "Tokio 護理", ja: "TOKIOトリートメント" }, price: "From $130" },
          { name: { en: "Scalp Treatment", zh: "頭皮護理", ja: "スカルプトリートメント" }, price: "From $120" },
        ],
      },
      other: {
        title: { en: "Other", zh: "其他", ja: "その他" },
        note: { en: "", zh: "", ja: "" },
        items: [
          { name: { en: "Shampoo & Blow Dry", zh: "洗髮及吹整", ja: "シャンプー＆ブロー" }, price: "From $45" },
        ],
      },
    },
  },

  // ── Policy ──
  policy: {
    title: { en: "Cancellation & Reschedule Policy", zh: "取消與改期政策", ja: "キャンセル・変更ポリシー" },
    p1: {
      en: "Cancellations or reschedules must be made at least <strong>48 hours</strong> prior to the appointment.",
      zh: "取消或改期須於預約時間前 <strong>48 小時</strong> 完成。",
      ja: "キャンセルまたは変更は、ご予約の <strong>48 時間前</strong> までにお願いいたします。",
    },
    p2: {
      en: "Failure to do so will result in a penalty charge of <strong>30%</strong> of the booked service.",
      zh: "未於規定時間內處理將收取預約服務金額 <strong>30%</strong> 的違約費用。",
      ja: "期限内にご連絡がない場合、ご予約サービス料金の <strong>30%</strong> をキャンセル料として申し受けます。",
    },
    p3: {
      en: "Late arrivals exceeding <strong>15 minutes</strong> may require rescheduling and will be considered a policy violation.",
      zh: "遲到超過 <strong>15 分鐘</strong> 可能需要重新預約，並將視為違反政策。",
      ja: "<strong>15 分</strong> 以上の遅刻はご予約の変更が必要となり、ポリシー違反とみなされます。",
    },
    p4: {
      en: "For any changes, cancellations, or queries, please contact us via DM on Instagram or by phone.",
      zh: "如需更改、取消或有任何疑問，請透過 Instagram 私訊或電話與我們聯繫。",
      ja: "変更・キャンセル・その他のお問い合わせは、Instagramのダイレクトメッセージまたはお電話にてご連絡ください。",
    },
    p5: {
      en: "Your credit card information is securely stored and will only be used in the event of no-shows or violations of our cancellation policy.",
      zh: "您的信用卡資訊將被安全保管，僅在未到場或違反取消政策時使用。",
      ja: "お客様のクレジットカード情報は安全に保管され、無断キャンセルまたはポリシー違反の場合にのみ使用されます。",
    },
    p6: {
      en: "Thank you for your understanding and cooperation.",
      zh: "感謝您的理解與配合。",
      ja: "ご理解とご協力をお願い申し上げます。",
    },
  },

  // ── Portfolio ──
  portfolio: {
    label: { en: "Our Work", zh: "精選作品", ja: "作品紹介" },
    title: { en: "Portfolio", zh: "作品集", ja: "ポートフォリオ" },
  },

  // ── Testimonials ──
  testimonials: {
    label: { en: "Client Love", zh: "顧客好評", ja: "お客様の声" },
    title: { en: "What Our Clients Say", zh: "顧客怎麼說", ja: "お客様からの評価" },
  },

  // ── Contact ──
  contact: {
    label: { en: "Visit Us", zh: "蒞臨我們", ja: "アクセス" },
    title: { en: "Get In Touch", zh: "聯繫我們", ja: "お問い合わせ" },
    phone: { en: "Phone", zh: "電話", ja: "電話番号" },
    address: { en: "Address", zh: "地址", ja: "住所" },
    hours: { en: "Hours", zh: "營業時間", ja: "営業時間" },
    hoursValue: {
      en: "Monday – Sunday: 11:00 am – 7:00 pm",
      zh: "週一至週日：上午 11:00 – 下午 7:00",
      ja: "月曜日〜日曜日：11:00〜19:00",
    },
  },

  // ── Join Team ──
  joinTeam: {
    label: { en: "For the Next Wave of Stylists", zh: "給下一世代的造型師", ja: "これからのスタイリストへ" },
    title: { en: "Join Our Team", zh: "加入我們", ja: "チームに参加" },
    description: {
      en: "Initial Salon is where new talent gets seen.\n\nWe're here for stylists who want more — more growth, more creativity, more visibility, and more opportunities to build a name for themselves.\n\nFrom skill development to social media exposure, we give the next generation of hairstylists a platform to grow in the real world of beauty.\n\nWe also welcome Working Holiday / IEC visa holders who want to gain salon experience in Canada while being part of a creative and supportive team.\n\nCreate your style. Build your name. Grow with us.",
      zh: "Initial Salon 是新世代人才嶄露頭角的舞台。\n\n我們為渴望更多的造型師而存在——更多成長、更多創意、更多曝光，以及更多打造個人品牌的機會。\n\n從技術精進到社群媒體曝光，我們為新一代髮型師提供在真實美業世界中成長的平台。\n\n我們也歡迎持有打工度假 / IEC 簽證的夥伴，在加拿大累積沙龍經驗，同時加入一個充滿創意與支持的團隊。\n\n創造你的風格。建立你的名字。與我們一起成長。",
      ja: "これからのスタイリストが、もっと自由に、もっと自分らしく輝ける場所。\n\nInitial Salonは、新しい世代の才能にチャンスとステージを用意しています。\n\n技術を磨くだけでなく、SNS発信やデジタルマーケティングの力を活かして、自分の魅力をもっと多くの人に届ける。\n\nここでは、スタイリストとしての成長も、自分自身のブランドづくりも、どちらも大切にできます。\n\nワーキングホリデー・IECビザの方も歓迎。\n\nカナダで新しい経験を積みながら、自分の可能性を広げてみませんか？\n\n自分のスタイルで、未来をつくる。",
    },
    nameLabel: { en: "Name", zh: "姓名", ja: "お名前" },
    namePlaceholder: { en: "Your name", zh: "您的姓名", ja: "お名前をご入力ください" },
    emailLabel: { en: "Email", zh: "電子信箱", ja: "メールアドレス" },
    emailPlaceholder: { en: "Your email", zh: "您的電子信箱", ja: "メールアドレスをご入力ください" },
    messageLabel: { en: "Message", zh: "訊息", ja: "メッセージ" },
    messagePlaceholder: { en: "Tell us about yourself...", zh: "請簡單介紹自己⋯", ja: "自己紹介をご記入ください..." },
    submit: { en: "Send Application", zh: "送出申請", ja: "応募する" },
  },

  // ── Footer ──
  footer: {
    tagline: {
      en: "Japanese and Taiwanese expertise for exceptional styling in Richmond, BC.",
      zh: "融合日式與台式頂級技藝，為列治文帶來卓越造型體驗。",
      ja: "日本・台湾の専門技術で、リッチモンドに卓越したスタイリングをお届けします。",
    },
    navigation: { en: "NAVIGATION", zh: "網站導覽", ja: "ナビゲーション" },
    quickLinks: { en: "QUICK LINKS", zh: "快速連結", ja: "クイックリンク" },
    contactTitle: { en: "CONTACT", zh: "聯繫方式", ja: "お問い合わせ" },
    shopProducts: { en: "Shop Products", zh: "選購產品", ja: "商品を見る" },
    joinOurTeam: { en: "Join Our Team", zh: "加入我們", ja: "採用情報" },
    hoursShort: {
      en: "Mon – Sun: 11 am – 7 pm",
      zh: "週一至週日：上午 11 時 – 下午 7 時",
      ja: "月〜日：11:00〜19:00",
    },
  },

  // ── Scroll to top ──
  scrollToTop: { en: "Scroll to top", zh: "回到頂部", ja: "トップへ戻る" },
} as const;

export type Translations = typeof translations;
