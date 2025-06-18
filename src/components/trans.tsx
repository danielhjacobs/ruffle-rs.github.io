import React, { useEffect, useState } from "react";
import { useTranslation } from "next-export-i18n";

export type TransProps = {
  i18nKey: string;
  values?: Record<string, string | number | React.ReactNode>;
  components?: { [key: string]: React.ReactNode };
};

const Trans: React.FC<TransProps> = ({
  i18nKey,
  values = {},
  components = {},
}) => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const translation = t(i18nKey);

  const renderWithPlaceholders = (template: string) => {
    const parts = template.split(/({{\s*.*?\s*}})/g); // Split on placeholders like {{key}}

    return parts.map((part, index) => {
      const match = part.match(/^{{\s*(.*?)\s*}}$/);
      if (match) {
        const key = match[1];
        if (key in values) {
          const value = values[key];
          return <React.Fragment key={`val-${index}`}>{value}</React.Fragment>;
        } else if (key in components) {
          return (
            <React.Fragment key={`comp-${index}`}>
              {components[key]}
            </React.Fragment>
          );
        } else {
          // Return raw placeholder if key not found
          return part;
        }
      }
      return <React.Fragment key={`txt-${index}`}>{part}</React.Fragment>;
    });
  };

  return <>{renderWithPlaceholders(translation)}</>;
};

export default Trans;
