interface UrlVariables {
    version?: string | number;
    collection?: string;
    id?: string | number;
    [key: string]: string | number | undefined;
}

interface UseUrlExtractor {
    urlInstance: string;
    setUrlInstance: React.Dispatch<React.SetStateAction<string>>;
    result: UrlVariables | null;
    extractVariables: () => void;
}

export type { UrlVariables, UseUrlExtractor }