module.exports = (req, res, next) => {
  console.log(req.headers);
  if (!req.headers.authorization) {
    req.status(401).json({ msg: "Acceso no authorizado" });
    next();  
}else{
    // Comprar la validez del token
}

};
