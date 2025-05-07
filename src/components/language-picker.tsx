"use client";

import { useEffect, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Group, Menu, UnstyledButton } from "@mantine/core";
import { LanguageSwitcher } from "next-export-i18n";
import classes from "./language-picker.module.css";

const data = [
  { label: "English (United States)", locale: "en" },
  { label: "العربية", locale: "ar" },
  { label: "Català", locale: "ca" },
  { label: "简体中文", locale: "zh" },
  { label: "Čeština", locale: "cs" },
  { label: "Nederlands", locale: "nl" },
  { label: "Français (France)", locale: "fr" },
  { label: "Deutsch", locale: "de" },
  { label: "עברית (ישראל)", locale: "he" },
  { label: "Magyar", locale: "hu" },
  { label: "Indonesian", locale: "id" },
  { label: "Italiano (Italia)", locale: "it" },
  { label: "日本語", locale: "ja" },
  { label: "한국어", locale: "ko" },
  { label: "Polski (Polska)", locale: "pl" },
  { label: "Português (Portugal)", locale: "pt" },
  { label: "Romanian", locale: "ro" },
  { label: "Русский", locale: "ru" },
  { label: "Slovenčina (Slovensko)", locale: "sk" },
  { label: "Español", locale: "es" },
  { label: "Svenska", locale: "sv" },
  { label: "Türkçe", locale: "tr" },
  { label: "Українська", locale: "uk" },
];

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const browserLang = (
        (window.navigator.languages && window.navigator.languages[0]) ||
        window.navigator.language
      )
        .split("-")[0]
        .toLowerCase();
      const currentLocale = data.some((item) => item.locale === browserLang)
        ? browserLang
        : "en";
      const storedLang =
        localStorage.getItem("next-export-i18n-lang") || currentLocale;
      const match = data.find((item) => item.locale === storedLang);
      if (match) setSelected(match);
    }
  }, []);

  const items = data.map((item) => (
    <LanguageSwitcher lang={item.locale} key={item.locale}>
      <Menu.Item
        component="span"
        className={classes.item}
        onClick={() => setSelected(item)}
      >
        {item.label}
      </Menu.Item>
    </LanguageSwitcher>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={classes.control}
          data-expanded={opened || undefined}
        >
          <Group gap="xs">
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown className={classes.dropdown}>{items}</Menu.Dropdown>
    </Menu>
  );
}
