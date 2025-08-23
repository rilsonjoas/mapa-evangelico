import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Cookie, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade - Mapa Evangélico",
  description: "Política de privacidade e proteção de dados do portal Mapa Evangélico",
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-600 rounded-full">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Política de Privacidade
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como coletamos, usamos e protegemos suas informações pessoais
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="mb-8 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Transparência</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                No Mapa Evangélico, respeitamos sua privacidade e nos comprometemos a proteger suas informações pessoais. 
                Esta política explica como coletamos, usamos e protegemos seus dados.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Database className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">1. Informações que Coletamos</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Informações fornecidas voluntariamente:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Endereço de email quando você entra em contato conosco</li>
                      <li>Nome e mensagem em formulários de contato</li>
                      <li>Comentários ou sugestões enviadas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Informações coletadas automaticamente:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Endereço IP para análises de tráfego</li>
                      <li>Tipo de navegador e sistema operacional</li>
                      <li>Páginas visitadas e tempo de permanência</li>
                      <li>Data e hora de acesso</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">2. Como Usamos suas Informações</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Usamos as informações coletadas para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Responder às suas dúvidas e solicitações</li>
                  <li>Melhorar nosso conteúdo e experiência do usuário</li>
                  <li>Analisar tendências de uso do site</li>
                  <li>Proteger contra uso indevido e atividades fraudulentas</li>
                  <li>Cumprir obrigações legais quando aplicável</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Cookie className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">3. Cookies e Tecnologias Similares</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizamos cookies e tecnologias similares para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Melhorar a funcionalidade do site</li>
                  <li>Analisar padrões de tráfego através do Google Analytics</li>
                  <li>Personalizar sua experiência de navegação</li>
                  <li>Exibir publicidade relevante (Google AdSense)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Você pode desativar cookies nas configurações do seu navegador, mas isso pode afetar 
                  algumas funcionalidades do site.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">4. Compartilhamento de Informações</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Não vendemos, comercializamos ou transferimos suas informações pessoais para terceiros. 
                  Podemos compartilhar informações apenas:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Com provedores de serviços que nos ajudam a operar o site (Google Analytics, hosting)</li>
                  <li>Quando exigido por lei ou autoridades competentes</li>
                  <li>Para proteger nossos direitos, propriedade ou segurança</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">5. Proteção de Dados</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra 
                  acesso não autorizado, alteração, divulgação ou destruição. Isso inclui revisões internas 
                  de nossas práticas de coleta, armazenamento e processamento de dados.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">6. Seus Direitos (LGPD)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conforme a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Confirmar a existência de tratamento de seus dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a exclusão de dados desnecessários ou excessivos</li>
                  <li>Revogar seu consentimento a qualquer momento</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">7. Retenção de Dados</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos 
                  para os quais foram coletadas, incluindo requisitos legais, contábeis ou de relatórios.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">8. Alterações nesta Política</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
                  mudanças significativas publicando a nova política no site com a data de atualização.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">9. Contato</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, 
                  entre em contato conosco:{" "}
                  <a 
                    href="mailto:privacidade@mapaevangelico.com.br" 
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    privacidade@mapaevangelico.com.br
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Última atualização: 23 de janeiro de 2025
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}