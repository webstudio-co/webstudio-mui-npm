import React from 'react';
import { ShopifyProductType, ProductVariantType } from 'frontend-shopify';
type ShopifyAddToCartButtonProps = {
    product: ShopifyProductType;
    variant: ProductVariantType;
    buttonVariant?: 'default' | 'secondary' | 'ghost';
    label?: string;
    enableQuantity?: boolean;
    enableSubscription?: boolean;
    enableFavorites?: boolean;
    size?: 'small' | 'medium' | 'large';
};
declare const ShopifyAddToCartButton: React.FC<ShopifyAddToCartButtonProps>;
export default ShopifyAddToCartButton;
