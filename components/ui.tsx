import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { WhatsAppIcon } from "./icons";

// Hash links render as plain anchors so the browser fires `hashchange`
// (the treatment tabs listen for it); client navigation would not.
const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href) || href.includes("#");

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid" | "light";
  size?: "md" | "sm";
  whatsapp?: boolean;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function Button({
  href,
  children,
  variant = "outline",
  size = "md",
  whatsapp,
  className = "",
  ...rest
}: ButtonProps) {
  const cls = [
    "btn",
    variant === "solid" && "btn-solid",
    variant === "light" && "btn-light",
    size === "sm" && "btn-sm",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      {whatsapp && <WhatsAppIcon className="text-[1.15em]" />}
      {children}
    </>
  );
  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(newTab && { target: "_blank", rel: "noopener noreferrer" })} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}

/** Internal or external link without button chrome. */
export function SmartLink({ href, children, ...rest }: ComponentProps<"a"> & { href: string }) {
  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} {...(newTab && { target: "_blank", rel: "noopener noreferrer" })} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

/** The single section title in the logo style, no eyebrow above it. */
export function Title({
  children,
  as: Tag = "h2",
  className = "",
  light,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  light?: boolean;
}) {
  return <Tag className={`title ${light ? "text-white" : ""} ${className}`}>{children}</Tag>;
}

/** Title on the left, optional action on the right, one shared baseline. */
export function SectionHead({ title, action, light }: { title: ReactNode; action?: ReactNode; light?: boolean }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 md:mb-6">
      <Title light={light}>{title}</Title>
      {action}
    </div>
  );
}
