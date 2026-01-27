import { createForminitProxy } from 'forminit/next';

const apiKey = process.env.FORMINIT_API_KEY!;

if (!apiKey) {
  console.warn("UYARI: FORMINIT_API_KEY ortam değişkeni bulunamadı. Form gönderimi çalışmayabilir.");
}

const forminit = createForminitProxy({
  // Eğer key yoksa boş string veya geçici bir değer vererek çökmesini engelliyoruz
  apiKey: apiKey || "missing_api_key", 
});

export const POST = forminit.POST;