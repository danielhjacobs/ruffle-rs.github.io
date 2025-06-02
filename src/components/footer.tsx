"use client";

import { Container, Group, ActionIcon, rem, Text } from "@mantine/core";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";

import {
  IconBrandX,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandTiktok,
  IconBrandDiscord,
  IconBrandMastodon,
} from "@tabler/icons-react";
import classes from "./footer.module.css";
import Image from "next/image";

const allSocials = [
  {
    type: IconBrandGithub,
    url: "https://github.com/ruffle-rs",
    title: "footer.github",
  },
  {
    type: IconBrandX,
    url: "https://twitter.com/ruffle_rs",
    title: "footer.social-x",
  },
  {
    type: IconBrandTiktok,
    url: "https://www.tiktok.com/@ruffle.rs",
    title: "footer.tiktok",
  },
  {
    type: IconBrandInstagram,
    url: "https://www.instagram.com/ruffle.rs/",
    title: "footer.instagram",
  },
  {
    type: IconBrandMastodon,
    url: "https://mastodon.gamedev.place/@ruffle",
    title: "footer.mastodon",
  },
  {
    type: IconBrandDiscord,
    url: "https://discord.gg/ruffle",
    title: "footer.discord",
  },
];

export function FooterSocial() {
  const { t } = useTranslation();
  const socials = allSocials.map((social, i) => (
    <ActionIcon
      key={i}
      size="lg"
      color="gray"
      variant="subtle"
      component={Link}
      href={social.url}
      target="_blank"
      title={t(social.title)}
      suppressHydrationWarning
    >
      <social.type style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Container className={classes.logobox}>
          <Image
            src="/logo.svg"
            alt="Ruffle Logo"
            height={30}
            width={91}
            priority
          />
          <Text size="lg" className={classes.tagline} suppressHydrationWarning>
            {t("footer.tagline")}
          </Text>
        </Container>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          {socials}
        </Group>
      </Container>
    </div>
  );
}
