import { Metadata } from "next";
import CategorySection from "@/components/content/CategorySection";
import { CONTENT_CATEGORIES } from "@/data/content-types";
import { organizations } from "@/data/organizations";

export const metadata: Metadata = {
  title: "Podcasts - Mapa Evangélico",
  description: "Podcasts evangélicos para edificação e aprendizado",
};

export default function PodcastsPage() {
  const category = CONTENT_CATEGORIES.find(cat => cat.id === "podcasts")!;
  const categoryOrganizations = organizations.filter(org => org.category === category.id);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 py-16">
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