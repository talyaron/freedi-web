import { English, Hebrew } from "@/types/language";

export async function getLanguageData(): Promise<{
    [key: string]: English | Hebrew;
}> {
    const he = await import("@/assets/Languages/he.json");
    const en = await import("@/assets/Languages/en.json");

    return {
        he: he.default,
        en: en.default,
    };
}
