const { google } = require("googleapis");

const viewRefresh = async (req, res) => {
  return res.render("state-refresh/index", {});
};

const sheets = google.sheets("v4");
const vote = async (req, res) => {
  const creds = {
    type: "service_account",
    project_id: "vigilant-sol-436905-k2",
    private_key_id: "40df5fc1a6d79fffae3944ae5b0a9f789b26c681",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2NwOnaK3fo931\nFtRa5Li7SqQp48EPIknXx3dhmJrmNt2/VJRdfbWw/sMrKLIa5wVM9T2IvFpYSJ+s\ngD54Et33mAJdIIe0+qF+2KW46eHVOMYIN+gtVnEnc89VTjtAFWUZrlR4dmROnu3T\nJSAaYhX0z5AG+n5xzyHkyQhLDcttP0cDvOgGsKjVj3Rg1WIaHtKgU/I8oU9EFn2w\nv2rwy5yd/pVdB0HCqXxq8o6up/ZzpQos12+aJI7h/m1yDHw3tBQ6lM9HUni4JZqh\n0d9nlS2K+xSb3lwVB2JozXg3Nl7/Zu+T4FJeLwDLo0PwJ8ptf1dRAAuUxONCLX9A\nv+lVSFLfAgMBAAECggEAESquXHJJ7Jzv8gGRm3Ka+NeNDylBl18VR+VR7k7woP8g\nSxX5LbRZ5Bqhtoo3UBOIdfn7hHYCU6Ob73uG5yHClGtXewCakxwIZP6c4Qaf28pl\nKyxhN7bszYO6pSshUpCcHXGazF09vAPQcikNlOQSyiVX82BcKKAUGGLcNiikNrQr\nYFckdmzpzUILg4mocN0hVGb9SiuBNZKdSgWxECpIp5KE2TaVxRJ4qDX/8uDaMHiH\nemKM/oPZLzalS8V8VxzboOXTu5nugUuDvl2CdhkjKX7A+3s8mBAERYwKk5B2Z8K9\njGJNnjfpLBY76blwhr8tx5SnqU1bf20BYGCVdNy+KQKBgQD3ix7aP67sMvax4+9n\ndA2JZgJdXYhH5viuRI17suyRyM/iqgT7mr7m7JbCCfpDZ8Vg2U4xmczq2GHlaWgW\nFGoi9I32IMpuCkE1i8uF11hlacRfmKf3F/Oq4UeyCvtOAKDZJkjquSVunjt7VxuI\n41OzaJC8a80VrwIKN/8ImTk2gwKBgQC8cJDrJZt+/OhAc+vvyqsoPlPHKIH+p0yZ\nUOZqOUvKa66h2WJ69wziXQmS3Tog1o0rBdziBat5ut5PdlwOmcPdfhQI3ooqanlk\nzP/xuzVrGrUo/FktjisoHeDY3F+U8hEJvE5j58FiIwlxnMPMOOdGefnWYhL7lDoW\nbgTeWk+jdQKBgQCTQ4RbOj+J7NeuBHfMB9J1xuXpPVdxzwpqQgYZbNwn7lsd8R99\nvxWKs30MensT1owpjZ1jDKhHneq/W/G8EPEDUpGRtvg2dotMm5m8SdwgmMdmR57E\n9M7U/ah1VusiAGWwSYJfgT2vjRq9yZhr2zFULgTM0yTynWaNRbrHFsBemQKBgBz/\nYX2eAuiuuHq6m/MBiAcgWDoMhLyQOBxbs6li+cPDgFMNpbbwb34h/QgpnPlSqtSV\nCWGKp9GKrQ0jVJU2mkpqTWD0BeTzD40wcq5bNaQurvQIqRx2hTOeLWyRtO+xtGeA\nH7wF/N9CLwDZs9OoagaRXJ3d57fpHms3MO6ajSjFAoGBAInXAzfswzJMY9xE56Ib\nmzrxyCokaxYUHbHlDvA3jvPQO+gUuGj6hiOYb9UdlWcS5g7bEqvBL47kGscZCgKq\npvWgkt3N7avHzqZxWDsgMd+bsLAm9hhEpeK/YXFGcoNbBIyw29i8pMdhhoEGJ/lY\ntiHCDUjK2Qp2n/peOiIpddrB\n-----END PRIVATE KEY-----\n",
    client_email:
      "google-sheets-access@vigilant-sol-436905-k2.iam.gserviceaccount.com",
    client_id: "111163802659669017777",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/google-sheets-access%40vigilant-sol-436905-k2.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  };
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: creds,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const range = "Sheet1!A2";
    const client = await auth.getClient();
    const requestParams = {
      spreadsheetId: "1lb89BZAGNTYDs3MfP8HzCerlu_-UiN3qffH0ISer8Ag",
      range,
      valueInputOption: "RAW",
      resource: {
        values: [[req.body.name, req.body.house, req.body.candidate]],
      },
      auth: client,
    };
    const responseSpreeds = await sheets.spreadsheets.values.append(
      requestParams
    );
    console.log(`${responseSpreeds.data.updates.updatedRows} rows appended.`);
    // response(res, true, "Berhasil", values.length, 200);
    res.json({
      data: [req.body.name, req.body.house, req.body.candidate],
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
};
module.exports = {
  viewRefresh,
  vote,
};
