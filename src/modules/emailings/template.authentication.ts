// import config from "../../config/config"
// import randomkeyMaker from "../../utils/random.key.maker"

export const authentication_mail = (validationKey: string): string => {
  return `<html>
  <head>
    <style>
      @media only screen and (max-width: 600px) {
        .main {
          width: 320px !important;
        }
        .top-image {
          width: 20px !important;
        }
        .inside-footer {
          width: 320px !important;
        }
        table[class="contenttable"] {
          width: 320px !important;
          text-align: left !important;
        }
        td[class="force-col"] {
          display: block !important;
        }
        td[class="rm-col"] {
          display: none !important;
        }
        .mt {
          margin-top: 15px !important;
        }
        *[class].width300 {
          width: 255px !important;
        }
        *[class].block {
          display: block !important;
        }
        *[class].blockcol {
          display: none !important;
        }
        .emailButton {
          width: 100% !important;
        }
        .emailButton a {
          display: block !important;
          font-size: 18px !important;
        }
      }
      .coupon {
        border: 5px dotted #bbb;
        width: 80%;
        border-radius: 15px;
        margin: 0 auto;
        max-width: 600px;
      }
      .container {
        padding: 2px 16px;
        background-color: #f1f1f1;
      }
      .promo {
        background: #ccc;
        padding: 3px;
      }
  
      .expire {
        color: red;
      }
    </style>
  </head>
  <body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">
    <table
      class="main contenttable"
      align="center"
      style="
        font-weight: normal;
        border-collapse: collapse;
        border: 0;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
        font-family: Arial, sans-serif;
        color: #555559;
        background-color: white;
        font-size: 16px;
        line-height: 26px;
        width: 600px;
      "
    >
      <tr>
        <td
          valign="top"
          class="side title"
          style="
            border-collapse: collapse;
            border: 0;
            margin: 0;
            padding: 20px;
            -webkit-text-size-adjust: none;
            color: #555559;
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 26px;
            vertical-align: top;
            background-color: white;
            border-top: none;
          "
        >
          <table
            style="
              font-weight: normal;
              border-collapse: collapse;
              border: 0;
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
            "
          >
            <tr style="display: none !important">
              <td
                class="head-title"
                style="
                  border-collapse: collapse;
                  border: 0;
                  margin: 0;
                  padding: 0;
                  -webkit-text-size-adjust: none;
                  color: #555559;
                  font-family: Arial, sans-serif;
                  font-size: 28px;
                  line-height: 34px;
                  font-weight: bold;
                  text-align: center;
                "
              ></td>
            </tr>
            <tr style="display: none !important">
              <td
                class="sub-title"
                style="
                  border-collapse: collapse;
                  border: 0;
                  margin: 0;
                  padding: 0;
                  padding-top: 5px;
                  -webkit-text-size-adjust: none;
                  color: #555559;
                  font-family: Arial, sans-serif;
                  font-size: 18px;
                  line-height: 29px;
                  font-weight: bold;
                  text-align: center;
                "
              >
                <div class="mktEditable" id="intro_title">
                  { validate your account to access }
                </div>
              </td>
            </tr>
  
            <tr>
              <td
                class="top-padding"
                style="
                  border-collapse: collapse;
                  border: 0;
                  margin: 0;
                  padding: 15px 0;
                  -webkit-text-size-adjust: none;
                  color: #555559;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 21px;
                "
              >
                <hr size="1" color="#eeeff0" />
              </td>
            </tr>
            <tr>
              <td
                class="text"
                style="
                  border-collapse: collapse;
                  border: 0;
                  margin: 0;
                  padding: 0;
                  -webkit-text-size-adjust: none;
                  color: #555559;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 26px;
                "
              >
                <div class="mktEditable" id="main_text">
                  <br /><br />
                  <span style="font-style: italic">
                    <small>
                      <strong>
                        “ Welcome to our Company, You will be part of a Great
                        Community of Programmers ”
                      </strong>
                    </small>
                  </span>
                </div>
                <tr>
                  <td
                    class="top-padding"
                    style="
                      border-collapse: collapse;
                      border: 0;
                      margin: 0;
                      padding: 5px;
                      -webkit-text-size-adjust: none;
                      color: #555559;
                      font-family: Arial, sans-serif;
                      font-size: 16px;
                      line-height: 26px;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    class="grey-block"
                    style="
                      border-collapse: collapse;
                      border: 0;
                      margin: 0;
                      -webkit-text-size-adjust: none;
                      color: #555559;
                      font-family: Arial, sans-serif;
                      font-size: 16px;
                      line-height: 26px;
                      background-color: #fff;
                      text-align: center;
                    "
                  >
                    <div class="mktEditable" id="cta">
                      <a
                        style="
                          color: #000067;
                          background-color: #fce8ed;
                          border: 10px solid #fce8ed;
                          border-radius: 3px;
                          text-decoration: none;
                        "
                      >
                        ${validationKey}
                      </a>
                    </div>
                  </td>
                </tr>
              </td>
            </tr>
            <tr>
              <td
                style="
                  border-collapse: collapse;
                  border: 0;
                  margin: 0;
                  padding: 0;
                  -webkit-text-size-adjust: none;
                  color: #555559;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 24px;
                "
              >
                &nbsp;<br />
              </td>
            </tr>
            <tr>
              <td
                class="text"
                style="
                  border-collapse: collapse;
                  border: 0;
                  margin: 0;
                  padding: 0;
                  -webkit-text-size-adjust: none;
                  color: #555559;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 24px;
                "
              >
                <div
                  class="mktEditable"
                  id="download_button"
                  style="text-align: center"
                ></div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td
          style="
            border-collapse: collapse;
            border: 0;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            color: #555559;
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 24px;
            padding: 20px;
          "
        >
          <div class="mktEditable" id="cta_try">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="mobile"
              style="
                font-weight: normal;
                border-collapse: collapse;
                border: 0;
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
              "
            >
              <tr>
                <td
                  class="rm-col"
                  style="
                    border-collapse: collapse;
                    border: 0;
                    margin: 0;
                    padding: 0;
                    -webkit-text-size-adjust: none;
                    color: #555559;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    padding-right: 15px;
                  "
                ></td>
                <td
                  class="force-col"
                  valign="top"
                  style="
                    border-collapse: collapse;
                    border: 0;
                    margin: 0;
                    padding: 0;
                    -webkit-text-size-adjust: none;
                    color: #555559;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                  "
                >
                  <table
                    class="mb mt"
                    style="
                      font-weight: normal;
                      border-collapse: collapse;
                      border: 0;
                      margin: 0;
                      padding: 0;
                      font-family: Arial, sans-serif;
                      margin-bottom: 15px;
                      margin-top: 0;
                    "
                  >
                    <tr>
                      <td
                        class="grey-block"
                        style="
                          border-collapse: collapse;
                          border: 0;
                          margin: 0;
                          padding: 18px;
                          -webkit-text-size-adjust: none;
                          color: #555559;
                          font-family: Arial, sans-serif;
                          font-size: 16px;
                          line-height: 24px;
                          background-color: #fff;
                          border-top: 3px solid #00a5b5;
                          border-left: 1px solid #e6e6e6;
                          border-right: 1px solid #e6e6e6;
                          border-bottom: 1px solid #e6e6e6;
                          width: 250px;
                          text-align: center;
                        "
                      >
                        <span
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 24px;
                            line-height: 39px;
                            border-collapse: collapse;
                            border: 0;
                            margin: 0;
                            padding: 0;
                            -webkit-text-size-adjust: none;
                            color: #555559;
                            text-align: center;
                            font-weight: bold;
                          "
                        >
                          Need Help?
                        </span>
                        <br />
                        My Company team is here to support you. Visit our Help
                        Center.<br /><br />
  
                        <a
                          style="
                            color: #ffffff;
                            background-color: #00a5b5;
                            border-top: 10px solid #00a5b5;
                            border-bottom: 10px solid #00a5b5;
                            border-left: 20px solid #00a5b5;
                            border-right: 20px solid #00a5b5;
                            border-radius: 3px;
                            text-decoration: none;
                          "
                          href="http://mycompany.com/contact.php"
                        >
                          Contact Us
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
      <tr bgcolor="#fff" style="border-top: 4px solid #00a5b5">
        <td
          valign="top"
          class="footer"
          style="
            border-collapse: collapse;
            border: 0;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            color: #555559;
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 26px;
            background: #fff;
            text-align: center;
          "
        >
          <table
            style="
              font-weight: normal;
              border-collapse: collapse;
              border: 0;
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
            "
          >
            <tr>
              <td
                class="inside-footer"
                align="center"
                valign="middle"
                style="
                  border-collapse: collapse;
                  border: 0;
                  margin: 0;
                  padding: 20px;
                  -webkit-text-size-adjust: none;
                  color: #555559;
                  font-family: Arial, sans-serif;
                  font-size: 12px;
                  line-height: 16px;
                  vertical-align: middle;
                  text-align: center;
                  width: 580px;
                "
              >
                <div id="address" class="mktEditable">
                  <b>
                    Web Development Consultant
                    <br />
                    Tech Support : 24/7/365 </b
                  ><br />
                  <a style="color: #00a5b5" href="https://mycompany.com">
                    Visit our website
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`
}