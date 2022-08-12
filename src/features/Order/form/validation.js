import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
   orderer: Yup.string().required('Besteller is verplicht.'),
   deliverer: Yup.string().required('Bezorger is verplicht.'),
   status: Yup.string().required('Status is verplicht.'),
});

export const orderFormOptions = { resolver: yupResolver(validationSchema) };
