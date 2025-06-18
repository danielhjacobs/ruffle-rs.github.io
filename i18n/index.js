const en = require("./translations.en.json");
const ar = require("./translations.ar.json");
const ca = require("./translations.ca.json");
const zh = require("./translations.zh.json");
const cs = require("./translations.cs.json");
const nl = require("./translations.nl.json");
const fr = require("./translations.fr.json");
const de = require("./translations.de.json");
const he = require("./translations.he.json");
const hu = require("./translations.hu.json");
const id = require("./translations.id.json");
const it = require("./translations.it.json");
const ja = require("./translations.ja.json");
const ko = require("./translations.ko.json");
const pl = require("./translations.pl.json");
const pt = require("./translations.pt.json");
const ro = require("./translations.ro.json");
const ru = require("./translations.ru.json");
const sk = require("./translations.sk.json");
const es = require("./translations.es.json");
const sv = require("./translations.sv.json");
const tr = require("./translations.tr.json");
const uk = require("./translations.uk.json");

const i18n = {
  translations: {
    en,
    ar,
    ca,
    zh,
    cs,
    nl,
    fr,
    de,
    he,
    hu,
    id,
    it,
    ja,
    ko,
    pl,
    pt,
    ro,
    ru,
    sk,
    es,
    sv,
    tr,
    uk,
  },
  defaultLang: "en",
  useBrowserDefault: true,
  languageDataStore: "localStorage",
};

module.exports = i18n;
