/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Container } from '@theme-ui/components'
import { Link } from 'gatsby'
import { Global } from '@emotion/core'

import SEO from './seo'

export default ({ children, _frontmatter: { title } = {} }) => (
  <Styled.root>
    <SEO title={title} />
    <Global
      styles={{
        img: {
          maxWidth: '100%'
        }
      }}
    />
    <Container as="main" mb={[3, 4, 5]}>
      <Link to="/">
        <img
          src="https://avatars.githubusercontent.com/u/84823798?s=200&v=4"
          alt="Smaller Studios"
          width="80"
          style={{
            marginTop: 128,
            marginLeft: -5,
            marginBottom: 8
          }}
        />
      </Link>
      {children}
    </Container>
  </Styled.root>
)
