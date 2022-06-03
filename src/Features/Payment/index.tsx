import { Button, Portal } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MercadoPago } from "./types";

type Props = {};

const useMercadopago = (publicKey: string, options?: { locale: string }) => {
  const [mercadopago, setMercadopago] = useState<MercadoPago>();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2";

    script.addEventListener("load", () => {
      setMercadopago(new window.MercadoPago(publicKey, options));
    });

    document.body.appendChild(script);

    return () => {
      let iframe = document.body.querySelector("iframe[src*=\"mercadolibre\"]");

      if (iframe) {
        document.body.removeChild(iframe);
      }

      document.body.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mercadopago;
};

const Payment = (props: Props) => {
  const [checkout, setCheckout] = useState<
    ReturnType<MercadoPago["checkout"]>
  >();
  const mercadopago = useMercadopago(
    process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY || "",
    {
      locale: "es-CL",
    },
  );
  useEffect(() => {
    if (mercadopago) {
      const checkout = mercadopago.checkout({
        preference: {
          id: "YOUR_PREFERENCE_ID",
        },
      });
      setCheckout(checkout);
    }
  }, [mercadopago]);

  if (!mercadopago || !checkout) {
    return null;
  }
  return (
    <>
      <Button
        variant={"outline"}
        isLoading={!mercadopago}
        onClick={() => checkout.open()}
      >
        Comprar XXX
      </Button>
      <Portal>
      </Portal>
    </>
  );
};

export default Payment;
