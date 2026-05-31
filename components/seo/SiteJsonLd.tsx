import { JsonLd } from "./JsonLd";
import { dentistSchema, websiteSchema } from "@/lib/schema";

/** Global organization + website structured data, rendered once in the layout. */
export function SiteJsonLd() {
  return <JsonLd data={[dentistSchema(), websiteSchema()]} />;
}
