'use server';

/**
 * @fileOverview Provides a GenAI powered tool that offers insights or complementary product suggestions based on product data and customer reviews.
 *
 * - getProductInformation - A function that handles the process of generating product information.
 * - ProductInformationInput - The input type for the getProductInformation function.
 * - ProductInformationOutput - The return type for the getProductInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductInformationInputSchema = z.object({
  productDescription: z
    .string()
    .describe('The full product description of the product.'),
  fragranceNotes: z.object({
    top: z.array(z.string()).describe('Top fragrance notes'),
    middle: z.array(z.string()).describe('Middle fragrance notes'),
    base: z.array(z.string()).describe('Base fragrance notes'),
  }).describe('Fragrance notes of the product'),
  customerReviews: z.array(z.string()).describe('An array of customer reviews for the product.'),
});
export type ProductInformationInput = z.infer<typeof ProductInformationInputSchema>;

const ProductInformationOutputSchema = z.object({
  insight: z.string().describe('A helpful insight or complementary product suggestion for the customer.'),
});
export type ProductInformationOutput = z.infer<typeof ProductInformationOutputSchema>;

export async function getProductInformation(input: ProductInformationInput): Promise<ProductInformationOutput> {
  return productInformationFlow(input);
}

const productInformationPrompt = ai.definePrompt({
  name: 'productInformationPrompt',
  input: {schema: ProductInformationInputSchema},
  output: {schema: ProductInformationOutputSchema},
  prompt: `You are a helpful AI assistant providing insights and complementary product suggestions for customers browsing a fragrance e-commerce site.

  Consider the following product data and customer reviews to generate a single, concise insight or suggestion that would increase the customer's confidence in making a purchase.

  Product Description: {{{productDescription}}}
  Fragrance Notes: Top - {{{fragranceNotes.top}}}, Middle - {{{fragranceNotes.middle}}}, Base - {{{fragranceNotes.base}}}
  Customer Reviews: {{#each customerReviews}} - {{{this}}}{{/each}}

  Insight:`,
});

const productInformationFlow = ai.defineFlow(
  {
    name: 'productInformationFlow',
    inputSchema: ProductInformationInputSchema,
    outputSchema: ProductInformationOutputSchema,
  },
  async input => {
    const {output} = await productInformationPrompt(input);
    return output!;
  }
);
