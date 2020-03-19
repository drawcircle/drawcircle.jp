import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Index = () => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `var(--color-white)`,
            textDecoration: `none`,
          }}
        />
      </h1>
    </div>
  </header>
)

Index.propTypes = {
  siteTitle: PropTypes.string,
}

Index.defaultProps = {
  siteTitle: ``,
}

export default Index
