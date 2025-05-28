"use client";

import { Burger, Container, Drawer, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./header.module.css";
import { LanguagePicker } from "./language-picker";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "next-export-i18n";

const links = [
  { link: "/", label: "header.about" },
  { link: "/downloads", label: "header.downloads" },
  { link: "/compatibility", label: "header.compatibility" },
  { link: "/contribute", label: "header.contribute" },
  { link: "/blog", label: "header.blog" },
  { link: "/demo", label: "header.demo", target: "_blank" },
  {
    link: "https://discord.gg/ruffle",
    label: "header.discord",
    target: "_blank",
  },
  {
    link: "https://github.com/ruffle-rs/ruffle/",
    label: "header.github",
    target: "_blank",
  },
];

export function Header() {
  const { t } = useTranslation();
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();

  const items = links.map((link) => (
    <Link
      suppressHydrationWarning
      key={link.label}
      href={link.link}
      target={link.target}
      className={classes.link}
      data-active={pathname === link.link || undefined}
      onClick={() => {
        close();
      }}
    >
      {t(link.label)}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Link href="/">
          <Image
            suppressHydrationWarning
            src="/logo.svg"
            alt={t("logo.alt-tag")}
            height={30}
            width={91}
            priority
          />
        </Link>
        <Group gap={5} visibleFrom="md">
          {items}
          <LanguagePicker />
        </Group>{" "}
        <Drawer
          opened={opened}
          onClose={close}
          position="top"
          classNames={{
            inner: classes.drawer,
            overlay: classes.overlay,
            content: classes.content,
          }}
          withCloseButton={false}
        >
          {items}
        </Drawer>
        <span className={classes.hiddenOnDesktop}>
          <LanguagePicker />
        </span>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="md"
          size="sm"
          className={classes.burger}
        />
      </Container>
    </header>
  );
}
