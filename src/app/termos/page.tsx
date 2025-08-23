import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Shield, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso - Mapa Evangélico",
  description: "Termos de uso e condições de utilização do portal Mapa Evangélico",
};

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <FileText className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Termos de Uso
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Condições gerais de uso do portal Mapa Evangélico
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="mb-8 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <AlertCircle className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Última atualização</h2>
              </div>
              <p className="text-muted-foreground">
                Estes termos foram atualizados pela última vez em 23 de janeiro de 2025.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ao acessar e usar o portal Mapa Evangélico, você concorda em estar sujeito a estes Termos de Uso 
                  e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, 
                  está proibido de usar ou acessar este site.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">2. Uso do Conteúdo</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O conteúdo disponibilizado no Mapa Evangélico é destinado para fins informativos e educacionais. 
                  Você pode:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Visualizar e navegar pelo conteúdo do site</li>
                  <li>Compartilhar links para páginas específicas</li>
                  <li>Citar informações com devida atribuição</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">3. Limitações</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sem permissão expressa, você não pode:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Reproduzir, duplicar ou copiar material do site para fins comerciais</li>
                  <li>Usar conteúdo de forma que possa danificar nossa reputação</li>
                  <li>Tentar acessar áreas restritas do sistema</li>
                  <li>Interferir no funcionamento normal do site</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">4. Informações das Organizações</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As informações sobre organizações evangélicas são fornecidas para fins informativos. 
                  Encorajamos os usuários a verificar informações diretamente com as organizações. 
                  Não nos responsabilizamos por mudanças nas informações de contato ou atividades das organizações listadas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">5. Isenção de Responsabilidade</h3>
                <p className="text-muted-foreground leading-relaxed">
                  O material no site do Mapa Evangélico é fornecido "como está". Não oferecemos garantias, 
                  expressas ou implícitas, e por este meio renunciamos e negamos todas as outras garantias, 
                  incluindo, sem limitação, garantias implícitas de comercialização, adequação para um propósito específico.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">6. Limitações</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Em nenhum caso o Mapa Evangélico ou seus fornecedores serão responsáveis por quaisquer danos 
                  (incluindo, sem limitação, danos por perda de dados ou lucro, ou devido à interrupção dos negócios) 
                  decorrentes do uso ou da incapacidade de usar os materiais no site do Mapa Evangélico.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">7. Modificações</h3>
                <p className="text-muted-foreground leading-relaxed">
                  O Mapa Evangélico pode revisar estes termos de serviço a qualquer momento, sem aviso prévio. 
                  Ao usar este site, você concorda em estar sujeito à versão atual destes Termos de Uso.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">8. Contato</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do email:{" "}
                  <a 
                    href="mailto:contato@mapaevangelico.com.br" 
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    contato@mapaevangelico.com.br
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}