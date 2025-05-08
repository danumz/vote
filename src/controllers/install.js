const { default: axios } = require("axios");

const authorizeApp = (req, res, next) => {
  const { shop, embedded } = req.query;

  if (embedded) {
    return res.status(302).redirect("/view");
  }

  return res
    .status(302)
    .redirect(
      encodeURI(
        `https://${shop}/admin/oauth/authorize?client_id=${process.env.SHOPIFY_CLIENT_ID}&scope=${process.env.SHOPIFY_AUTH_SCOPES}&redirect_uri=${process.env.SHOPIFY_AUTH_CALLBACK_URL}`
      )
    );
};

const installApp = async (req, res, next) => {
  try {
    const { shop, code } = req.query;
    console.log({
      client_id: process.env.SHOPIFY_CLIENT_ID,
      client_secret: process.env.SHOPIFY_CLIENT_SECRET,
      code: code,
    });
    const shopifyOAuthUri = `https://${shop}/admin/oauth/access_token`;
    const check = await axios({
      url: shopifyOAuthUri,
      method: "POST",
      params: {
        client_id: process.env.SHOPIFY_CLIENT_ID,
        client_secret: process.env.SHOPIFY_CLIENT_SECRET,
        code: code,
      },
    });

    return res
      .status(302)
      .redirect(
        `https://admin.shopify.com/store/udggear-retail/apps/udg-equipment-filter`
      );
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
};

module.exports = {
  authorizeApp,
  installApp,
};
