import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
import { ContentCategory, Organization } from "@/data/content-types";

interface CategorySectionProps {
  category: ContentCategory;
  items: Organization[];
  showViewMore?: boolean;
}

export default function CategorySection({
  category,
  items,
  showViewMore = true,
}: CategorySectionProps) {
  // Show only first 3 items on homepage
  const displayItems = showViewMore ? items.slice(0, 3) : items;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {showViewMore && (
          <div className="text-center mb-12">
            <Link href={`/${category.slug}`}>
              <h2 className="text-3xl font-bold text-foreground mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                {category.name}
              </h2>
            </Link>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:-translate-y-1">
              <div className="aspect-video relative bg-muted">
                <Image
                  src={item.image || "/images/COBRA-KAI-1024x1024.jpg"}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-4">
                <h3 className="font-semibold text-lg text-foreground line-clamp-2">
                  {item.name}
                </h3>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {item.description}
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  {item.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>
                  )}
                  {item.foundedYear && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>Fundada em {item.foundedYear}</span>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="pt-0 gap-2">
                <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 flex-1">
                  <Link href={`/${category.slug}/${item.id}`}>
                    Saiba mais
                  </Link>
                </Button>
                {item.website && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={item.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {showViewMore && (
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link href={`/${category.slug}`}>
                {(() => {
                  // Gênero e número para cada categoria
                  const nome = category.name.toLowerCase();
                  if (nome.startsWith("denomina")) return "Ver todas as denominações →";
                  if (nome.startsWith("organiza")) return "Ver todas as organizações →";
                  if (nome.startsWith("projeto")) return "Ver todos os projetos →";
                  if (nome.startsWith("podcast")) return "Ver todos os podcasts →";
                  if (nome.startsWith("revista")) return "Ver todas as revistas →";
                  if (nome.startsWith("seminário") || nome.startsWith("seminarios") || nome.startsWith("seminários")) return "Ver todos os seminários e faculdades →";
                  if (nome.startsWith("livro")) return "Ver todos os livros →";
                  if (nome.startsWith("confiss")) return "Ver todas as confissões de fé →";
                  if (nome.startsWith("recomend")) return "Ver todas as recomendações →";
                  return `Ver todos(as) ${category.name.toLowerCase()} →`;
                })()}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}