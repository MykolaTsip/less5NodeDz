const {errorHandle, ErrorEnum, ErrorStatusEnum} =require('../error');


module.exports = (req, res, next) => {
   try {
    let laptopObj = req.body;

    if (laptopObj.year < 1976 || laptopObj.year > 2020) {
return next(new errorHandle(
    ErrorEnum.NOT_VALID_YEAR.message, ErrorStatusEnum.NOT_VALIDITY, ErrorEnum.NOT_VALID_YEAR.code
    ))
    }

    if (laptopObj.price < 1000 || laptopObj.price > 1000000) {
        return next(new errorHandle(
            ErrorEnum.NOT_VALID_PRICE.message, ErrorStatusEnum.NOT_VALIDITY, ErrorEnum.NOT_VALID_PRICE.code
        ))
    }
      next()
   }
   catch (e) {
       next(e)
   }

}
