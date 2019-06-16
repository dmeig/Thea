export interface IToken {
  header: { alg: string; typ: string };
}

function parseJwt(token: string): any {
  const rawTokenParts = token.split('.').slice(0, 2);
  const tokenParts = rawTokenParts.map((part) => {
    return atob(part);
  });

  console.log(tokenParts);

  return JSON.parse(tokenParts[1]);
}

const helper = { parseJwt };

export default helper;
