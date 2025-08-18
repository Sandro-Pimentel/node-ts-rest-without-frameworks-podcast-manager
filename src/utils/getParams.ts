export default function getRouteParams(pathname: string, pattern: string) {
    const pathParts = pathname.split("/").filter(Boolean);
    const patternParts = pattern.split("/").filter(Boolean);
  
    const params: Record<string, string> = {};
  
    patternParts.forEach((part, index) => {
      if (part.startsWith(":")) {
        const key = part.slice(1);
        params[key] = pathParts[index];
      }
    });
  
    return params;
  }
