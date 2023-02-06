const QRCode = require("qrcode");

const generateQR = async (url) => {
  try {
    await QRCode.toFile("./QRCode.png", url);

    // to get the image in terminal
    console.log(await QRCode.toString(url, { type: "terminal" }));

    // to get the url
    console.log(await QRCode.toDataURL(url));
  } catch (err) {
    console.log("err", err);
  }
};

generateQR("https://www.navgurukul.org/");
