import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import Badge from "./Badge";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, draft, featured } =
    frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent"
      >
        {secHeading ? (
          <h2 {...headerProps}>
            {title}
            {draft && <Badge name={"draft"} />}
            {featured && <Badge name="featured" />}
          </h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p>{description}</p>
    </li>
  );
}
