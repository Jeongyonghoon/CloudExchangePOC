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

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
    
    // 실행하고자 하는 component에 getInitialprops가 있으면 실행하여 props를 받아올 수 있다.
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return {
			pageProps
		};
	}

  render () {
    // Component는 요청한 페이지 ( 예 : get / 요청을 보냈다면)
    // pageProps는 getInitialProps를 통해 내려받은 props

    const { Component, pageProps, router, store } = this.props
    console.log(Component, pageProps, router, store);
    const title = 'Cloud Exchange'
    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta property='og:title' content={title} />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <GlobalStyle />
            <Layout pages={this.props.pages}>
              {/* <Component router={router} {...pageProps} icon={page.icon} primary={page.primary}/> */}
              <Component router={router} {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      </>
    )
  }
}

export default withRedux(createStore)(
  withRouter(MyApp)
)
