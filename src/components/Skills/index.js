import React from 'react'
import { Skills, Wrapper, Item, New } from './styles'

export default () => (
  <Skills>
    <h2>Навыки</h2>
    <Wrapper>
      <Item>
        <img src='/skills/js.svg' alt='javascript'/>
        <span>JavaScript</span>
      </Item>
      <Item>
        <img src='/skills/typescript.svg' alt='typescript'/>
        <span>TypeScript</span>
      </Item>
      <Item>
        <img src='/skills/react.svg' alt='react' style={{ width: 34, height: 28, left: 1, marginTop: -4 }}/>
        <span>React</span>
      </Item>
      <Item>
        <img src='/skills/redux.svg' alt='redux'/>
        <span>Redux</span>
      </Item>
      <Item>
        <img src='/skills/styled-components.png' alt='styled-components'/>
        <span>Styled</span>
      </Item>
      <Item>
        <img src='/skills/webpack.svg' alt='webpack'/>
        <span>Webpack</span>
      </Item>
      <Item>
        <img src='/skills/nodejs.svg' alt='nodejs'/>
        <span>Node.js</span>
      </Item>
      <Item>
        <img src='/skills/mongodb.svg' alt='MongoDB'/>
        <span>MongoDB</span>
      </Item>
      <Item>
        <img src='/skills/docker.svg' alt='docker'/>
        <span>Docker</span>
      </Item>
      <Item>
        <img src='/skills/linux.svg' alt='linux'/>
        <span>Linux</span>
      </Item>
      <Item>
        <img src='/skills/nginx.svg' alt='nginx'/>
        <span>Nginx</span>
      </Item>
      <Item>
        <img src='/skills/flutter.png' alt='flutter'/>
        <span>Flutter</span>
        <New>новое</New>
      </Item>
      <Item>
        <img src='/skills/web-components.svg' alt='Web components'/>
        <span>Web comp...</span>
      </Item>
      <Item>
        <img src='/skills/aws.svg' alt='AWS'/>
        <span>AWS</span>
      </Item>
      <Item>
        <img src='/skills/git.svg' alt='git'/>
        <span>Git</span>
      </Item>
      <Item>
        <img src='/skills/eslint.svg' alt='eslint'/>
        <span>ESLint</span>
      </Item>
      <Item>
        <img src='/skills/jest.svg' alt='jest'/>
        <span>Jest</span>
      </Item>
      <Item>
        <img src='/skills/mysql.svg' alt='mysql'/>
        <span>MySQL</span>
      </Item>
      <Item disabled>
        <img src='/skills/postcss.svg' alt='postcss'/>
        <span>PostCSS</span>
      </Item>
      <Item disabled>
        <img src='/skills/php.svg' alt='php' style={{ width: 30 }}/>
        <span>PHP</span>
      </Item>
    </Wrapper>
  </Skills>
)
