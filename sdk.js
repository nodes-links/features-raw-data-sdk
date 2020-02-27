"use strict";
// Auto-generated by AWS Api Gateway, do not modify.
Object.defineProperty(exports, "__esModule", { value: true });
const uritemplate = require("uritemplate");
const util_aws_apigateway_helpers_sdk_libs_1 = require("@nodes-links/util-aws-apigateway-helpers-sdk-libs");
/*
* Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License").
* You may not use this file except in compliance with the License.
* A copy of the License is located at
*
*  http://aws.amazon.com/apache2.0
*
* or in the "license" file accompanying this file. This file is distributed
* on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
* express or implied. See the License for the specific language governing
* permissions and limitations under the License.
*/
exports.apigClientFactory = {};
exports.apigClientFactory.newClient = function (config) {
    const apigClient = {};
    if (config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if (config.accessKey === undefined) {
        config.accessKey = '';
    }
    if (config.secretKey === undefined) {
        config.secretKey = '';
    }
    if (config.apiKey === undefined) {
        config.apiKey = '';
    }
    if (config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if (config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if (config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if (config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }
    // extract endpoint and path from url
    var invokeUrl = 'https://devpublicapi-api.aegis.dev-nodeslinks.com/raw-data';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);
    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };
    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }
    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };
    var apiGatewayClient = util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    apigClient.configOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var configOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/config').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(configOptionsRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.configPrimaveraTablesGet = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var configPrimaveraTablesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/config/primavera-tables').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(configPrimaveraTablesGetRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.configPrimaveraTablesOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var configPrimaveraTablesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/config/primavera-tables').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(configPrimaveraTablesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.versionsVersionRefGet = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, ['versionRef'], ['body']);
        var versionsVersionRefGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/versions/{versionRef}').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, ['versionRef'])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(versionsVersionRefGetRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.versionsVersionRefPost = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, ['versionRef'], ['body']);
        var versionsVersionRefPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/versions/{versionRef}').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, ['versionRef'])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(versionsVersionRefPostRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.versionsVersionRefOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var versionsVersionRefOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/versions/{versionRef}').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(versionsVersionRefOptionsRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.versionsVersionRefSignedUrlGet = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, ['versionRef'], ['body']);
        var versionsVersionRefSignedUrlGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/versions/{versionRef}/signed-url').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, ['versionRef'])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(versionsVersionRefSignedUrlGetRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.versionsVersionRefSignedUrlOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var versionsVersionRefSignedUrlOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/versions/{versionRef}/signed-url').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(versionsVersionRefSignedUrlOptionsRequest, authType, additionalParams, config.apiKey);
    };
    return apigClient;
};
//# sourceMappingURL=sdk.js.map