import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, Method } from 'axios';
import container from '@app/dependency-injection';
import { Logger } from 'winston';
export default abstract class AxiosClientFactory {
  private logger: Logger = container.get('Shared.Logger');
  private axiosInstance: any = axios.create({});

  protected async invoke<R, D>(
      url: string,
      method: Method,
      headers: AxiosRequestHeaders = { Accept: 'application/json' },
      data?: D,
      timeout: number = 10000,
  ): Promise<AxiosResponse<R | never>> {
    try {
      this.axiosInstance = axios.create({
        headers: headers,
      });

      this.handleInterceptors();

      return await this.axiosInstance({ method, url, headers, data, timeout });
    } catch (error: any) {
      return error.response;
    }
  }

  private handleInterceptors = (): void => {
    this.axiosInstance.interceptors.request.use(
        (config: AxiosRequestConfig) => {
          this.logger.info(`[ Request config ]: ${config.method?.toUpperCase() || ''} [ To ]: ${config.url || ''}`);
          return config;
        },
        (error: AxiosError<string>) => {
          this.logger.error(`[ Request Error ] CODE ${error.code || 'UNKNOWN'} | ${error.message}`);
          return error;
        },
    );

    this.axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
          this.logger.info(`[ Response ]: STATUS:${response.status}`);
          return response;
        },
        (error: AxiosError<string>) => {
          this.logger.error(`[ Stack Error ] CODE ${error.stack || 'UNKNOWN'} | ${error.message}`);
          this.logger.error(`[ Response Error ] CODE ${error.code || 'UNKNOWN'} | ${error.message}`);
          return Promise.reject(error);
        },
    );
  }
}
