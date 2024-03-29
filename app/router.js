'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const namespace = "/pg_postgis_mvt/api/v1"
  router.get('/',controller.home.index);

  //http://localhost:9080/pg_postgis_mvt/api/v1/geo_result/6/49/25
	router.get(namespace+"/:tableName/:z/:x/:y", controller.mvt.getMvt)
};