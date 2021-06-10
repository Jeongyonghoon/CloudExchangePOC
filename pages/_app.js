import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import styledNormalize from 'styled-normalize'
import { withRouter } from 'next/router'
import App from 'next/app'
import createStore from 'store/createStore'
import Layout from 'components/Layout'
import theme from 'theme'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import '../src/index.css'


const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`
const muiTheme = createMuiTheme({
  typography : {
    fontFamily : "맑은고딕, Malgun Gothic, dotum, gulim, sans-serif"
  }
})

class MyApp extends App {

  render () {
    // Component는 요청한 페이지 ( 예 : get / 요청을 보냈다면)
    // pageProps는 getInitialProps를 통해 내려받은 props
    const { Component, pageProps, router, store } = this.props
    const title = 'Cloud Exchange'
    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta property='og:title' content={title} />
        </Helmet>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
            <Provider store={store}>
              <GlobalStyle/>
                <Layout pages={this.props.pages}>
                  <Component router={router} {...pageProps} />
                </Layout>
            </Provider>
          </MuiThemeProvider>
        </ThemeProvider>
      </>
    )
  }
}

export default withRedux(createStore)(
  withRouter(MyApp)
)
