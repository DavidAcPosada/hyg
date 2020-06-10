import * as yup from 'yup';

import { REQUIRED_MESSAGE } from './../utils/messages'

export const nameValidations = yup.object().shape({
    name: yup.string().required(REQUIRED_MESSAGE),
    lastName: yup.string().required(REQUIRED_MESSAGE),
})