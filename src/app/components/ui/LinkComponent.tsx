import { LinkTypeConfig } from "@/app/types/ui/button.config";
import Link from "next/link";

interface LinkConfig {
  linkProps: LinkTypeConfig;
}

const LinkComponent = ({ linkProps }: LinkConfig) => {
  return (
    <Link
      href={linkProps?.routeUrl ?? "/"}
      target={linkProps?.target}
      title={linkProps?.title ?? "link-title"}
      className={`${linkProps?.className}`}
    >
      {linkProps?.linkName ?? "link"}
    </Link>
  );
};

export default LinkComponent;
