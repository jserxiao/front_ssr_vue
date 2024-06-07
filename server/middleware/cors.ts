export default fromNodeMiddleware((req: any, res: any, next: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // 允许任何源
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 允许的方法
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept'); // 允许的头

    if (req.method === 'OPTIONS') {
      res.statusCode = 204;
      res.end();
    } else {
      next();
    }
  })