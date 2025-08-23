"use client";

import { Metadata } from "next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Send, Lightbulb } from "lucide-react";
import { useState } from "react";

export default function RecomendacoesPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    categoria: "",
    titulo: "",
    autor: "",
    descricao: "",
    motivo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log("Formulário enviado:", formData);
    
    // Criar o corpo do email
    const emailBody = `
      Nome: ${formData.nome}
      Email: ${formData.email}
      Categoria: ${formData.categoria}
      Título/Nome: ${formData.titulo}
      Autor/Criador: ${formData.autor}
      Descrição: ${formData.descricao}
      Motivo da recomendação: ${formData.motivo}
    `;
    
    // Abrir cliente de email
    window.location.href = `mailto:recomendacoes@mapaevangelico.com.br?subject=Recomendação: ${formData.titulo}&body=${encodeURIComponent(emailBody)}`;
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-600 rounded-full">
              <Lightbulb className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Envie suas Recomendações
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compartilhe conosco livros, podcasts, organizações ou recursos que você considera valiosos 
            para a comunidade evangélica
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Formulário de Recomendação</h2>
              </div>
              <p className="text-muted-foreground">
                Preencha os campos abaixo para nos enviar sua sugestão
              </p>
            </CardHeader>
            
            <CardContent className="px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                      Seu Nome *
                    </label>
                    <Input
                      id="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => handleChange("nome", e.target.value)}
                      placeholder="Digite seu nome"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Seu Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="seu.email@exemplo.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="categoria" className="block text-sm font-medium text-foreground mb-2">
                    Categoria *
                  </label>
                  <Select value={formData.categoria} onValueChange={(value) => handleChange("categoria", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="livro">Livro</SelectItem>
                      <SelectItem value="podcast">Podcast</SelectItem>
                      <SelectItem value="denominacao">Denominação</SelectItem>
                      <SelectItem value="projeto-social">Projeto Social</SelectItem>
                      <SelectItem value="organizacao">Organização</SelectItem>
                      <SelectItem value="seminario">Seminário/Faculdade</SelectItem>
                      <SelectItem value="revista">Revista Acadêmica</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="titulo" className="block text-sm font-medium text-foreground mb-2">
                      Título/Nome *
                    </label>
                    <Input
                      id="titulo"
                      type="text"
                      required
                      value={formData.titulo}
                      onChange={(e) => handleChange("titulo", e.target.value)}
                      placeholder="Nome do livro, podcast, organização..."
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="autor" className="block text-sm font-medium text-foreground mb-2">
                      Autor/Criador
                    </label>
                    <Input
                      id="autor"
                      type="text"
                      value={formData.autor}
                      onChange={(e) => handleChange("autor", e.target.value)}
                      placeholder="Nome do autor, pastor, organização..."
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="descricao" className="block text-sm font-medium text-foreground mb-2">
                    Descrição
                  </label>
                  <Textarea
                    id="descricao"
                    value={formData.descricao}
                    onChange={(e) => handleChange("descricao", e.target.value)}
                    placeholder="Descreva brevemente o que você está recomendando..."
                    className="w-full min-h-[100px]"
                  />
                </div>

                <div>
                  <label htmlFor="motivo" className="block text-sm font-medium text-foreground mb-2">
                    Por que recomenda? *
                  </label>
                  <Textarea
                    id="motivo"
                    required
                    value={formData.motivo}
                    onChange={(e) => handleChange("motivo", e.target.value)}
                    placeholder="Explique por que considera este recurso valioso para a comunidade evangélica..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700 min-w-[200px]"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Recomendação
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">O que aceitamos?</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Livros de teologia, apologética e vida cristã</li>
                  <li>• Podcasts evangélicos de qualidade</li>
                  <li>• Denominações e organizações sérias</li>
                  <li>• Projetos sociais com base cristã</li>
                  <li>• Instituições de ensino teológico</li>
                  <li>• Revistas acadêmicas cristãs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Como avaliamos?</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Conformidade com princípios bíblicos</li>
                  <li>• Qualidade e relevância do conteúdo</li>
                  <li>• Impacto positivo na comunidade</li>
                  <li>• Ortodoxia doutrinária</li>
                  <li>• Reputação e credibilidade</li>
                  <li>• Alinhamento com nossa missão</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <Card className="mt-8 border-0 shadow-md bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Dúvidas?</strong> Entre em contato conosco através do email:{" "}
                <a 
                  href="mailto:recomendacoes@mapaevangelico.com.br" 
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  recomendacoes@mapaevangelico.com.br
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}