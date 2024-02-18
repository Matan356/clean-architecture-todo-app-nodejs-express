import { verifyJwt } from '../../../../../F.T.M/server/src/utils/jwt.utils';
import { reIssueAccessToken } from '../../../../../F.T.M/server/src/service/auth.service';

import logger from '../../../../../F.T.M/server/src/utils/logger';

const deserializeUser = async (req, res, next) => {
    const { accessToken, refreshToken } = req.cookies;

    accessToken ? logger.info('accessToken exist') : logger.warn("you don't have accessToken");
    refreshToken ? logger.info('refreshToken exist') : logger.warn("you don't have refreshToken");

    const { decoded, expired } = verifyJwt(accessToken);

    if (decoded) {
        res.locals.user = decoded;
        return next();
    }

    if (expired && refreshToken) {
        logger.warn('your access token expired - making new... ');

        const newAccessToken = await reIssueAccessToken({ refreshToken });

        if (newAccessToken) {
            logger.info('you have a new access token', { newAccessToken });

            res.setHeader('x-access-token', newAccessToken);

            res.cookie('accessToken', newAccessToken, {
                maxAge: 1000 * 60 * 60,
                httpOnly: true,
                domain: 'localhost',
                path: '/',
                sameSite: 'strict',
                secure: false,
            });
        }

        const result = verifyJwt(newAccessToken);
        result?.valid && logger.info('result is valid');
        res.locals.user = result.decoded;
        return next();
    }

    return next();
};

export default deserializeUser;
