// Single user authentication using environment variables
// Single user authentication using environment variables

export interface LoginParams {
  correo: string;
  contraseña: string;
}

export class AuthService {
  public async login({
    correo,
    contraseña,
  }: LoginParams): Promise<{ correo: string }> {
    const userEmail = process.env.USER_EMAIL;
    const userPassword = process.env.USER_PASSWORD;
    if (!userEmail || !userPassword) {
      throw new Error("Authentication credentials not configured");
    }
    if (correo !== userEmail || contraseña !== userPassword) {
      throw new Error("Credenciales inválidas");
    }
    return { correo };
  }
}
