export const LOGIN = 'LOGIN'; // para padronizar cria constante do tipo e exporta para também ser usado no reducer do user

/* action que só é disparada ao clicar no botaõ de enviar no formulário de login, recebe o email por parâmetro e envia type, 
e o dito cujo email via action para o reducer do user para ser de fato salvo no store */
export const saveEmailLogin = (email) => ({ type: LOGIN, email });
