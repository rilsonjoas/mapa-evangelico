import CategorySection from "@/components/content/CategorySection";
import { CONTENT_CATEGORIES } from "@/data/content-types";
import { organizations } from "@/data/organizations";

export default function Home() {
  return (
    <div>
      {/* Categories Sections */}
      <div id="organizacoes">
        {CONTENT_CATEGORIES.map((category) => {
          const categoryOrganizations = organizations.filter(
            (org) => org.category === category.id
          );
          
          if (categoryOrganizations.length === 0) return null;
          
          return (
            <CategorySection
              key={category.id}
              category={category}
              items={categoryOrganizations}
            />
          );
        })}
      </div>
    </div>
  );
}
