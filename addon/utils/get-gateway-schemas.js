export default function getGatewaySchemas() {
    const schemas = {
        stripe: {
            secret_key: '',
            publishable_key: '',
            show_postal_code: true,
            ideal_payment: false,
            fpx_payment: false,
        },
        mpesa_stk: {
            merchant_id: '',
            pass_key: '',
            consumer_key: '',
            consumer_secret: '',
        },
        braintree: {
            merchant_id: '',
            public_key: '',
            private_key: '',
            tokenization_key: '',
        },
        qpay: {
            username: '',
            password: '',
            invoice_id: '',
        },
        manual: {
            public_key: '',
            private_key: '',
            key_id: '',
            key_secret: '',
            email: '',
            name: '',
            details: '',
            payment_instructions: '',
        },
    };

    return schemas;
}
