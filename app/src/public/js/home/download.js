"use strict";

const logger = require('../../../config/logger')

async function sendRequest() {
    location.href = '/download';
    logger.log('download', 'Someone downloaded');
  }
