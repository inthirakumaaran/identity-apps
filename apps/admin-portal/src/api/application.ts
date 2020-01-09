import { AuthenticateSessionUtil } from "@wso2is/authentication";
import { AxiosHttpClient } from "@wso2is/http";
import { ServiceResourcesEndpoint } from "../configs";
import axios from "axios";
import { Claim, ClaimDialect, ExternalClaim } from "../models/claim";

/**
 * Get an axios instance.
 *
 * @type {AxiosHttpClientInstance}
 */
const httpClient = AxiosHttpClient.getInstance();
httpClient.init(true, null, null, null, null);

/**
 * Retrieve claims in local dialect.
 *
 * @return {Promise<any>} a promise containing the response.
 */
export const getLocalClaims = (): Promise<any> => {
        const requestConfig = {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": CLIENT_HOST,
                "Content-Type": "application/json"
            },
            method: "GET",
            url: "https://localhost:9443/api/server/v1/claim-dialects/local/claims"
        };

        // tslint:disable-next-line:max-line-length
        return httpClient.get(requestConfig.url, { headers: requestConfig.headers })
            .then((response) => {
                if (response.status !== 200) {
                    return Promise.reject(new Error("Failed get user info from: "));
                }
                // tslint:disable-next-line:no-console
                // console.log(response.data as Claim)
                return Promise.resolve(response.data as Claim);
            }).catch((error) => {
                return Promise.reject(error);
            });
};

export const getClaimDialect = (): Promise<any> => {
    const requestConfig = {
        headers: {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": CLIENT_HOST,
            "Content-Type": "application/json"
        },
        url: "https://localhost:9443/t/carbon.super/api/server/v1/claim-dialects"
    };

    // tslint:disable-next-line:max-line-length
    return httpClient.get(requestConfig.url, { headers: requestConfig.headers })
        .then((response) => {
            if (response.status !== 200) {
                return Promise.reject(new Error("Failed get user info from: "));
            }
            // tslint:disable-next-line:no-console
            // console.log(response.data as Claim)
            return Promise.resolve(response.data as ClaimDialect);
        }).catch((error) => {
            return Promise.reject(error);
        });
};

export const getExternalClaims = (dialectID: string): Promise<any> => {
    const requestConfig = {
        headers: {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": CLIENT_HOST,
            "Content-Type": "application/json"
        },
        url: "https://localhost:9443/t/carbon.super/api/server/v1/claim-dialects/" + dialectID + "/claims"
    };

    // tslint:disable-next-line:max-line-length
    return httpClient.get(requestConfig.url, { headers: requestConfig.headers })
        .then((response) => {
            if (response.status !== 200) {
                return Promise.reject(new Error("Failed get user info from: "));
            }
            // tslint:disable-next-line:no-console
            // console.log(response.data as Claim)
            return Promise.resolve(response.data as ExternalClaim);
        }).catch((error) => {
            return Promise.reject(error);
        });
};