import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import * as styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Hi! We are drawCircle, inc.</h2>
      <ul className={styles.companyInfo}>
        <li data-title="商号"><ruby>drawCircle<rt>ドローサークル</rt>合同会社</ruby></li>
        <li data-title="設立">2019年6月</li>
        <li data-title="所在地">〒113-0033 東京都文京区本郷３−４−３ヒルズ８８４お茶ノ水ビル５Ｆ</li>
        <li data-title="代表者"><ruby>加藤<rt>かとう</rt></ruby>&nbsp;<ruby>明洋<rt>あきひろ</rt></ruby></li>
        <li data-title="代表者プロフィール">1992年生まれ、愛知県出身。大学卒業後ウェブ制作会社を経て、情報科学芸術大学院大学（IAMAS）に進学、メディア表現専攻修了。ブロックチェーンが新しい社会を作る一つの可能性を持っていると考え、それを伝えるための表現としてボードゲーム「<a href="https://trustless.life" target="_blank">TRUSTLESS LIFE</a>」を制作。CREATIVE HACK AWARD 2018 SONY 特別賞を始め各方面からの評価を得る。<a href="https://startbahn.jp/about" target="_blank">スタートバーン株式会社</a>でエンジニアとして従事する傍、個人・周辺パートナーと連携し複数のプロジェクトを進めていくために、2019年drawCircle合同会社を設立。現在に至る。
        <p><a href="https://akihirokato.com/cv">portfolio site</a></p>
        </li>
        <li data-title="主な事業内容">
          <ol>
            <li>コンピュータのソフトウェア及びハードウェアの企画、研究、開発、設計、製造、販売、保守、リース、賃貸及び輸出入並びにこれらに関するコンサルティング業務</li>
            <li>文化、研究、芸術、スポーツ等の国際交流事業の企画、立案及び実施</li>
            <li>広告代理業及び各種の宣伝に関する業務</li>
            <li>前各号に附帯関連する一切の事業</li>
          </ol>
        </li>
        {/* <li data-title="主な取引先">
          <ul>
            <li>株式会社HakbeeLanka</li>
            <li>株式会社GOCCO.</li>
            <li>情報芸術大学院大学（岐阜県）</li>
          </ul>
        </li> */}
        <li data-title="受注実績">
          <ul>
            <li><a href="https://www.iamas.ac.jp/news/entry-creationkobo2019/" target="_blank">2019.07 岐阜クリエーション工房2019 - 「日常をハックする—ブロックチェーンで考えるぼくらの未来」</a></li>
          </ul>
        </li>
      </ul>
      <p className={styles.contactTitle}>Webサイト制作、デザイン、ワークショップのご相談はこちらから</p>
      <a className={styles.contact} href="mailto:info@drawcircle.jp">お問い合わせ</a>
    </section>
  </Layout>
)

export default IndexPage


