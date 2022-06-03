export type Cause = {
  code: string;
  description: string;
};

type Settings = {
  bin: {
    pattern: string;
    installments_pattern: string;
    exclusion_pattern: string;
  };
  card_number: {
    length: number;
    validation: string;
  };
  security_code: {
    mode: string;
    card_location: string;
    length: number;
  };
};

export type CallbackGetPaymentMethod = (status: number, response: {
  accreditation_time: number;
  additional_info_needed: string[];
  deferred_capture: string;
  financial_institutions: any[];
  id: string;
  max_allowed_amount: number;
  min_allowed_amount: number;
  name: string;
  payment_type_id: string;
  processing_modes: string[];
  secure_thumbnail: string;
  settings: Settings[];
  status: string;
  thumbnail: string;
  error?: string;
  cause?: Cause[] | Cause;
  message?: string;
}) => void;

export type GetPaymentMethod = (
  settings: {
    bin: string;
    payment_method_id?: string;
  },
  callback: CallbackGetPaymentMethod,
) => CallbackGetPaymentMethod;

export type Mercadopago = {
  deviceProfileId: string;
  key: string;
  referer: string;
  tokenId: string;
  version: string;
  sessionId: any;
  initialized: boolean;
  initializedInsights: boolean;

  AJAX: (t: any) => void;
  clearSession: () => void;
  createDeviceProvider: (n: Function) => void;
  createToken: (e: any, t: any) => void;
  getAllPaymentMethods: (t: any) => any;
  getIdentificationTypes: (t: any) => any;
  getInstallments: (t: any, r: any) => any;
  getIssuers: () => any;
  getPaymentMethod: GetPaymentMethod;
  getPaymentMethods: () => any;
  initMercadopago: () => void;
  setPaymentMethods: (e: any) => void;
  setPublishableKey: (key: string) => void;
  validateBinPattern: (e: any, t: any) => boolean;
  validateCardNumber: (e: any, t: any, n: Function) => void;
  validateCardholderName: (e: any) => boolean;
  validateExpiryDate: (e: any, t: any) => boolean;
  validateIdentification: (e: any, t: any) => boolean;
  validateLuhn: (e: any) => boolean;
  validateSecurityCode: (e: any, t: any, n: Function) => any;
};

export type MercadoPago = {
  cardForm: (e: any) => any;
  checkout: (e: any) => {
    open: () => void;
  };
  constructor: (key: string, options: { locale: string }) => any;
  createCardToken: (e: any, t: any) => Promise<any>;
  getIdentificationTypes: () => Promise<any>;
  getInstallments: (e: any) => Promise<any>;
  getIssuers: (e: any) => Promise<any>;
  getPaymentMethods: (e: any) => Promise<any>;
};

interface Constructable<T> {
  new(key: string, options?: { locale: string }): T;
}
declare global {
  interface Window {
    MercadoPago: Constructable<MercadoPago>;
  }
}
