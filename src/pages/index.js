import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
        <li data-title="代表者プロフィール">1992年生まれ、愛知県出身。大学卒業後ウェブ制作会社を経て、情報科学芸術大学院大学（IAMAS）に進学、メディア表現専攻修了。ブロックチェーンが新しい社会を作る一つの可能性を持っていると考え、それを伝えるための表現としてボードゲーム「<a href="https://trustless.life" target="_blank">TRUSTLESS LIFE</a>」を制作。CREATIVE HACK AWARD 2018 SONY 特別賞を始め各方面からの評価を得る。</li>
        <li data-title="代表者受賞歴">
          <ul>
            <li>WIRED CREATIVE HACK AWARD 2016 ファイナリスト</li>
            <li>北九州デジタルクリエイターコンテスト2018 審査員賞</li>
            <li>CREATIVE HACK AWARD 2018 SONY特別賞</li>
            <li>International Students Creative Award 2018 デジタルコンテンツ部門 優秀賞</li>
            <li>第24回 学生CGコンテスト アート部門&エンターテイメント部門 ファイナリスト</li>
            <li>第24回 学生CGコンテスト 未来館賞&Media Ambition Tokyo賞</li>
            <li>Youfab Global Creative Award 2018 ファイナリスト(ライオン特別賞)</li>
          </ul>
        </li>
        <li data-title="主な事業内容">
          <ol>
            <li>コンピュータのソフトウェア及びハードウェアの企画、研究、開発、設計、製造、販売、保守、リース、賃貸及び輸出入並びにこれらに関するコンサルティング業務</li>
            <li>文化、研究、芸術、スポーツ等の国際交流事業の企画、立案及び実施</li>
            <li>広告代理業及び各種の宣伝に関する業務</li>
            <li>前各号に附帯関連する一切の事業</li>
          </ol>
        </li>
        <li data-title="主な取引先">
          <ul>
            <li><a href="http://hblk.co.jp" target="_blank">株式会社HakbeeLanka</a>: コーポレートウェブサイト、採用サイトの実装などを担当。ウェブサービスの開発にも寄与。</li>
            <li><a href="https://gocco.co.jp/" target="_blank">株式会社GOCCO.</a>: 店舗用のウェブアプリケーション開発、大手運搬会社業務システムの設計・開発に寄与。</li>
            <li><a href="https://iamas.ac.jp">情報芸術大学院大学（岐阜県）</a>: 高校生を対象とした、IoTや最新技術を学ぶワークショップを企画・実施予定。詳細は受注実績をご覧ください。</li>
          </ul>
        </li>
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


