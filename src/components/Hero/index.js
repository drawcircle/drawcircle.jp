import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Typist from 'react-typist';
import * as styles from "./index.module.css"

const typistOption = {
  avgTypingDelay: 100,
  startDelay: 800,
  cursor: {
    show: false
  }
}

const Index = () => {
  const [count, setCount] = React.useState(0);
  const [select, setSelect] = React.useState(0);
  React.useEffect(() => {
    setCount(1)
  }, [count])

  return (
    <div className={styles.hero}>
      <i className={styles.circle} data-circle="1">◎</i>
      <i className={styles.circle} data-circle="2">◎</i>
      <i className={styles.circle} data-circle="3">◎</i>
      <h1 className={styles.drawCircle}>
        <span className={styles.styledTypist}>
          {count ? (
            <Typist {...typistOption} onTypingDone={() => setTimeout(()=>{
              setCount(0)
            }, 1000)}>
              <span>We are</span>
              <Typist.Backspace count={6} delay={1200} />
              <span>WORKSHOP</span>
              <Typist.Backspace count={8} delay={1200} />
              <span>DESIGN</span>
              <Typist.Backspace count={6} delay={1200} />
              <span>APPLICATION</span>
              <Typist.Backspace count={11} delay={1200} />
            </Typist>
          ) : (
            ""
          )}
        </span>
        .drawCircle</h1>
    </div>
  )
}

Index.propTypes = {
  siteTitle: PropTypes.string,
}

Index.defaultProps = {
  siteTitle: ``,
}

export default Index
