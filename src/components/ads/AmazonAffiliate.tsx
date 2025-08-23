"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface AmazonAffiliateProps {
  productId: string;
  title: string;
  description?: string;
  price?: string;
  imageUrl?: string;
  className?: string;
}

export default function AmazonAffiliate({
  productId,
  title,
  description,
  price,
  imageUrl,
  className = "",
}: AmazonAffiliateProps) {
  const affiliateLink = `https://amzn.to/${productId}?tag=YOUR_AFFILIATE_TAG`;

  return (
    <div className={`border rounded-lg p-4 bg-white shadow-sm ${className}`}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-32 object-cover rounded mb-3"
        />
      )}
      <h4 className="font-semibold text-sm mb-2 line-clamp-2">{title}</h4>
      {description && (
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{description}</p>
      )}
      {price && (
        <p className="text-sm font-bold text-green-600 mb-3">{price}</p>
      )}
      <Button
        asChild
        size="sm"
        className="w-full text-xs"
        variant="outline"
      >
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1"
        >
          Ver na Amazon
          <ExternalLink className="h-3 w-3" />
        </a>
      </Button>
      <p className="text-xs text-gray-400 text-center mt-2">
        Link afiliado - Podemos receber comissão
      </p>
    </div>
  );
}