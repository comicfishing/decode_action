//Fri Apr 25 2025 00:36:02 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var appSecret = "nmpasecret2020";
function getLoginToken() {
  var _0x435b34 = getUrl("token") || getCookie("token");
  if (_0x435b34) {
    return _0x435b34;
  } else {
    return false;
  }
}
if (!Object.keys) {
  Object.keys = function () {
    var _0x5c943a = function () {
      {
        var _0x2d8720 = true;
        return function (_0x9beafe, _0x55f252) {
          {
            var _0x558a81 = _0x2d8720 ? function () {
              {
                if (_0x55f252) {
                  var _0x414d21 = _0x55f252.apply(_0x9beafe, arguments);
                  _0x55f252 = null;
                  return _0x414d21;
                }
              }
            } : function () {};
            _0x2d8720 = false;
            return _0x558a81;
          }
        };
      }
    }();
    (function () {
      _0x5c943a(this, function () {
        var _0x5b49b4 = new RegExp("function *\\( *\\)");
        var _0x15e67c = new RegExp("\\+\\+ *(?:(?:[a-z0-9A-Z_]){1,8}|(?:\\b|\\d)[a-z0-9_]{1,8}(?:\\b|\\d))", "i");
        var _0x468ce4 = _0x29a776("init");
        if (!_0x5b49b4.test(_0x468ce4 + "chain") || !_0x15e67c.test(_0x468ce4 + "input")) {
          _0x468ce4("0");
        } else {
          {
            _0x29a776();
          }
        }
      })();
    })();
    var _0x3edb69 = function () {
      var _0x4c104d = true;
      return function (_0x5838fe, _0x256b23) {
        var _0x3108b7 = _0x4c104d ? function () {
          {
            if (_0x256b23) {
              {
                var _0x4994d8 = _0x256b23.apply(_0x5838fe, arguments);
                _0x256b23 = null;
                return _0x4994d8;
              }
            }
          }
        } : function () {};
        _0x4c104d = false;
        return _0x3108b7;
      };
    }();
    var _0x18bb33 = _0x3edb69(this, function () {
      var _0x3f0387 = function () {};
      var _0x5ebaef = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      if (!_0x5ebaef.console) {
        _0x5ebaef.console = function (_0x3f0387) {
          {
            var _0x45307e = {};
            _0x45307e.log = _0x3f0387;
            _0x45307e.warn = _0x3f0387;
            _0x45307e.info = _0x3f0387;
            _0x45307e.error = _0x3f0387;
            _0x45307e.exception = _0x3f0387;
            _0x45307e.trace = _0x3f0387;
            return _0x45307e;
          }
        }(_0x3f0387);
      } else {
        {
          _0x5ebaef.console.log = _0x3f0387;
          _0x5ebaef.console.warn = _0x3f0387;
          _0x5ebaef.console.info = _0x3f0387;
          _0x5ebaef.console.error = _0x3f0387;
          _0x5ebaef.console.exception = _0x3f0387;
          _0x5ebaef.console.trace = _0x3f0387;
        }
      }
    });
    _0x18bb33();
    var _0x4eea42 = Object.prototype.hasOwnProperty,
      _0x1814d9 = !{
        "toString": null
      }.propertyIsEnumerable("toString"),
      _0xe68fee = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
      _0x44c401 = _0xe68fee.length;
    return function (_0x5a5fd2) {
      {
        if (typeof _0x5a5fd2 !== "object" && typeof _0x5a5fd2 !== "function" || _0x5a5fd2 === null) throw new TypeError("Object.keys called on non-object");
        var _0x298d66 = [];
        for (var _0x4629d2 in _0x5a5fd2) {
          if (_0x4eea42.call(_0x5a5fd2, _0x4629d2)) _0x298d66.push(_0x4629d2);
        }
        if (_0x1814d9) {
          for (var _0x5c8e87 = 0; _0x5c8e87 < _0x44c401; _0x5c8e87++) {
            {
              if (_0x4eea42.call(_0x5a5fd2, _0xe68fee[_0x5c8e87])) _0x298d66.push(_0xe68fee[_0x5c8e87]);
            }
          }
        }
        return _0x298d66;
      }
    };
  }();
}
function deepCopy(_0x68ded1) {
  var _0x107ca6 = [];
  function _0x1278f6(_0x68ded1) {
    if (typeof _0x68ded1 !== "object" || !_0x68ded1) {
      return _0x68ded1;
    }
    for (var _0xbba1e5 = 0; _0xbba1e5 < _0x107ca6.length; _0xbba1e5++) {
      if (_0x107ca6[_0xbba1e5].target === _0x68ded1) {
        return _0x107ca6[_0xbba1e5].copyTarget;
      }
    }
    var _0x215196 = {};
    if (Array.isArray(_0x68ded1)) {
      _0x215196 = [];
    }
    _0x107ca6.push({
      "target": _0x68ded1,
      "copyTarget": _0x215196
    });
    for (var _0xbba1e5 = 0; _0xbba1e5 < Object.keys(_0x68ded1).length; _0xbba1e5++) {
      {
        var _0x53abe7 = _0xbba1e5;
        if (_0x215196[_0x53abe7]) {
          return;
        }
        _0x215196[_0x53abe7] = _0x1278f6(_0x68ded1[_0x53abe7]);
      }
    }
    return _0x215196;
  }
  return _0x1278f6(_0x68ded1);
}
window.setInterval(function () {
  var _0x1bfb50 = "jsjiam";
  if (typeof _0xodE == "undefined" || _0xodE != _0x1bfb50 + "i.com.v" + _0x1bfb50.length) {
    {
      var _0x43f0d0 = [];
      while (_0x43f0d0.length > -1) {
        _0x43f0d0.push(_0x43f0d0.length ^ 2);
      }
    }
  }
  _0x29a776();
}, 2000);
function getSign(_0x3ba599) {
  var _0x34433c = {};
  if (_0x34433c.crogy(typeof _0x3ba599, _0x34433c.bvFbX)) {
    if (_0x34433c.fZwQU !== _0x34433c.TMQnW) {
      return _0x34433c.AAbfG(paramsStrSort, _0x3ba599);
    } else {
      var _0x3f4695 = {
        "ZKsUu": function (_0x4745d9, _0x3f56d7) {
          return _0x34433c.DiNBt(_0x4745d9, _0x3f56d7);
        },
        "iovEr": "Function(arguments[0]+\""
      };
      return function (_0x18fc32) {
        return Function(_0x3f4695.ZKsUu(_0x3f4695.ZKsUu(_0x3f4695.iovEr, _0x18fc32), "\")()"));
      }(a);
    }
  } else if (_0x34433c.uxHjR(typeof _0x3ba599, "object")) {
    if (_0x34433c.WiaVR(_0x34433c.EsrJF, _0x34433c.BXxRd)) {
      var _0x3ca47e = {
        "FHdEe": function (_0xcb1982, _0x45b09c) {
          return _0xcb1982(_0x45b09c);
        },
        "cYlcl": function (_0x49299d, _0x82ff2b) {
          return _0x34433c.DiNBt(_0x49299d, _0x82ff2b);
        },
        "xFwwy": _0x34433c.RZNwE
      };
      (function (_0x2badf0) {
        var _0x283528 = {
          "tQQPe": function (_0x52deeb, _0x1eb474) {
            return _0x3ca47e.FHdEe(_0x52deeb, _0x1eb474);
          },
          "yGMBV": function (_0x35fcc6, _0x3818c9) {
            return _0x3ca47e.cYlcl(_0x35fcc6, _0x3818c9);
          },
          "bBAxZ": _0x3ca47e.xFwwy,
          "DCJbf": "\")()"
        };
        return function (_0x2badf0) {
          return _0x283528.tQQPe(Function, _0x283528.yGMBV(_0x283528.bBAxZ + _0x2badf0, _0x283528.DCJbf));
        }(_0x2badf0);
      })(_0x34433c.EzTqM)("de");
    } else {
      var _0x992603 = [];
      for (var _0x25b3a5 in _0x3ba599) {
        if (_0x34433c.xyegC(_0x3ba599[_0x25b3a5], "") && _0x34433c.xyegC(_0x3ba599[_0x25b3a5], undefined) && _0x3ba599[_0x25b3a5] != null) {
          _0x992603.push(_0x34433c.DiNBt(_0x34433c.JLJUE(_0x25b3a5, "="), _0x3ba599[_0x25b3a5]));
        }
      }
      return _0x34433c.uRyoK(paramsStrSort, _0x992603.join("&"));
    }
  }
}
function paramsStrSort(_0x4a951a, _0x38ad25, _0x352437) {
  var _0x365ffa = _0x4a951a;
  var _0x2f0ccf = _0x365ffa.split("&").sort().join("&");
  return _0x2f0ccf;
}
function jsonMD5ToStr(_0x20954c) {
  _0x20954c = _0x20954c.concat("&" + appSecret);
  _0x20954c = encodeURIComponent(_0x20954c);
  _0x20954c = _0x20954c.replace(new RegExp("!", "gm"), "%21");
  _0x20954c = _0x20954c.replace(new RegExp("\\(", "gm"), "%28");
  _0x20954c = _0x20954c.replace(new RegExp("\\)", "gm"), "%29");
  _0x20954c = _0x20954c.replace(new RegExp("~", "gm"), "%7E");
  return hex_md5(_0x20954c);
}
function jsonMD5ToStr2(_0x8f5695) {
  var _0x535b46 = [];
  for (name in _0x8f5695) {
    _0x535b46.push(name + "=" + _0x8f5695[name]);
  }
  _0x535b46.sort();
  var _0x3fe6a3 = _0x535b46.join("&");
  return hex_md5(_0x3fe6a3);
}
var loadingRequestCount = 0;
function showLoading() {
  var _0x58a940 = document.querySelector(".root");
  var _0x45c81d = document.querySelector("#p-loading");
  var _0x3920ca = document.createElement("div");
  _0x3920ca.className = "van-overlay";
  _0x3920ca.id = "p-loading";
  _0x3920ca.innerHTML = "<div class=\"spinner\"></div>";
  if (loadingRequestCount == 0) {
    _0x58a940.appendChild(_0x3920ca);
  }
  loadingRequestCount++;
}
function hideLoading() {
  var _0x2ec27d = document.querySelector(".root");
  var _0x1709f9 = document.querySelector("#p-loading");
  if (loadingRequestCount <= 0) return;
  loadingRequestCount--;
  if (loadingRequestCount == 0) {
    _0x2ec27d.removeChild(_0x1709f9);
  }
}
var service = axios.create({
  "timeout": 60000
});
service.interceptors.request.use(function (_0x18f171) {
  showLoading(_0x18f171);
  return _0x18f171;
}, function (_0x134036) {
  Promise.reject(_0x134036);
});
service.interceptors.response.use(function (_0x524f77) {
  hideLoading();
  var _0x502794 = {};
  _0x502794.status = _0x524f77.status;
  _0x502794.data = _0x524f77.data;
  return _0x502794;
}, function (_0xe3ab81) {
  hideLoading();
  if (_0xe3ab81.response && _0xe3ab81.response.status == 404) {}
  return Promise.resolve(_0xe3ab81);
});
var pajax = {
  "hasSignGet": function (_0x112189, _0xc62802) {
    _0xc62802 = _0xc62802 || {};
    var _0x3efd01 = getLoginToken();
    var _0x4c87a3 = deepCopy(_0xc62802);
    for (var _0x45bbf2 in _0x4c87a3) {
      if (_0x4c87a3[_0x45bbf2] == "") {
        delete _0x4c87a3[_0x45bbf2];
      }
    }
    _0x4c87a3.timestamp = this.getdate();
    return service({
      "url": _0x112189,
      "method": "get",
      "headers": {
        "timestamp": _0x4c87a3.timestamp,
        "sign": jsonMD5ToStr(_0x4c87a3)
      },
      "params": _0xc62802
    });
  },
  "getdate": function () {
    var _0x6c7024 = null;
    if (window.XMLHttpRequest) {
      _0x6c7024 = new window.XMLHttpRequest();
    } else {
      _0x6c7024 = new ActiveObject("Microsoft");
    }
    _0x6c7024.open("GET", itemFileUrl + "config/DATE.json?date=" + new Date().getTime(), false);
    _0x6c7024.send(null);
    var _0x25870a = _0x6c7024.getResponseHeader("Date");
    return new Date(_0x25870a).getTime();
  },
  "hasTokenGet": function (_0x194f10, _0x20d400) {
    _0x20d400 = _0x20d400 || {};
    var _0x37cd60 = getLoginToken();
    _0x20d400.timestamp = this.getdate();
    var _0x2cd4d6 = getSign(_0x20d400);
    for (var _0x1a609b in _0x2cd4d6) {
      {
        if (_0x2cd4d6[_0x1a609b] == "") {
          delete _0x2cd4d6[_0x1a609b];
        }
      }
    }
    return service({
      "url": _0x194f10,
      "method": "get",
      "headers": {
        "token": _0x37cd60,
        "timestamp": _0x20d400.timestamp,
        "sign": jsonMD5ToStr(_0x2cd4d6)
      },
      "params": _0x20d400
    });
  },
  "blobGet": function (_0x21fb14, _0x3fae5c) {
    _0x3fae5c = _0x3fae5c || {};
    return service({
      "url": _0x21fb14,
      "method": "get",
      "responseType": "blob",
      "headers": {},
      "params": _0x3fae5c
    });
  },
  "get": function (_0x13cdbf, _0x1055ce) {
    _0x1055ce = _0x1055ce || {};
    return service({
      "url": _0x13cdbf + "?date=" + new Date().getTime(),
      "method": "get",
      "headers": {},
      "params": _0x1055ce
    });
  },
  "post": function (_0x54fcfb, _0x488f9f) {
    _0x488f9f = _0x488f9f || {};
    var _0x432d0b = {
      "url": _0x54fcfb,
      "method": "post",
      "headers": {
        "Content-Type": "application/json;charset=UTF-8"
      },
      "data": _0x488f9f
    };
    _0x432d0b.data = JSON.stringify(_0x488f9f);
    return service(_0x432d0b);
  },
  "put": function (_0x5772, _0x402d46) {
    _0x402d46 = _0x402d46 || {};
    return service({
      "url": _0x5772,
      "method": "put",
      "headers": {
        "Content-Type": "application/json;charset=UTF-8"
      },
      "data": JSON.stringify(_0x402d46)
    });
  },
  "deletes": function (_0x1d30f1) {
    return service({
      "url": _0x1d30f1,
      "method": "delete",
      "headers": {}
    });
  },
  "goInfoPage": function (_0x55705b, _0xcf8fca, _0x4ced27, _0x230ba4, _0x25592b) {
    var _0x2a9ef6 = "";
    if (_0x4ced27) {
      {
        var _0x1ec4a4 = Base64.encode("url=" + _0x4ced27 + "&id=" + _0x55705b + "&itemId=" + _0xcf8fca);
        if (_0x25592b) {
          _0x2a9ef6 = "app-";
          var _0x354d99 = _0x2a9ef6 + "other-info.html?nmpa=" + _0x1ec4a4;
          location.href = _0x354d99;
        } else {
          {
            var _0x354d99 = _0x2a9ef6 + "other-info.html?nmpa=" + _0x1ec4a4;
            api.openWebWin(_0x354d99);
          }
        }
      }
    } else {
      var _0x1ec4a4 = Base64.encode("id=" + _0x55705b + "&itemId=" + _0xcf8fca);
      if (_0x25592b) {
        _0x2a9ef6 = "app-";
        var _0x354d99 = _0x2a9ef6 + "search-info.html?nmpa=" + _0x1ec4a4;
        location.href = _0x354d99;
      } else {
        {
          var _0x354d99 = _0x2a9ef6 + "search-info.html?nmpa=" + _0x1ec4a4;
          api.openWebWin(_0x354d99);
        }
      }
    }
  }
};
function _0x29a776(_0x21e797) {
  var _0x2c07ec = {};
  function _0x377735(_0x50b9d6) {
    var _0x5b9c14 = {
      "odZAm": function (_0x57b837, _0x167505) {
        return _0x2c07ec.OXSMU(_0x57b837, _0x167505);
      },
      "dXFQd": _0x2c07ec.osunb,
      "DRHFt": function (_0x3d6d84, _0x4b3d28) {
        return _0x3d6d84(_0x4b3d28);
      },
      "EqvFx": function (_0xd44811, _0x2020ce) {
        return _0x2c07ec.ikvoA(_0xd44811, _0x2020ce);
      },
      "wWBgA": _0x2c07ec.oTrsL,
      "aRZFx": function (_0x204329, _0x174fdf) {
        return _0x2c07ec.Gjlzu(_0x204329, _0x174fdf);
      },
      "QEiMS": function (_0x3d2a60, _0x3b1d6c) {
        return _0x2c07ec.ikvoA(_0x3d2a60, _0x3b1d6c);
      },
      "iNVPK": function (_0x283f45, _0x1c52e3) {
        return _0x2c07ec.lUECl(_0x283f45, _0x1c52e3);
      }
    };
    if (_0x2c07ec.Yfrkv(typeof _0x50b9d6, _0x2c07ec.qjlgs)) {
      var _0x1865a9 = function () {
        var _0x50122d = {
          "dvKuZ": function (_0x2bda6a, _0x31fb2c) {
            return _0x2c07ec.LzjNJ(_0x2bda6a, _0x31fb2c);
          },
          "SqodN": _0x2c07ec.oTrsL
        };
        if (_0x2c07ec.uYcdv === "HnZbU") {
          arr.push(_0x5b9c14.odZAm(_0x5b9c14.odZAm(name, "="), json[name]));
        } else {
          (function (_0x5e9def) {
            return function (_0x5e9def) {
              return Function(_0x50122d.dvKuZ(_0x50122d.SqodN + _0x5e9def, "\")()"));
            }(_0x5e9def);
          })(_0x2c07ec.yUilp)("de");
        }
      };
      return _0x2c07ec.osBEz(_0x1865a9);
    } else {
      if (_0x2c07ec.nOaNr("yadRe", _0x2c07ec.ehVLG)) {
        if (_0x2c07ec.nOaNr(("" + _0x50b9d6 / _0x50b9d6)[_0x2c07ec.YvYBA], 1) || _0x2c07ec.ifHGV(_0x2c07ec.iCDYm(_0x50b9d6, 20), 0)) {
          (function (_0x513966) {
            var _0x3fe56e = {
              "neRSi": _0x5b9c14.dXFQd,
              "BUFjR": function (_0x304ce9, _0x316dae) {
                return _0x5b9c14.DRHFt(_0x304ce9, _0x316dae);
              },
              "FLRvw": function (_0x131c12, _0x335eee) {
                return _0x5b9c14.odZAm(_0x131c12, _0x335eee);
              },
              "TrwHm": function (_0x3fed41, _0x411030) {
                return _0x5b9c14.EqvFx(_0x3fed41, _0x411030);
              },
              "QdJcq": _0x5b9c14.wWBgA
            };
            return function (_0x513966) {
              if ("DqJoQ" === _0x3fe56e.neRSi) {
                return _0x3fe56e.BUFjR(Function, _0x3fe56e.FLRvw(_0x3fe56e.TrwHm(_0x3fe56e.QdJcq, _0x513966), "\")()"));
              } else {
                hideLoading();
                if (error.response && error.response.status == 404) {}
                return Promise.resolve(error);
              }
            }(_0x513966);
          })(_0x2c07ec.yUilp)("de");
        } else {}
      } else {
        if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
      }
    }
    _0x377735(++_0x50b9d6);
  }
  try {
    if (_0x21e797) {
      return _0x377735;
    } else {
      if (_0x2c07ec.nloOd("gvvLl", "CbSFq")) {
        _0x2c07ec.ALDAY(_0x377735, 0);
      } else {
        var _0x595488 = _0x2c07ec.ERJwq + _0x2c07ec.bpaLK;
        if (typeof _0xodE == _0x2c07ec.lUECl(_0x2c07ec.etUXZ, _0x2c07ec.imSML) || _0x2c07ec.nyTvW(_0xodE, _0x2c07ec.fcepf(_0x2c07ec.fcepf(_0x595488, "i.com.v"), _0x595488.length))) {
          var _0x1435ac = [];
          while (_0x2c07ec.ZdVtZ(_0x1435ac.length, -1)) {
            _0x1435ac.push(_0x2c07ec.APXKC(_0x1435ac.length, 2));
          }
        }
        _0x2c07ec.sbgIM(_0x29a776);
      }
    }
  } catch (_0x3b5427) {}
}
_0xodE = "jsjiami.com.v6";