import logger from '../../../../../F.T.M/server/src/utils/logger';

const requireUser = (req, res, next) => {
  const role = res.locals.user.role;
  if (role != 'admin') {
    logger.error('you are not admin');
    return res.sendStatus(401);
  }

  return next();
};

export default requireAdmin;
