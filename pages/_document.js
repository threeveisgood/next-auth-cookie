import Document, { Head, Main, NextScript } from "next/document";
import { getUserScript } from "../lib/auth";

export default class MyDocument extends Document {
  render() {
    //if it doesn't work const { user } = this.props.__NEXT_DATA__.props
    const { user = {} } = this.props;

    return (
      <html>
        <Head />
        <body>
          <Main />
          <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} />
          <NextScript />
        </body>
      </html>
    );
  }
}
