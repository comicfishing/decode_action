//Mon Apr 28 2025 08:23:47 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function getUrl(_0x2d7af2) {
  var _0x1ad9c8 = new RegExp("(^|&)" + _0x2d7af2 + "=([^&]*)(&|$)");
  var _0x45a67c = window.location.search.substr(1).match(_0x1ad9c8);
  if (_0x45a67c != null) return _0x45a67c[2];
  return null;
}
function getUrlDecode(_0x3264b2) {
  var _0x438377 = Base64.decode(getUrl("nmpa"));
  var _0x59e70f = new RegExp("(^|&)" + _0x3264b2 + "=([^&]*)(&|$)");
  var _0x511814 = _0x438377.match(_0x59e70f);
  if (_0x511814 != null) return _0x511814[2];
  return null;
}
function setCookie(_0x31a103, _0x19c2af, _0xeccfde) {
  if (!_0xeccfde) _0xeccfde = 10000;
  var _0x578f02 = new Date();
  _0x578f02.setTime(_0x578f02.getTime() + _0xeccfde * 24 * 60 * 60 * 1000);
  var _0x25b1d4 = "expires=" + _0x578f02.toGMTString();
  document.cookie = _0x31a103 + "=" + _0x19c2af + "; " + _0x25b1d4;
}
function setCookieAuto(_0xc11d0e, _0x4d3289) {
  document.cookie = _0xc11d0e + "=" + _0x4d3289 + ";path=/";
}
function getCookie(_0x4ff938) {
  var _0x4da56d = _0x4ff938 + "=";
  var _0x511999 = document.cookie.split(";");
  for (var _0x5c82cd = 0; _0x5c82cd < _0x511999.length; _0x5c82cd++) {
    var _0x282514 = _0x511999[_0x5c82cd].trim();
    if (_0x282514.indexOf(_0x4da56d) == 0) {
      return _0x282514.substring(_0x4da56d.length, _0x282514.length);
    }
  }
  return "";
}
function clearCookie(_0x49ff8d) {
  var _0x2d7ada = new Date();
  _0x2d7ada.setTime(_0x2d7ada.getTime() - 1);
  var _0x38d56b = getCookie(_0x49ff8d);
  if (_0x38d56b != null) {
    {
      console.log(document.cookie);
      document.cookie = _0x49ff8d + "=" + _0x38d56b + ";expires=" + _0x2d7ada.toGMTString();
      console.log(document.cookie);
    }
  }
}
function getHashName(_0x3fb761) {
  var _0x527428 = new RegExp("(^|&)" + _0x3fb761 + "=([^&]*)(&|$)");
  var _0x3578fd = window.location.hash.substr(1).match(_0x527428);
  if (_0x3578fd != null) return _0x3578fd[2];
  return null;
}
var attach = {
  "preview": function (_0x2504e5) {
    if ("image" == this.getFileType(_0x2504e5)) {
      this.urlShow = true;
    } else if ("pdf" == this.getFileType(_0x2504e5)) {
      {
        var _0x1a4af = location.href.toString();
        if (_0x1a4af.indexOf("custom-html") > 0) {
          window.open("../../preview-pdf.html?url=" + _0x2504e5);
        } else {
          window.open("./preview-pdf.html?url=" + _0x2504e5);
        }
        return false;
      }
    } else {
      window.open(_0x2504e5);
      return false;
    }
  },
  "download": function (_0x319138) {
    var _0x5d1efd = document.createElement("a");
    var _0x27b82e = _0x319138;
    _0x5d1efd.download = _0x27b82e;
    _0x5d1efd.style.display = "none";
    _0x5d1efd.href = _0x27b82e;
    document.body.appendChild(_0x5d1efd);
    _0x5d1efd.click();
    document.body.removeChild(_0x5d1efd);
  },
  "getFileType": function (_0x522a18) {
    var _0x20d1a8 = "";
    var _0x48dd44 = "";
    try {
      var _0x3ebed8 = _0x522a18.split(".");
      _0x20d1a8 = _0x3ebed8[_0x3ebed8.length - 1];
    } catch (_0x595e6e) {
      _0x20d1a8 = "";
    }
    if (!_0x20d1a8) {
      return false;
    }
    _0x20d1a8 = _0x20d1a8.toLocaleLowerCase();
    var _0x4e8be6 = ["png", "jpg", "jpeg", "bmp", "gif"];
    _0x48dd44 = _0x4e8be6.find(function (_0x10cb32) {
      return _0x10cb32 === _0x20d1a8;
    });
    if (_0x48dd44) {
      return "image";
    }
    var _0x5ea0f8 = ["pdf"];
    _0x48dd44 = _0x5ea0f8.find(function (_0x205830) {
      {
        return _0x205830 === _0x20d1a8;
      }
    });
    if (_0x48dd44) {
      {
        return "pdf";
      }
    }
    return "other";
  }
};
_0xods = "jsjiami.com.v6";