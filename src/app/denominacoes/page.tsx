import { Metadata } from "next";
import CategorySection from "@/components/content/CategorySection";
import { CONTENT_CATEGORIES } from "@/data/content-types";
import { organizations } from "@/data/organizations";

export const metadata: Metadata = {
  title: "Denominações - Mapa Evangélico",
  description: "Conheça as principais denominações evangélicas do Brasil",
};

export default function DenominacoesPage() {
  const category = CONTENT_CATEGORIES.find(cat => cat.id === "denominacoes")!;
  const categoryOrganizations = organizations.filter(org => org.category === "denominacoes");

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
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