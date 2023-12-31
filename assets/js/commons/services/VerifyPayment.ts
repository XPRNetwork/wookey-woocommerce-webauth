import axios, { AxiosRequestConfig } from 'axios'
import type{ PaymentVerifyResponse, WPResponse } from './../type';
export function verifyPayment(baseDomain:string,paymentKey: string,transactionId:string,network:string="testnet") {
  
  
  let data = JSON.stringify({
    "paymentKey": paymentKey,
    "transactionId": transactionId,
    "network":network
  });

  let config:AxiosRequestConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${baseDomain}/wp-json/wookey/v1/verify-payment`,
    headers: { 
      'Content-Type': 'application/json', 
    },
    data : data
  };

  return axios<WPResponse<PaymentVerifyResponse>>(config)

}