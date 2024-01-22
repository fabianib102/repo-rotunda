import { useState } from 'react';
import { UrlVariables, UseUrlExtractor } from '../interfaces/Urls';

function useUrlExtractor(urlFormat: string): UseUrlExtractor {
  const [urlInstance, setUrlInstance] = useState('');
  const [result, setResult] = useState<UrlVariables | null>(null);

  const extractVariables = (): void => {
    if (!urlFormat || !urlInstance) {
      setResult(null);
      return;
    }

    const formatParts = urlFormat.split('/');
    const instanceParts = urlInstance.split('/');
    const variables: UrlVariables = {};

    formatParts.forEach((part, index) => {
      if (part.startsWith(':')) {
        const variableName = part.substring(1);
        const variableValue = instanceParts[index];
        const cleanedValue = variableValue?.split('?')[0];
        variables[variableName] = cleanedValue ? cleanedValue : Number(cleanedValue);
      }
    });
    
    const queryParams = new URL(urlInstance, 'http://dummy').searchParams;
    queryParams.forEach((value, key) => {
      variables[key] = value ? value : Number(value);
    });

    setResult(variables);
  };

  return {
    urlInstance,
    setUrlInstance,
    result,
    extractVariables,
  };
}

export default useUrlExtractor;
