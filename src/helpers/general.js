const Shopify = require("shopify-api-node");

function ShopifyConnection() {
  const shopify = new Shopify({
    shopName: process.env.SHOP_NAME, // Ganti dengan nama shopify store Anda
    apiKey: process.env.API_SHOPIFY, // Ganti dengan API Key Anda
    password: process.env.TOKEN_SHOPIFY, // Ganti dengan Access Token Anda (untuk Private App)
  });
  return shopify;
}

module.exports = { ShopifyConnection };
