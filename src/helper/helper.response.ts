import { HttpException } from '@nestjs/common';

export class Response {
  message: string;
  data: any;
  constructor(data: any, message: string) {
    this.message = message;
    this.data = data;
  }
}

export const response = (data: any, message = 'Success') => {
  return new Response(data, message);
};

export const responseError = (message: string, code = 400) => {
  return Promise.reject(new HttpException({ message: message }, code));
};
