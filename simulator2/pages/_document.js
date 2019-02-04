import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {

  render() {
    return (
      <html>
        <Head>
        </Head>
        <body className="custom_class">
          <Main />
          <script src="https://cdn.plot.ly/plotly-latest.min.js" />
          <NextScript />
        </body>
      </html>
    )
  }
}