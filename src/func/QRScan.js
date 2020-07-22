export default function QRScan() {
  return new Promise((resolve, reject) => {
    wx.scanCode({
      success: resolve,
      fail: reject,
    });
  });
}
