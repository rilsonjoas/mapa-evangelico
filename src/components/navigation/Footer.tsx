import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, MessageCircle, Music, Headphones, Camera, Hash, Play } from "lucide-react";
import { CONTENT_CATEGORIES } from "@/data/content-types";

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: Camera, href: "#", color: "text-pink-600" },
    { name: "Twitter", icon: Hash, href: "#", color: "text-blue-400" },
    { name: "YouTube", icon: Play, href: "#", color: "text-red-600" },
    { name: "Telegram", icon: MessageCircle, href: "#", color: "text-blue-500" },
    { name: "Spotify", icon: Music, href: "#", color: "text-green-500" },
    { name: "Apple Podcasts", icon: Headphones, href: "#", color: "text-purple-600" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="inline-block h-8 w-8 mr-2 align-middle">
                <img src="/logomarca.svg" alt="Logomarca Mapa Evangélico" className="h-8 w-8" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">Mapa Evangélico</h3>
                <p className="text-xs text-muted-foreground">Portal das organizações evangélicas</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Conectando e mapeando o diverso mundo evangélico brasileiro.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={`p-2 rounded-md hover:bg-accent transition-colors ${social.color} hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">Categorias</h4>
            <div className="grid grid-cols-2 gap-2">
              {CONTENT_CATEGORIES.map((category) => (
                <Link
                  key={category.id}
                  href={`/${category.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/sobre"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Sobre
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <Link
                href="mailto:contato@mapaevangelico.com.br"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 mr-2 text-blue-600 group-hover:scale-110 transition-transform" />
                contato@mapaevangelico.com.br
              </Link>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Sugestões, colaborações e parcerias são sempre bem-vindas!
              </p>
              <Button asChild variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white w-full mt-4 font-semibold">
                <Link href="/recomendacoes">
                  Envie suas recomendações
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 Mapa Evangélico. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/termos" className="hover:text-foreground transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-foreground transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}