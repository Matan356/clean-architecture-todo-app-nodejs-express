import NodeCache from 'node-cache';

const cache = new NodeCache();
const cacheMiddleware = (req, res, next) => {
  const cacheKey = req.originalUrl;
  console.log('cache on', cacheKey);

  const cachedResponse = cache.get(cacheKey);
  if (cachedResponse) {
    console.log('Retrieve from cache');
    return res.send(cachedResponse);
  }

  console.log('Sending response');
  next();
};

export { cacheMiddleware, cache };
