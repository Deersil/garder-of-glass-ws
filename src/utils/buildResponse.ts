
interface IResponse {
  status?: number,
  content?: any,
  error?: any,
  successMessage?: string,
  ctx?: any,
}

export default ({
  status = 200,
  content = null,
  error = null,
  successMessage = '',
  ctx = {},
}: IResponse) => {
  const responseObject = {
    status,
    error,
    data: error
      ? {}
      : {
          content: ctx.dtoMethod && typeof ctx.dtoMethod === 'function' ? ctx.dtoMethod(content) : content,
          message: successMessage || null,
        },
  };
  ctx.status = status;
  ctx.body = responseObject;
};