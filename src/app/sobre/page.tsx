import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Target, Users, Mail, Heart, Book, Building, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre - Mapa Evangélico",
  description: "Conheça a missão e objetivos do Mapa Evangélico, o portal das organizações evangélicas do Brasil",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <MapPin className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Sobre o Mapa Evangélico
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um portal que conecta e mapeia o diverso mundo evangélico brasileiro, 
            criando pontes de entendimento e conhecimento.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Mission Card */}
          <Card className="mb-12 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Nossa Missão</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser um portal abrangente para cristãos e não-cristãos compreenderem melhor o cristianismo evangélico brasileiro. 
                Demonstramos que, apesar das diferenças denominacionais e litúrgicas, existe um núcleo de crenças e 
                valores fundamentais que une a vasta comunidade evangélica do país.
              </p>
            </CardContent>
          </Card>

          {/* What we offer */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <Heart className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-foreground">O que oferecemos</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <Building className="h-8 w-8 text-blue-500 mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Denominações</h3>
                  <p className="text-sm text-muted-foreground">
                    Principais denominações evangélicas do Brasil, suas histórias e características
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-green-500 mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Projetos Sociais</h3>
                  <p className="text-sm text-muted-foreground">
                    Iniciativas de impacto comunitário e transformação social
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <Book className="h-8 w-8 text-purple-500 mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Confissões de Fé</h3>
                  <p className="text-sm text-muted-foreground">
                    Documentos doutrinários fundamentais que moldam a fé evangélica
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <GraduationCap className="h-8 w-8 text-indigo-500 mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Educação Teológica</h3>
                  <p className="text-sm text-muted-foreground">
                    Seminários, faculdades e revistas acadêmicas evangélicas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Target Audience */}
          <Card className="mb-12 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Público-alvo</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Nosso portal é destinado tanto a cristãos quanto a não-cristãos que buscam informações confiáveis 
                sobre o cristianismo evangélico no Brasil. Focamos especialmente em denominações protestantes ortodoxas, 
                incluindo igrejas históricas e pentecostais clássicas, proporcionando uma visão ampla e respeitosa 
                da diversidade evangélica brasileira.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Entre em contato</h2>
              <p className="text-muted-foreground mb-6">
                Tem sugestões, gostaria de colaborar ou precisa de mais informações? 
                Estamos aqui para ouvir você.
              </p>
              <a 
                href="mailto:contato@mapaevangelico.com.br" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                contato@mapaevangelico.com.br
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}