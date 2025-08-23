"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, X, MapPin } from "lucide-react";
import { CONTENT_CATEGORIES } from "@/data/content-types";
import BrazilMap from "@/components/charts/BrazilMap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="inline-block h-8 w-8 mr-2 align-middle">
                <img src="/logomarca.svg" alt="Logomarca Mapa Evangélico" className="h-8 w-8" />
              </span>
              <div>
                <h1 className="text-xl font-bold text-foreground">Mapa Evangélico</h1>
                <p className="text-xs text-muted-foreground">Portal das organizações evangélicas</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === '/' ? 'text-blue-600' : 'text-foreground'
              }`}
            >
              Página inicial
            </Link>
            <Link
              href="/denominacoes"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === '/denominacoes' ? 'text-blue-600' : 'text-foreground'
              }`}
            >
              Denominações
            </Link>
            <Link
              href="/projetos-sociais"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === '/projetos-sociais' ? 'text-blue-600' : 'text-foreground'
              }`}
            >
              Projetos Sociais
            </Link>
            <Link 
              href="/sobre" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === '/sobre' ? 'text-blue-600' : 'text-foreground'
              }`}
            >
              Sobre
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-border mt-4 pt-4">
            <Link
              href="/"
              className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                pathname === '/' ? 'bg-accent text-accent-foreground' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Página inicial
            </Link>
            {CONTENT_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                  pathname === `/${category.slug}` ? 'bg-accent text-accent-foreground' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="/sobre"
              className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                pathname === '/sobre' ? 'bg-accent text-accent-foreground' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
          </div>
        )}
      </div>

      {/* Hero Section - Only on homepage */}
      {pathname === '/' && (
        <>
          <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24">
                <div className="text-center lg:text-left mb-12 lg:mb-0 lg:w-1/2">
                  <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                    Neste momento, há <br />
                    <span className="text-blue-600">64,3 milhões</span> de <br />
                    evangélicos no Brasil
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                    Descubra e conecte-se com organizações, denominações e projetos sociais evangélicos em todo o país.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <a href="#organizacoes">
                        Explorar Organizações
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/sobre">
                        Saiba Mais
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 max-w-md lg:max-w-lg">
                  <BrazilMap />
                </div>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className="bg-blue-600 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Encontre organizações evangélicas próximas a você
                </h2>
                <p className="text-blue-100 mb-8">
                  Pesquise por denominações, projetos sociais, seminários e muito mais
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <Input
                    type="search"
                    placeholder="Digite sua pesquisa..."
                    className="flex-1 bg-white border-0"
                  />
                  <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    <Search className="h-4 w-4 mr-2" />
                    Pesquisar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}