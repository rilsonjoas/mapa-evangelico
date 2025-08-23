import { Metadata } from "next";
import CategorySection from "@/components/content/CategorySection";
import { CONTENT_CATEGORIES } from "@/data/content-types";
import { organizations } from "@/data/organizations";

export const metadata: Metadata = {
  title: "Confissões de Fé - Mapa Evangélico",
  description: "Explore os documentos e declarações doutrinárias fundamentais do cristianismo evangélico",
};

export default function ConfissoesFePage() {
  const category = CONTENT_CATEGORIES.find(cat => cat.id === "confissoes-fe")!;
  const categoryOrganizations = organizations.filter(org => org.category === category.id);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-purple-50 to-violet-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>
      </div>
      
      <CategorySection 
        category={category} 
        items={categoryOrganizations} 
        showViewMore={false}
      />
    </div>
  );
}