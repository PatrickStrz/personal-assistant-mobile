import { USER_ID_DEV, USER_ID_PROD, DEV } from '../secrets'

export const USER_ID = DEV ? USER_ID_DEV : USER_ID_PROD
